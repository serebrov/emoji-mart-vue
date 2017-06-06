<template>

<div class="emoji-mart" :style="{ width: calculateWidth + 'px' }">
  <div class="emoji-mart-bar">
    <anchors
      :i18n="i18n"
      :color="color"
      :categories="filteredCategories"
      :active-category="activeCategory"
      @click="onAnchorClick">
    </anchors>
  </div>

  <search
    ref="search"
    :i18n="i18n"
    :emojis-to-show-filter="emojisToShowFilter"
    :include="include"
    :exclude="exclude"
    :custom="customEmojis"
    :auto-focus="autoFocus"
    @search="onSearch">
  </search>

  <div class="emoji-mart-scroll" ref="scroll" @scroll="onScroll">
    <category
      v-show="searchEmojis"
      :i18n="i18n"
      :emojis-to-show-filter="emojisToShowFilter"
      name="Search"
      :emojis="searchEmojis"
      :native="native"
      :custom="customEmojis"
      :emoji-props="emojiProps">
    </category>
    <category
      v-for="category in filteredCategories"
      v-show="!searchEmojis"
      ref="categories"
      :key="category.name"
      :i18n="i18n"
      :emojis-to-show-filter="emojisToShowFilter"
      :name="category.name"
      :emojis="category.emojis"
      :native="native"
      :custom="customEmojis"
      :emoji-props="emojiProps">
    </category>
  </div>

  <div class="emoji-mart-bar">
    <preview
      :title="title"
      :emoji="previewEmoji"
      :idle-emoji="emoji"
      :emoji-props="emojiProps"
      :skin-props="skinProps">
    </preview>
  </div>
</div>

</template>

<script>

import '../vendor/raf-polyfill'
import data from '../../data'
import store from '../utils/store'
import frequently from '../utils/frequently'
import { deepMerge } from '../utils'
import Anchors from './anchors'
import Category from './category'
import Emoji from './emoji'
import Preview from './preview'
import Search from './search'

const RECENT_CATEGORY = { name: 'Recent', emojis: [] }
const CUSTOM_CATEGORY = { name: 'Custom', emojis: [] }

