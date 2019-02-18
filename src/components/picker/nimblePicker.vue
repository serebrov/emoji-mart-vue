<template>

<div class="emoji-mart" :style="customStyles">
  <div class="emoji-mart-bar" v-if="showCategories">
    <anchors
      :data="data"
      :i18n="mergedI18n"
      :color="color"
      :categories="categories"
      :active-category="activeCategory"
      @click="onAnchorClick"
    />
  </div>

  <search
    v-if="showSearch"
    ref="search"
    :data="data"
    :i18n="mergedI18n"
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
    :items="scrollerCategories" 
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

export default {
  props: {
    ...PickerProps,
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeSkin: this.skin || store.get('skin') || this.defaultSkin,
      activeCategory: null,
      previewEmoji: null,
      searchEmojis: null
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
    scrollerCategories() {
      let id = 0;
      return this.categories.map((category) => {
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
    this.categories = []
    this.categories.push(...this.data.categories())
    this.categories = this.categories.filter((category) => {
      return category.emojis.length > 0;
    })

    this.categories[0].first = true
    Object.freeze(this.categories)
    this.activeCategory = this.categories[0]
    this.skipScrollUpdate = false
  },
  methods: {
    onScrollUpdate(startIndex, endIndex) {
      if (this.skipScrollUpdate) {
          this.skipScrollUpdate = false
      } else {
          this.activeCategory = this.categories[endIndex-1]
      }
    },
    onAnchorClick(category) {
      let i = this.categories.indexOf(category)
      this.$refs.dynScroller.scrollToItem(i)
      this.activeCategory = this.categories[i]
      this.skipScrollUpdate = true
    },
    onSearch(emojis) {
      this.searchEmojis = emojis
    },
    onEmojiEnter(emoji) {
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
