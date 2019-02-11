<template>

<span v-if="view.canRender" :class="view.cssClass" :style="view.cssStyle" :title="title" class="emoji-mart-emoji" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @click="onClick">
  {{view.content}}
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
          this.emoji, this.set, this.native, this.fallback
      )
    },
    emojiData() {
      return this.emoji._data
    },
    sanitizedData() {
      return this.emoji._sanitized
    },
    title() {
      return this.tooltip ? this.emojiData.short_names[0] : null
    }
  },
  methods: {
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

<style>

.emoji-mart-emoji {
  position: relative;
  display: inline-block;
  font-size: 0;
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 6px;
}

.emoji-mart-preview-emoji .emoji-mart-emoji {
  width: 38px;
  height: 38px;
}

.emoji-type-native {
  font-size: 18px;
}

.emoji-type-image {
  background-size: 5200%;
}
.emoji-type-image.emoji-set-emojione {
  background-image: url("https://unpkg.com/emoji-datasource-emojione@4.0.4/img/emojione/sheets-256/64.png");
}
.emoji-type-image.emoji-set-messenger {
  background-image: url("https://unpkg.com/emoji-datasource-messenger@4.0.4/img/messenger/sheets-256/64.png");
}
.emoji-type-image.emoji-set-apple {
  background-image: url("https://unpkg.com/emoji-datasource-apple@4.0.4/img/apple/sheets-256/64.png");
}
.emoji-type-image.emoji-set-facebook {
  background-image: url("https://unpkg.com/emoji-datasource-facebook@4.0.4/img/facebook/sheets-256/64.png");
}
.emoji-type-image.emoji-set-google {
  background-image: url("https://unpkg.com/emoji-datasource-google@4.0.4/img/google/sheets-256/64.png");
}
.emoji-type-image.emoji-set-twitter {
  background-image: url("https://unpkg.com/emoji-datasource-twitter@4.0.4/img/twitter/sheets-256/64.png");
}

</style>
