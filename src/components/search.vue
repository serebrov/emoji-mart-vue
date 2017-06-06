<template>

<div class="emoji-mart-search">
  <input type="text" :placeholder="i18n.search" @input="onInput">
</div>

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
      type: Array
    },
    exclude: {
      type: Array
    },
    custom: {
      type: Array
    }
  },
  methods: {
    onInput(e) {
      this.$emit('search', emojiIndex.search(e.target.value, {
        emojisToShowFilter: this.emojisToShowFilter,
        maxResults: this.maxResults,
        include: this.include,
        exclude: this.exclude,
        custom: this.custom
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
  margin-top: 6px;
  padding: 0 6px;
}

.emoji-mart-search input {
  font-size: 16px;
  display: block;
  width: 100%;
  padding: .2em .6em;
  border-radius: 25px;
  border: 1px solid #d9d9d9;
  outline: 0;
}

</style>
