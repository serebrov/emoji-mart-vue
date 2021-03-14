<template>
  <div class="emoji-mart-search">
    <input
        type="text"
        :placeholder="i18n.search"
        role="textbox"
        aria-label="Search for an emoji"
        aria-describedby="emoji-picker-search-description"
        v-model="value">
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
    autoFocus: {
      type: Boolean,
      default: false
    },
    onSearch: {
      type: Function,
      required: true
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
      this.$emit('search', this.value)
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
