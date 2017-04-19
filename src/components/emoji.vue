<template>

<span class="emoji-mart-emoji" @mouseover="onMouseOver" @mouseleave="onMouseLeave" @click="onClick">
  <span class="emoji-native" v-if="native" :style="this.nativeEmojiStyles">{{ nativeEmoji }}</span>
  <span class="emoji-fallback" v-else :style="this.fallbackEmojiStyles"></span>
</span>

</template>

<script>

import data from '../../data'
import { getData, getSanitizedData, unifiedToNative } from '../utils'

const SHEET_COLUMNS = 41

export default {
  props: {
    backgroundImageFn: {
      type: Function,
      default: function(set, sheetSize) {
        return `https://unpkg.com/emoji-datasource@${EMOJI_DATASOURCE_VERSION}/sheet_${set}_${sheetSize}.png`
      }
    },
    native: {
      type: Boolean,
      default: false
    },
    forceSize: {
      type: Boolean,
      default: false
    },
    skin: {
      type: Number,
      default: 1
    },
    sheetSize: {
      type: Number,
      default: 64
    },
    set: {
      type: String,
      default: 'apple'
    },
    size: {
      type: Number,
      default: 24
    },
    emoji: {
      type: [String, Object],
      required: true
    }
  },
  computed: {
    data() {
      return getData(this.emoji, this.skin, this.set)
    },
    sanitizedData() {
      return getSanitizedData(this.emoji, this.skin, this.set)
    },
    nativeEmoji() {
      if (this.data.unified) {
        return unifiedToNative(this.data.unified)
      } else {
        return ''
      }
    },
    nativeEmojiStyles() {
      let styles = { fontSize: this.size + 'px' }

      if (this.forceSize) {
        styles.display = 'inline-block'
        styles.width = this.size + 'px'
        styles.height = this.size + 'px'
      }

      return styles
    },
    fallbackEmojiStyles() {
      return {
        display: 'inline-block',
        width: this.size + 'px',
        height: this.size + 'px',
        backgroundImage: 'url(' + this.backgroundImageFn(this.set, this.sheetSize) + ')',
        backgroundSize: (100 * SHEET_COLUMNS) + '%',
        backgroundPosition: this.getPosition()
      }
    }
  },
  methods: {
    getPosition() {
      let multiply = 100 / (SHEET_COLUMNS - 1),
          x = multiply * this.data.sheet_x,
          y = multiply * this.data.sheet_y

      return `${x}% ${y}%`
    },
    onClick() {
      this.$emit('click', this.sanitizedData)
    },
    onMouseOver() {
      this.$emit('mouseover', this.sanitizedData)
    },
    onMouseLeave() {
      this.$emit('mouseleave', this.sanitizedData)
    }
  }
}

</script>

<style scoped>

.emoji-mart-emoji {
  position: relative;
  display: inline-block;
  font-size: 0;
}

</style>
