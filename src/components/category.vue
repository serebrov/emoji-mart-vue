<template>

<div class="emoji-mart-category" v-show="filteredEmojis.length > 0">
  <div class="emoji-mart-category-label">
    <span>{{ i18n.categories[name.toLowerCase()] }}</span>
  </div>

  <emoji
    v-for="emoji in filteredEmojis"
    :key="emoji.id || emoji" :emoji="emoji"
    :native="emojiProps.native"
    :skin="emojiProps.skin"
    :set="emojiProps.set"
    :size="emojiProps.size"
    :sheet-size="emojiProps.sheetSize"
    :force-size="emojiProps.forceSize"
    :background-image-fn="emojiProps.backgroundImageFn"
    @click="emojiProps.onClick"
    @mouseover="emojiProps.onOver"
    @mouseleave="emojiProps.onLeave">
  </emoji>

  <div class="emoji-mart-no-results" v-show="!filteredEmojis.length">
    <emoji :size="22" emoji="sleuth_or_spy"></emoji>
    <span class="emoji-mart-no-results-labe">
      No emoji found
    </span>
  </div>
</div>

</template>

<script>

import frequently from '../utils/frequently'
import Emoji from './emoji'

export default {
  props: {
    i18n: {
      type: Object,
      required: true
    },
    emojis: {
      type: Array,
      default() {
        return []
      }
    },
    hasStickyPosition: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      required: true
    },
    perLine: {
      type: Number,
      required: true
    },
    emojiProps: {
      type: Object,
      required: true
    }
  },
  computed: {
    filteredEmojis() {
      if (this.name == 'Recent') {
        let frequentlyUsed = frequently.get(this.perLine * 4)

        if (frequentlyUsed.length) {
          return frequentlyUsed
        }
      }

      if (this.emojis) {
        return this.emojis.slice(0)
      }

      return []
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

.emoji-mart-no-results span {
  display: inline-block;
  vertical-align: middle;
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
