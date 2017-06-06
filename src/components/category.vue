<template>

<div :class="{ 'emoji-mart-category': true, 'emoji-mart-no-results': !hasResults }" v-if="isVisible && (isSearch || hasResults)">
  <div class="emoji-mart-category-label">
    <span>{{ i18n.categories[name.toLowerCase()] }}</span>
  </div>

  <emoji
    v-for="emoji in filteredEmojis"
    :key="emoji.id || emoji"
    :emoji="emoji"
    :native="emojiProps.native"
    :skin="emojiProps.skin"
    :set="emojiProps.set"
    :size="emojiProps.size"
    :sheet-size="emojiProps.sheetSize"
    :force-size="emojiProps.forceSize"
    :background-image-fn="emojiProps.backgroundImageFn"
    @click="emojiProps.onClick"
    @mouseenter="emojiProps.onEnter"
    @mouseleave="emojiProps.onLeave">
  </emoji>

  <div v-show="!hasResults">
    <emoji
      :size="38"
      emoji="sleuth_or_spy"
      :native="emojiProps.native"
      :skin="emojiProps.skin"
      :set="emojiProps.set"
      :sheet-size="emojiProps.sheetSize">
    </emoji>
    <div class="emoji-mart-no-results-label">{{ i18n.notfound }}</div>
  </div>
</div>

</template>

<script>

import data from '../../data'
import Emoji from './emoji'

export default {
  props: {
    i18n: {
      type: Object,
      required: true
    },
    emojisToShowFilter: {
      type: Function
    },
    emojis: {
      type: Array
    },
    hasStickyPosition: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      required: true
    },
    emojiProps: {
      type: Object,
      required: true
    }
  },
  computed: {
    filteredEmojis() {
      if (this.emojisToShowFilter) {
        return this.emojis.filter((emoji) => {
          return this.emojisToShowFilter(data.emojis[emoji] || emoji)
        })
      }

      return this.emojis
    },
    isVisible() {
      return !!this.emojis
    },
    isSearch() {
      return this.name == 'Search'
    },
    hasResults() {
      return this.filteredEmojis.length > 0
    }
  },
  components: {
    Emoji
  }
}

</script>

<style scoped>

.emoji-mart-category {
  position: relative;
}

.emoji-mart-category-label {
  position: sticky;
  top: 0;
}

.emoji-mart-category .emoji-mart-emoji:before {
  z-index: 0;
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: #f4f4f4;
  border-radius: 100%;
  opacity: 0;
}

.emoji-mart-category .emoji-mart-emoji:hover:before {
  opacity: 1;
}

.emoji-mart-category-label {
  z-index: 2;
  position: relative;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.emoji-mart-category-label span {
  display: block;
  width: 100%;
  font-weight: 500;
  padding: 5px 6px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, .95);
}

.emoji-mart-no-results {
  font-size: 14px;
  text-align: center;
  padding-top: 70px;
  color: #858585;
}

.emoji-mart-no-results .emoji-mart-category-label {
  display: none;
}

.emoji-mart-no-results .emoji-mart-no-results-label {
  margin-top: .2em;
}

.emoji-mart-no-results .emoji-mart-emoji:hover:before {
  content: none;
}

</style>

<style>

.emoji-mart-category .emoji-mart-emoji span {
  z-index: 1;
  position: relative;
  text-align: center;
  cursor: default;
}

</style>
