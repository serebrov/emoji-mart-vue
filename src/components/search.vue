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
    emojisToShowFilter: {
      type: Function,
      default: function() {
        return true
      }
    },
    autoFocus: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onInput(e) {
      this.$emit('search', emojiIndex.search(e.target.value, this.emojisToShowFilter, this.maxResults))
    },
    clear() {
      this.$el.value = ''
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
