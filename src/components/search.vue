<template>

<div class="emoji-mart-search">
  <input type="text" :placeholder="i18n.search" v-model="value">
</div>

</template>

<script>

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
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
    }
  },
  data() {
    return {
      value: ''
    }
  },
  computed: {
    emojiIndex() {
      return this.data
    }
  },
  watch: {
    value() {
      let emojis = this.emojiIndex.search(this.value, this.maxResults)
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
