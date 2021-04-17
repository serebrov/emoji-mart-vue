<template>
  <div class="emoji-mart-search">
    <input
      type="text"
      :placeholder="i18n.search"
      role="textbox"
      aria-autocomplete="list"
      aria-owns="emoji-mart-list"
      aria-label="Search for an emoji"
      aria-describedby="emoji-mart-search-description"
      @keydown.left="($event) => $emit('arrowLeft', $event)"
      @keydown.right="() => $emit('arrowRight')"
      @keydown.down="() => $emit('arrowDown')"
      @keydown.up="($event) => $emit('arrowUp', $event)"
      @keydown.enter="() => $emit('enter')"
      v-model="value"
    />
    <span class="hidden" id="emoji-picker-search-description"
      >Use the left, right, up and down arrow keys to navigate the emoji search
      results.</span
    >
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    i18n: {
      type: Object,
      required: true,
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
    onSearch: {
      type: Function,
      required: true,
    },
    onArrowLeft: {
      type: Function,
      required: false,
    },
    onArrowRight: {
      type: Function,
      required: false,
    },
    onArrowDown: {
      type: Function,
      required: false,
    },
    onArrowUp: {
      type: Function,
      required: false,
    },
    onEnter: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      value: '',
    }
  },
  computed: {
    emojiIndex() {
      return this.data
    },
  },
  watch: {
    value() {
      this.$emit('search', this.value)
    },
  },
  methods: {
    clear() {
      this.value = ''
    },
  },
  mounted() {
    let $input = this.$el.querySelector('input')

    if (this.autoFocus) {
      $input.focus()
    }
  },
}
</script>
