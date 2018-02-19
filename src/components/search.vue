<template>

<div class="emoji-mart-search">
  <input type="text" :placeholder="i18n.search" v-model="value">
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
  data() {
    return {
      value: ''
    }
  },
  watch: {
    value() {
      let emojis = emojiIndex.search(this.value, {
        emojisToShowFilter: this.emojisToShowFilter,
        maxResults: this.maxResults,
        include: this.include,
        exclude: this.exclude,
        custom: this.custom
      })

      this.$emit('search', emojis)
    }
  },
  methods: {
    clear() {
      this.value = ''
    }
  },
  mounted() {
    let $input = this.$el.querySelector('input')

    if (this.autoFocus) {
      $input.focus()
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
