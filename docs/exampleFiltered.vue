<template>
  <div class="example">
    <h2>Filtered picker example</h2>
    <div class="row">
      Picker with filtered data, only emojis with names matching the `/^flag.*/`
      regexp.
    </div>
    <div class="row">
      <button @click="toggleFlagsVisible">
        Show / hide the flags picker (with v-show)
      </button>
    </div>
    <div class="row" v-show="flagsVisible">
      <Picker
        :native="true"
        emoji="flag-tf"
        :emojiSize="18"
        :data="indexFiltered"
        ref="flags"
      />
    </div>
  </div>
</template>

<script>
import data from '../data/all.json'
import { Picker, EmojiIndex } from '../src'

let indexFiltered = new EmojiIndex(data, {
  emojisToShowFilter: (emoji) => {
    return emoji.short_names[0].match(/^flag.*/) !== null
  },
})

export default {
  props: {
    index: {
      type: Object,
    },
  },
  data() {
    return {
      indexFiltered: indexFiltered,
      flagsVisible: true,
    }
  },
  methods: {
    toggleFlagsVisible() {
      this.flagsVisible = !this.flagsVisible
    },
  },
  components: {
    Picker,
  },
}
</script>

<style scoped></style>
