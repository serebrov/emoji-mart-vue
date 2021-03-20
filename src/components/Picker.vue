<template>
  <section class="emoji-mart emoji-mart-static" :style="customStyles">
    <div class="emoji-mart-bar emoji-mart-bar-anchors" v-if="showCategories">
      <anchors
        :data="data"
        :i18n="mergedI18n"
        :color="color"
        :categories="categories"
        :active-category="activeCategory"
        @click="onAnchorClick"
      />
    </div>

    <slot
      name="searchTemplate"
      :data="data"
      :i18n="i18n"
      :auto-focus="autoFocus"
      :on-search="onSearch"
    >
      <search
        v-if="showSearch"
        ref="search"
        :data="data"
        :i18n="mergedI18n"
        :auto-focus="autoFocus"
        :on-search="onSearch"
        @search="onSearch"
        @arrowLeft="onArrowLeft"
        @arrowRight="onArrowRight"
        @arrowDown="onArrowDown"
        @arrowUp="onArrowUp"
        @enter="onEnter"
      />
    </slot>

    <div
      role="tabpanel"
      class="emoji-mart-scroll"
      ref="scroll"
      @scroll="onScroll"
    >
      <div id="emoji-mart-list" role="listbox" aria-expanded="true">
        <category
          v-show="searchEmojis"
          role="rowgroup"
          :data="data"
          :i18n="mergedI18n"
          id="search"
          name="Search"
          :emojis="searchEmojis"
          :emoji-props="emojiProps"
        />
        <category
          v-for="(category, idx) in filteredCategories"
          v-show="
            !searchEmojis && (infiniteScroll || category == activeCategory)
          "
          :ref="'categories_' + idx"
          :key="category.id"
          :data="data"
          :i18n="mergedI18n"
          :id="category.id"
          :name="category.name"
          :emojis="category.emojis"
          :emoji-props="emojiProps"
        />
      </div>
    </div>

    <slot
      name="previewTemplate"
      :data="data"
      :title="title"
      :emoji="previewEmoji"
      :idle-emoji="idleEmoji"
      :show-skin-tones="showSkinTones"
      :emoji-props="emojiProps"
      :skin-props="skinProps"
      :on-skin-change="onSkinChange"
    >
      <div class="emoji-mart-bar emoji-mart-bar-preview" v-if="showPreview">
        <preview
          :data="data"
          :title="title"
          :emoji="previewEmoji"
          :idle-emoji="idleEmoji"
          :show-skin-tones="showSkinTones"
          :emoji-props="emojiProps"
          :skin-props="skinProps"
          :on-skin-change="onSkinChange"
        />
      </div>
    </slot>
  </section>
</template>

<script>
import '../vendor/raf-polyfill'
import store from '../utils/store'
import frequently from '../utils/frequently'
import { deepMerge, measureScrollbar } from '../utils'
import { PickerProps } from '../utils/shared-props'
import Anchors from './anchors'
import Category from './category'
import Preview from './preview'
import Search from './search'

const I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    smileys: 'Smileys & Emotion',
    people: 'People & Body',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
    custom: 'Custom',
  },
}

