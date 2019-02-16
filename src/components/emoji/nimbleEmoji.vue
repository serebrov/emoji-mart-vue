<template>

<span v-if="view.canRender" :title="title" class="emoji-mart-emoji" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @click="onClick">
  <span  :class="view.cssClass" :style="view.cssStyle">{{view.content}}</span>
</span>

</template>

<script>

import { EmojiProps } from '../../utils/shared-props'
import { EmojiData, EmojiView } from '../../utils/emoji-data'

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
        this._emoji, this.set, this.native, this.fallback
      )
    },
    emojiData() {
      return this._emoji._data
    },
    sanitizedData() {
      return this._emoji._sanitized
    },
    title() {
      return this.tooltip ? this.emojiData.short_names[0] : null
    }
  },
  created() {
    this._emoji = this.emoji;
    if (typeof this.emoji == "string") {
      this._emoji = new EmojiData(
        this.emoji, this.skin, this.set, this.data
      )
    }
  },
  methods: {
    onClick() {
      this.$emit('click', this._emoji)
    },
    onMouseEnter() {
      this.$emit('mouseenter', this._emoji)
    },
    onMouseLeave() {
      this.$emit('mouseleave', this._emoji)
    }
  }
}

</script>
