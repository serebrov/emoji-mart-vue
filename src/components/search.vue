<template>

<input class="emoji-mart-search" type="text" :placeholder="i18n.search" @input="onInput">

</template>

<script>

import emojiIndex from '../utils/emoji-index'

export default {
  props: {
    i18n: {
      type: Object,
      required: true
    },
    maxResults: {
      type: Number,
      default: 75
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    emojisToShowFilter: {
      type: Function
    },
    include: {
      type: Function
    },
    exclude: {
      type: Function
    }
  },
  methods: {
    onInput(e) {
      this.$emit('search', emojiIndex.search(e.target.value, {
        emojisToShowFilter: this.emojisToShowFilter,
        maxResults: this.maxResults,
        include: this.include,
        exclude: this.exclude
      }))
    },
    clear() {
      this.$el.value = ''
    }
  },
  mounted() {
    if (this.autoFocus) {
      this.$el.focus()
    }
  }
}

</script>

<style scoped>

.emoji-mart-search {
  font-size: 16px;
  display: block;
  width: 100%;
  padding: .2em .6em;
  margin-top: 6px;
  border-radius: 25px;
  border: 1px solid #d9d9d9;
  outline: 0;
}

</style>
