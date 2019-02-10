<template>

<div :class="{ 'emoji-mart-category': true, 'emoji-mart-no-results': !hasResults }" v-if="isVisible && (isSearch || hasResults)">
  <div class="emoji-mart-category-label">
    <span>{{ i18n.categories[id] }}</span>
  </div>

  <nimble-emoji
    v-for="emoji in emojiObjects"
    :key="emoji.id || emoji._key"
    :data="data"
    :emoji="emoji"
    :native="emojiProps.native"
    :skin="emojiProps.skin"
    :set="emojiProps.set"
    :size="emojiProps.size"
    :sheet-size="emojiProps.sheetSize"
    :force-size="emojiProps.forceSize"
    :tooltip="emojiProps.tooltip"
    :background-image-fn="emojiProps.backgroundImageFn"
    @click="emojiProps.onClick"
    @mouseenter="emojiProps.onEnter"
    @mouseleave="emojiProps.onLeave"
  />


  <div v-if="!hasResults">
    <nimble-emoji
      :data="data"
      :size="emojiProps.size"
      emoji="sleuth_or_spy"
      :native="emojiProps.native"
      :skin="emojiProps.skin"
      :set="emojiProps.set"
      :sheet-size="emojiProps.sheetSize"
      :background-image-fn="emojiProps.backgroundImageFn"
    />
    <div class="emoji-mart-no-results-label">{{ i18n.notfound }}</div>
  </div>
</div>

</template>

<script>

import EmojiData from '../utils/emoji-data'
import NimbleEmoji from './emoji/nimbleEmoji'

/*


  <template v-for="emoji in emojiObjects">
    <span 
      class="emoji-mart-emoji-one"
      :style="fallbackEmojiStyles(emoji)"
      @mouseenter="emojiProps.onEnter(emoji.sanitized)"
      @mouseleave="emojiProps.onLeave(emoji.sanitized)"
      @click="emojiProps.onClick(emoji.sanitized)">
    </span>
  </template>
*/

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    emojis: {
      type: Array
    },
    emojiProps: {
      type: Object,
      required: true
    }
  },
  computed: {
    isVisible() {
      return !!this.emojis
    },
    isSearch() {
      return this.name == 'Search'
    },
    hasResults() {
      return this.emojis.length > 0
    },
    emojiObjects() {
      return this.emojis.map((emoji) => new EmojiData(
        emoji, this.emojiProps.skin, this.emojiProps.set, this.data
      ))
    }
  },
  methods: {
    fallbackEmojiStyles(emoji) {
        return {
          // display: 'inline-block',
          // width: this.size + 'px',
          // height: this.size + 'px',
          // backgroundImage: 'url(' + this.backgroundImageFn(this.set, this.sheetSize) + ')',
          // backgroundSize: (100 * SHEET_COLUMNS) + '%',
          backgroundPosition: emoji.getPosition()
        }
    }
  },
  components: {
    NimbleEmoji
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

.emoji-mart-emoji-one {
  position: relative;
  display: inline-block;
  font-size: 0;
  display: inline-block; 
  width: 24px; height: 24px; 
  background-image: url("https://unpkg.com/emoji-datasource-emojione@4.0.4/img/emojione/sheets-256/64.png"); 
  background-size: 5200%;
}

</style>
