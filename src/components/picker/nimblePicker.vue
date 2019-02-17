<template>

<div class="emoji-mart" :style="customStyles">
  <div class="emoji-mart-bar" v-if="showCategories">
    <anchors
      :data="data"
      :i18n="mergedI18n"
      :color="color"
      :categories="filteredCategories"
      :active-category="activeCategory"
      @click="onAnchorClick"
    />
  </div>

  <search
    v-if="showSearch"
    ref="search"
    :data="data"
    :i18n="mergedI18n"
    :emojis-to-show-filter="emojisToShowFilter"
    :include="include"
    :exclude="exclude"
    :custom="customEmojis"
    :recent="recentEmojis"
    :auto-focus="autoFocus"
    @search="onSearch"
  />

  <category
    v-show="searchEmojis"
    class="emoji-mart-search-results"
    :data="data"
    :i18n="mergedI18n"
    id="search"
    name="Search"
    :emojis="searchEmojis"
    :emoji-props="emojiProps"
  />
  <DynamicScroller 
    v-show="!searchEmojis"
    ref="dynScroller" 
    :items="filteredCategoriesItems" 
    :min-item-height="60" 
    class="scroller" 
    :emit-update="true" 
    @update="onScrollUpdate"
  >
    <template slot-scope="{ item, active, index }">
      <DynamicScrollerItem 
        :item="item" 
        :active="active" 
        :data-index="index"
      >
        <category
          v-show="item.show"
          ref="categories"
          :key="item.category.id"
          :data="item.data"
          :i18n="item.mergedI18n"
          :id="item.category.id"
          :name="item.category.name"
          :emojis="item.category.emojis"
          :emoji-props="item.emojiProps"
        />
      </DynamicScrollerItem>
    </template>
  </DynamicScroller>

  <div class="emoji-mart-bar" v-if="showPreview">
    <preview
      :data="data"
      :title="title"
      :emoji="previewEmoji"
      :idle-emoji="idleEmoji"
      :show-skin-tones="showSkinTones"
      :emoji-props="emojiProps"
      :skin-props="skinProps"
      @change="onSkinChange"
    />
  </div>
</div>

</template>

<script>

import '../../vendor/raf-polyfill'
import store from '../../utils/store'
import frequently from '../../utils/frequently'
import { deepMerge, measureScrollbar } from '../../utils'
import { PickerProps } from '../../utils/shared-props'
import Anchors from '../anchors'
import Category from '../category'
import Preview from '../preview'
import Search from '../search'

import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const RECENT_CATEGORY = { id: 'recent', name: 'Recent', emojis: null }
const CUSTOM_CATEGORY = { id: 'custom', name: 'Custom', emojis: [] }

const I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    people: 'Smileys & People',
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

function makeCustomEmoji(emoji) {
  return Object.assign({}, emoji, {
    id: emoji.short_names[0],
    custom: true
  })
}

export default {
  props: {
    ...PickerProps,
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    let customEmojis = this.custom.map(makeCustomEmoji),
        recentEmojis = this.recent || frequently.get(this.perLine)

    if (recentEmojis.length) {
      recentEmojis = recentEmojis.map((id) => {
        for (let customEmoji of customEmojis) {
          if (customEmoji.id === id) {
            return customEmoji
          }
        }

        return id
      })
    }

    if (this.emojisToShowFilter) {
      customEmojis = customEmojis.filter(e => this.emojisToShowFilter(this.data.emojis[e] || e))
      recentEmojis = recentEmojis.filter(e => this.emojisToShowFilter(this.data.emojis[e] || e))
    }

    return {
      activeSkin: this.skin || store.get('skin') || this.defaultSkin,
      activeCategory: null,
      previewEmoji: null,
      searchEmojis: null,
      customEmojis: customEmojis,
      recentEmojis: recentEmojis
    }
  },
  computed: {
    customStyles() {
      return {
        width: this.calculateWidth + 'px',
        ...this.pickerStyles
      }
    },
    emojiProps() {
      return {
        native: this.native,
        skin: this.activeSkin,
        set: this.set,
        tooltip: this.emojiTooltip,
        onEnter: this.onEmojiEnter.bind(this),
        onLeave: this.onEmojiLeave.bind(this),
        onClick: this.onEmojiClick.bind(this)
      }
    },
    skinProps() {
      return {
        skin: this.activeSkin
      }
    },
    calculateWidth() {
      return (this.perLine * (this.emojiSize + 12)) + 12 + 2 + measureScrollbar()
    },
    filteredCategories() {
      return this.categories.filter((category) => {
        return category.emojis.length > 0;
      })
    },
    filteredCategoriesItems() {
      let id = 0;
      return this.filteredCategories.map((category) => {
        return {
            'id': id++,
            'category': category,
            'show': !this.searchEmojis && (this.infiniteScroll || category == this.activeCategory),
            'mergedI18n': this.mergedI18n,
            'data': this.data,
            'emojisLength': category.emojis.length,
            'emojiProps': this.emojiProps
        }
      })
    },
    mergedI18n() {
      return Object.freeze(deepMerge(I18N, this.i18n))
    },
    idleEmoji() {
      return this.data.emoji(this.emoji)
    }
  },
  created() {
    RECENT_CATEGORY.emojis = []
    for (let idx in this.recentEmojis) {
      let emoji = this.recentEmojis[idx]
      RECENT_CATEGORY.emojis.push(this.data.emoji(emoji))
    }

    this.categories = []
    this.categories.push(RECENT_CATEGORY)
    this.categories.push(...this.data.categories())

    this.categories[0].first = true
    Object.freeze(this.categories)
    this.activeCategory = this.filteredCategories[0]
    this.skipScrollUpdate = false
  },
  methods: {
    onScrollUpdate(startIndex, endIndex) {
      if (this.skipScrollUpdate) {
          this.skipScrollUpdate = false
      } else {
          this.activeCategory = this.filteredCategories[endIndex-1]
      }
    },
    onAnchorClick(category) {
      let i = this.filteredCategories.indexOf(category)
      this.$refs.dynScroller.scrollToItem(i)
      this.activeCategory = this.filteredCategories[i]
      this.skipScrollUpdate = true
    },
    onSearch(emojis) {
      this.searchEmojis = emojis
    },
    onEmojiEnter(emoji) {
      if (emoji.custom) {
        // Use Array.prototype.find() when it is more widely supported.
        const customEmoji = this.customEmojis.filter(_emoji => _emoji.id === emoji.id)[0]
        emoji = Object.assign({}, emoji, customEmoji)
      }

      this.previewEmoji = emoji
    },
    onEmojiLeave(emoji) {
      this.previewEmoji = null
    },
    onEmojiClick(emoji) {
      this.$emit('select', emoji)
      frequently.add(emoji)
    },
    onSkinChange(skin) {
      this.activeSkin = skin
      store.update({ skin })

      this.$emit('skin-change', skin)
    }
  },
  components: {
    Anchors,
    Category,
    Preview,
    Search,
    DynamicScroller,
    DynamicScrollerItem
  }
}

</script>