export default {
  props: {
    ...PickerProps,
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeSkin: this.skin || store.get('skin') || this.defaultSkin,
      activeCategory: null,
      previewEmoji: null,
      previewEmojiCategoryIdx: 0,
      previewEmojiIdx: -1,
      searchEmojis: null,
    }
  },
  computed: {
    customStyles() {
      return {
        width: this.calculateWidth + 'px',
        ...this.pickerStyles,
      }
    },
    emojiProps() {
      return {
        native: this.native,
        skin: this.activeSkin,
        set: this.set,
        emojiTooltip: this.emojiTooltip,
        emojiSize: this.emojiSize,
        selectedEmoji: this.previewEmoji,
        selectedEmojiCategory: this.previewEmojiCategory,
        onEnter: this.onEmojiEnter.bind(this),
        onLeave: this.onEmojiLeave.bind(this),
        onClick: this.onEmojiClick.bind(this),
      }
    },
    skinProps() {
      return {
        skin: this.activeSkin,
      }
    },
    calculateWidth() {
      return this.perLine * (this.emojiSize + 12) + 12 + 2 + measureScrollbar()
    },
    filteredCategories() {
      return this.categories.filter((category) => {
        let hasEmojis = category.emojis.length > 0
        return hasEmojis
      })
    },
    mergedI18n() {
      return Object.freeze(deepMerge(I18N, this.i18n))
    },
    idleEmoji() {
      try {
        return this.data.emoji(this.emoji)
      } catch (e) {
        console.error(
          'Default preview emoji `' +
            this.emoji +
            '` is not available, check the Picker `emoji` property',
        )
        console.error(e)
        return this.data.firstEmoji()
      }
    },
    previewEmojiCategory() {
      if (this.previewEmojiCategoryIdx >= 0) {
        return this.categories[this.previewEmojiCategoryIdx]
      }
      return null
    },
  },
  created() {
    this.categories = []
    this.categories.push(...this.data.categories())
    this.categories = this.categories.filter((category) => {
      return category.emojis.length > 0
    })

    this.categories[0].first = true
    Object.freeze(this.categories)
    this.activeCategory = this.categories[0]
    this.skipScrollUpdate = false
  },
  methods: {
    onScroll() {
      if (this.infiniteScroll && !this.waitingForPaint) {
        this.waitingForPaint = true
        window.requestAnimationFrame(this.onScrollPaint.bind(this))
      }
    },
    onScrollPaint() {
      this.waitingForPaint = false
      let scrollTop = this.$refs.scroll.scrollTop
      let activeCategory = this.filteredCategories[0]
      for (let i = 0, l = this.filteredCategories.length; i < l; i++) {
        let category = this.filteredCategories[i]
        let component = this.getCategoryComponent(i)
        // The `-50` offset switches active category (selected in the
        // anchors bar) a bit eariler, before it actually reaches the top.
        if (component && component.$el.offsetTop - 50 > scrollTop) {
          break
        }
        activeCategory = category
      }
      this.activeCategory = activeCategory
    },
    onAnchorClick(category) {
      if (this.searchEmojis) {
        // No categories are shown when search is active.
        return
      }
      let i = this.filteredCategories.indexOf(category)
      let component = this.getCategoryComponent(i)
      let scrollToComponent = () => {
        if (component) {
          let top = component.$el.offsetTop
          if (category.first) {
            top = 0
          }
          this.$refs.scroll.scrollTop = top
        }
      }
      if (this.infiniteScroll) {
        scrollToComponent()
      } else {
        this.activeCategory = this.filteredCategories[i]
      }
    },
    onSearch(value) {
      let emojis = this.data.search(value, this.maxSearchResults)
      this.searchEmojis = emojis
    },
    onEmojiEnter(emoji) {
      this.previewEmoji = emoji
      this.previewEmojiIdx = -1
      this.previewEmojiCategoryIdx = -1
    },
    onEmojiLeave(emoji) {
      this.previewEmoji = null
    },
    onArrowLeft() {
      if (this.previewEmojiIdx > 0) {
        this.previewEmojiIdx -= 1
      } else {
        this.previewEmojiCategoryIdx -= 1
        if (this.previewEmojiCategoryIdx < 0) {
          this.previewEmojiCategoryIdx = 0
        } else {
          this.previewEmojiIdx =
            this.categories[this.previewEmojiCategoryIdx].emojis.length - 1
        }
      }
      this.updatePreviewEmoji()
    },
    onArrowRight() {
      if (
        this.previewEmojiIdx <
        this.emojisLength(this.previewEmojiCategoryIdx) - 1
      ) {
        this.previewEmojiIdx += 1
      } else {
        this.previewEmojiCategoryIdx += 1
        if (this.previewEmojiCategoryIdx >= this.categories.length) {
          this.previewEmojiCategoryIdx = this.categories.length - 1
        } else {
          this.previewEmojiIdx = 0
        }
      }
      this.updatePreviewEmoji()
    },
    onArrowDown() {
      if (this.previewEmojiIdx == -1) {
        return this.onArrowRight()
      }

      const categoryLength = this.categories[this.previewEmojiCategoryIdx]
        .emojis.length
      let diff = 10
      if (this.previewEmojiIdx + diff > categoryLength) {
        diff = categoryLength - this.previewEmojiIdx
      }
      for (let i = 0; i < diff; i++) {
        this.onArrowRight()
      }
      this.updatePreviewEmoji()
    },
    onArrowUp() {
      let diff = 10
      if (this.previewEmojiIdx - diff < 0) {
        if (this.previewEmojiCategoryIdx > 0) {
          const prevCategoryLastRowLength =
            this.categories[this.previewEmojiCategoryIdx - 1].emojis.length % 10
          diff = this.previewEmojiIdx + prevCategoryLastRowLength
        } else {
          diff = 0
        }
      }
      for (let i = 0; i < diff; i++) {
        this.onArrowLeft()
      }
      this.updatePreviewEmoji()
    },
    onEnter(emoji) {
      this.$emit('select', this.previewEmoji)
      frequently.add(this.previewEmoji)
    },
    onEmojiClick(emoji) {
      this.$emit('select', emoji)
      frequently.add(emoji)
    },
    onSkinChange(skin) {
      this.activeSkin = skin
      store.update({ skin })

      this.$emit('skin-change', skin)
    },
    getCategoryComponent(index) {
      let component = this.$refs['categories_' + index]
      if (component && '0' in component) {
        // Vue 2 has $refs under v-for as an array.
        return component['0']
      }
      // Vue 3 does not support $refs as array.
      return component
    },
    updatePreviewEmoji() {
      if (this.searchEmojis) {
        this.previewEmoji = this.data.emoji(
          this.searchEmojis[this.previewEmojiIdx],
        )
      } else {
        this.previewEmoji = this.categories[
          this.previewEmojiCategoryIdx
        ].emojis[this.previewEmojiIdx]
      }
    },
    emojisLength(categoryIdx) {
      if (this.searchEmojis) {
        return this.searchEmojis.length
      } else {
        if (categoryIdx == -1) {
          return 0
        }
        return this.categories[categoryIdx].emojis.length
      }
    },
  },
  components: {
    Anchors,
    Category,
    Preview,
    Search,
  },
}
</script>