let CATEGORIES = [];

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
    perLine: {
      type: Number,
      default: 9
    },
    emojiSize: {
      type: Number,
      default: 24
    },
    title: {
      type: String,
      default: 'Emoji Mart™'
    },
    emoji: {
      type: String,
      default: 'department_store'
    },
    color: {
      type: String,
      default: '#ae65c5'
    },
    set: {
      type: String,
      default: 'apple'
    },
    skin: {
      type: Number,
      default: 1
    },
    native: {
      type: Boolean,
      default: false
    },
    backgroundImageFn: {
      type: Function
    },
    sheetSize: {
      type: Number,
      default: 64
    },
    emojisToShowFilter: {
      type: Function
    },
    include: {
      type: Array
    },
    exclude: {
      type: Array
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    custom: {
      type: Array,
      default() {
        return []
      }
    },
    i18n: {
      type: Object,
      default() {
        return I18N
      }
    }
  },
  data() {
    let customEmojis = this.custom.map(makeCustomEmoji),
        recentEmojis = frequently.get(this.perLine)

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

    return {
      activeSkin: store.get('skin') || this.skin,
      categories: [],
      activeCategory: null,
      previewEmoji: null,
      searchEmojis: null,
      customEmojis: customEmojis,
      recentEmojis: recentEmojis
    }
  },
  computed: {
    emojiProps() {
      return {
        native: this.native,
        skin: this.activeSkin,
        size: this.emojiSize,
        set: this.set,
        sheetSize: this.sheetSize,
        forceSize: this.native,
        backgroundImageFn: this.backgroundImageFn,
        onEnter: this.onEmojiEnter.bind(this),
        onLeave: this.onEmojiLeave.bind(this),
        onClick: this.onEmojiClick.bind(this)
      }
    },
    skinProps() {
      return {
        skin: this.activeSkin,
        onChange: this.onSkinChange.bind(this)
      }
    },
    calculateWidth() {
      return (this.perLine * (this.emojiSize + 12)) + 12 + 2
    },
    filteredCategories() {
      return this.categories.filter((category) => {
        let isIncluded = this.include && this.include.length ? this.include.indexOf(category.name.toLowerCase()) > -1 : true
        let isExcluded = this.exclude && this.exclude.length ? this.exclude.indexOf(category.name.toLowerCase()) > -1 : false
        let hasEmojis = category.emojis.length > 0

        if (this.emojisToShowFilter) {
          hasEmojis = category.emojis.some((emoji) => {
            return this.emojisToShowFilter(data.emojis[emoji] || emoji)
          })
        }

        return isIncluded && !isExcluded && hasEmojis
      })
    }
  },
  created() {
    RECENT_CATEGORY.emojis = this.recentEmojis
    CUSTOM_CATEGORY.emojis = this.customEmojis

    this.categories.push(RECENT_CATEGORY)
    this.categories.push(...data.categories)
    this.categories.push(CUSTOM_CATEGORY)

    this.categories[0].first = true
    this.activeCategory = this.categories[0]
  },
  methods: {
    onScroll() {
      if (!this.waitingForPaint) {
        this.waitingForPaint = true
        window.requestAnimationFrame(this.onScrollPaint.bind(this))
      }
    },
    onScrollPaint() {
      this.waitingForPaint = false

      let scrollTop = this.$refs.scroll.scrollTop,
          activeCategory = this.filteredCategories[0]

      for (let i = 0, l = this.filteredCategories.length; i < l; i++) {
        let category = this.filteredCategories[i],
            component = this.$refs.categories[i]

        if (component && component.$el.offsetTop > scrollTop) {
          break
        }

        activeCategory = category
      }

      this.activeCategory = activeCategory
    },
    onAnchorClick(category) {
      let i = this.categories.indexOf(category),
          component = this.$refs.categories[i],
          scrollToComponent = () => {
            if (component) {
              let top = component.$el.offsetTop

              if (category.first) {
                top = 0
              }

              this.$refs.scroll.scrollTop = top
            }
          }

      if (this.searchEmojis) {
        this.onSearch(null)
        this.$refs.search.clear()
        
        this.$nextTick(scrollToComponent)
      } else {
        scrollToComponent()
      }
    },
    onSearch(emojis) {
      this.searchEmojis = emojis
    },
    onEmojiEnter(emoji) {
      if (emoji.custom) {
        const customEmoji = this.customEmojis.find(_emoji => _emoji.id === emoji.id)
        emoji = Object.assign({}, emoji, customEmoji)
      }

      this.previewEmoji = emoji
    },
    onEmojiLeave(emoji) {
      this.previewEmoji = null
    },
    onEmojiClick(emoji) {
      this.$emit('click', emoji)
      frequently.add(emoji)
    },
    onSkinChange(skin) {
      this.activeSkin = skin
      store.update({ skin })
    }
  },
  components: {
    Anchors,
    Category,
    Emoji,
    Preview,
    Search
  }
}

</script>

<style>

.emoji-mart,
.emoji-mart * {
  box-sizing: border-box;
  line-height: 1.15;
}

.emoji-mart .emoji-mart-emoji {
  padding: 6px;
}

</style>

<style scoped>

.emoji-mart {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  font-size: 16px;
  display: inline-block;
  color: #222427;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background: #fff;
}

.emoji-mart-bar {
  border: 0 solid #d9d9d9;
}

.emoji-mart-bar:first-child {
  border-bottom-width: 1px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.emoji-mart-bar:last-child {
  border-top-width: 1px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.emoji-mart-scroll {
  position: relative;
  overflow-y: scroll;
  height: 270px;
  padding: 0 6px 6px 6px;

  /* Fix for rendering sticky positioned category labels on Chrome */
  z-index: 0;
}

</style>
