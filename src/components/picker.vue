<template>

<div class="emoji-mart" :style="{ width: calculateWidth + 'px' }">
  <div class="emoji-mart-bar">
    <anchors
      :i18n="i18n"
      :color="color"
      :categories="categories"
      :active-category="activeCategory"
      @click="onAnchorClick">
    </anchors>
  </div>

  <div class="emoji-mart-scroll" ref="scroll" @scroll="onScroll">
    <search
      ref="search"
      :i18n="i18n"
      :emojis-to-show-filter="emojisToShowFilter"
      :include="include"
      :exclude="exclude"
      :auto-focus="autoFocus"
      @search="onSearch">
    </search>
    <category
      v-show="searchEmojis"
      :i18n="i18n"
      name="Search"
      :emojis="searchEmojis"
      :per-line="perLine"
      :native="native"
      :emoji-props="emojiProps">
    </category>
    <category
      v-for="category in categories"
      v-show="!searchEmojis"
      ref="categories"
      :key="category.name"
      :i18n="i18n"
      :name="category.name"
      :emojis="category.emojis"
      :per-line="perLine"
      :native="native"
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

const RECENT_CATEGORY = { name: 'Recent', emojis: null }

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
  },
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
    i18n: {
      type: Object,
      default() {
        return I18N
      }
    }
  },
  data() {
    return {
      activeSkin: store.get('skin') || this.skin,
      activeCategory: null,
      categories: [],
      previewEmoji: null,
      searchEmojis: null
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
        onOver: this.onEmojiOver.bind(this),
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
    }
  },
  created() {
    this.categories = []

    for (let category of data.categories) {
      let isIncluded = this.include == undefined ? true : this.include.indexOf(category.name.toLowerCase()) > -1
      let isExcluded = this.exclude == undefined ? false : this.exclude.indexOf(category.name.toLowerCase()) > -1
      if (!isIncluded || isExcluded) { continue }

      if (this.emojisToShowFilter) {
        let newEmojis = []

        for (let emoji of category.emojis) {
          let unified = data.emojis[emoji].unified

          if (this.emojisToShowFilter(unified)) {
            newEmojis.push(emoji)
          }
        }

        if (newEmojis.length) {
          let newCategory = {
            emojis: newEmojis,
            name: category.name
          }

          this.categories.push(newCategory)
        }
      } else {
        this.categories.push(category)
      }
    }

    let includeRecent = this.include == undefined ? true : this.include.indexOf('recent') > -1
    let excludeRecent = this.exclude == undefined ? false : this.exclude.indexOf('recent') > -1
    if (includeRecent && !excludeRecent) {
      this.categories.unshift(RECENT_CATEGORY)
    }

    if (this.categories[0]) {
      this.categories[0].first = true
      this.activeCategory = this.categories[0]
    }
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
          activeCategory = this.categories[0]

      for (let i = 0, l = this.categories.length; i < l; i++) {
        let category = this.categories[i],
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
    onEmojiOver(emoji) {
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

.emoji-mart-bar:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.emoji-mart-bar:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.emoji-mart-scroll {
  position: relative;
  overflow-y: scroll;
  height: 270px;
  padding: 0 6px 6px 6px;
  border: solid #d9d9d9;
  border-width: 1px 0;

  /* Fix for rendering sticky positioned category labels on Chrome */
  z-index: 0;
}

</style>
