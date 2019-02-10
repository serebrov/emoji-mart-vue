<template>

<span v-if="view.canRender()" :title="title" class="emoji-mart-emoji" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @click="onClick">
  <span  :class="view.cssClass()" :style="view.cssStyle()">{{content}}</span>
</span>

</template>

<script>

import { getData, getSanitizedData, unifiedToNative } from '../../utils'
import { EmojiProps } from '../../utils/shared-props'
import { EmojiView } from '../../utils/emoji-data'

const SHEET_COLUMNS = 52

export default {
  props: {
    ...EmojiProps,
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    view() {
      return new EmojiView(
          this.emoji, this.set, this.native, this.fallback,
          this.size, this.forceSize, this.sheetSize, this.backgroundImageFn)
    },
    emojiData() {
      return this.emoji._data
    },
    sanitizedData() {
      return this.emoji._sanitized
    },
    // canRender() {
    //   return this.isCustom || this.isNative || this.hasEmoji || this.fallback
    // },
    isNative() {
      return this.native
    },
    isCustom() {
      return this.emojiData.custom
    },
    hasEmoji() {
      return this.emojiData['has_img_' + this.set]
    },
    emojiType() {
      if (this.isCustom) {
        return 'custom';
      }
      if (this.isNative) {
        return 'native';
      }
      if (this.hasEmoji) {
        return 'image';
      }
      return 'fallback';
    },
    cssClass() {
        return [
          'emoji-mart-emoji',
          'emoji-mart-emoji-set-' + this.set,
          'emoji-mart-emoji-type-' + this.emojiType
        ]
    },
    cssStyle() {
      if (this.isCustom) {
        return this.customEmojiStyles
      }
      if (this.isNative) {
        return this.nativeEmojiStyles
      }
      if (this.hasEmoji) {
        return this.fallbackEmojiStyles
      }
    },
    content() {
      if (this.isCustom) {
        return ''
      }
      if (this.isNative) {
        return this.nativeEmoji
      }
      if (this.hasEmoji) {
        return ''
      }
      return this.fallbackEmoji
    },
    nativeEmoji() {
      if (this.emojiData.unified) {
        return unifiedToNative(this.emojiData.unified)
      } else {
        return ''
      }
    },
    fallbackEmoji() {
      return this.fallback ? this.fallback(this.emoji) : null
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
      if (this.isCustom) {
        return this.customEmojiStyles
      } else if (this.hasEmoji) {
        return {
          display: 'inline-block',
          width: this.size + 'px',
          height: this.size + 'px',
          backgroundImage: 'url(' + this.backgroundImageFn(this.set, this.sheetSize) + ')',
          backgroundSize: (100 * SHEET_COLUMNS) + '%',
          backgroundPosition: this.getPosition()
        }
      } else {
        return null
      }
    },
    customEmojiStyles() {
      return {
        display: 'inline-block',
        width: this.size + 'px',
        height: this.size + 'px',
        backgroundImage: 'url(' + this.emojiData.imageUrl + ')',
        backgroundSize: '100%',
      }
    },
    title() {
      return this.tooltip ? this.emojiData.short_names[0] : null
    }
  },
  methods: {
    getPosition() {
      let multiply = 100 / (SHEET_COLUMNS - 1),
          x = multiply * this.emojiData.sheet_x,
          y = multiply * this.emojiData.sheet_y

      return `${x}% ${y}%`
    },
    onClick() {
      this.$emit('click', this.emoji)
    },
    onMouseEnter() {
      this.$emit('mouseenter', this.emoji)
    },
    onMouseLeave() {
      this.$emit('mouseleave', this.emoji)
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
