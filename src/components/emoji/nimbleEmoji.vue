<template>

<span v-if="view.canRender" :title="title" class="emoji-mart-emoji" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @click="onClick">
  <span  :class="view.cssClass" :style="view.cssStyle">{{view.content}}</span>
</span>

</template>

<script>

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
