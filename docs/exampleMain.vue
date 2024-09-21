<template>
  <div class="example">
    <div class="row row-controls">
      <button @click="toggleVisible">Show / hide the picker</button>
      <button @click="toggleVisible" v-html="smile"></button>
    </div>

    <div class="row">
      <template
        v-for="set in ['native', 'apple', 'google', 'twitter', 'facebook']"
      >
        <button
          :key="set"
          @click="activeSet = set"
          :disabled="activeSet == set"
        >
          {{ set }}
        </button>
      </template>
    </div>

    <div class="row">
      Infinite scroll
      <button @click="infiniteScroll = !infiniteScroll">
        {{ infiniteScroll ? 'on' : 'off' }} (click to toggle)
      </button>
    </div>

    <div v-if="isVisible" class="row">
      <picker
        :data="index"
        :set="activeSet"
        :native="native"
        :emoji="emoji"
        :emojiTooltip="true"
        :title="title"
        :emojiSize="30"
        :infiniteScroll="infiniteScroll"
        @select="showEmoji"
      />
    </div>

    <div class="row">
      <emoji
        v-for="emo in selectedEmojis"
        :key="emo"
        :data="index"
        :emoji="emo"
        :set="activeSet"
        :native="native"
        :size="32"
      />
    </div>

    <div class="row">
      {{ emojisOutput }}
    </div>
  </div>
</template>

<script>
import { Picker, Emoji } from '../src'

export default {
  props: {
    index: {
      type: Object,
    },
  },
  data() {
    return {
      activeSet: 'native',
      emoji: 'point_up',
      title: 'Pick your emoji…',
      isVisible: true,
      infiniteScroll: true,
      emojisOutput: '',
      selectedEmojis: [],
    }
  },
  computed: {
    native() {
      return this.activeSet == 'native'
    },
    smile() {
      // Static emoji example
      let emoji = this.index.findEmoji(':smile:')
      // Note, that position in the emoji sheet is calculated by
      // `emoji` object
      let style = `background-position: ${emoji.getPosition()}; background-image: url(https://unpkg.com/emoji-datasource-apple@15.0.1/img/apple/sheets-256/64.png); width: 24px; height: 24px; display: inline-block; background-size: 5700%`
      return `<div class='emoji' style="${style}"></div>`
    },
  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible
    },
    showEmoji(emoji) {
      this.selectedEmojis.push(emoji)
      if (emoji.native) {
        this.emojisOutput = this.emojisOutput + emoji.native
      } else {
        this.emojisOutput = this.emojisOutput + '?'
      }
    },
  },
  components: {
    Picker,
    Emoji,
  },
}
</script>

<style scoped>
.row-controls button {
  vertical-align: middle;
}
.row-controls button:last-child {
  padding: 4px;
}
</style>
