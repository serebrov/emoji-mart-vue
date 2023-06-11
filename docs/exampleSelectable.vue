<template>
  <div class="example">
    <h2>Selectable Example</h2>
    <div class="row">
      The picker allows to "select" the emoji displayed above it and remove the
      selection when the emoji is slected.
    </div>
    <div class="row row-selected">
      <emoji
        v-if="selectedEmoji"
        :data="index"
        :emoji="selectedEmoji"
        :size="32"
      />
      <emoji v-else :data="index" emoji=":dotted_line_face:" :size="32" />
      <button @click="toggleSelectable">Show / hide the picker</button>
    </div>
    <div class="row">
      <picker
        v-if="selectableVisible"
        :data="index"
        @select="selectableSelectEmoji"
      >
        <template v-slot:customCategory v-if="selectedEmoji">
          <div class="emoji-mart-category-label">
            <h3 class="emoji-mart-category-label">Selected</h3>
          </div>

          <emoji
            class="emoji-selected"
            :data="index"
            :emoji="selectedEmoji"
            :size="32"
            @click="selectableUnselectEmoji"
          />
          <emoji
            class="emoji-delete"
            :data="index"
            emoji=":x:"
            :size="10"
            @click="selectableUnselectEmoji"
          />
        </template>
      </picker>
    </div>
  </div>
</template>

<script>
import data from '../data/all.json'
import { Picker, Emoji, EmojiIndex } from '../src'

const emojiIndex = new EmojiIndex(data)

export default {
  props: {
    index: {
      type: Object,
    },
  },
  data() {
    return {
      selectedEmoji: emojiIndex.findEmoji(':smile:'),
      selectableVisible: true,
    }
  },
  methods: {
    selectableSelectEmoji(emoji) {
      this.selectedEmoji = emoji
    },
    selectableUnselectEmoji(emoji) {
      this.selectedEmoji = undefined
    },
    toggleSelectable() {
      this.selectableVisible = !this.selectableVisible
    },
  },
  components: {
    Picker,
    Emoji,
  },
}
</script>

<style scoped>
.row-selected span {
  vertical-align: middle;
}
.row-selected button {
  vertical-align: middle;
}
.emoji-delete {
  vertical-align: top;
  margin-left: -21px;
  margin-top: -3px;
}
</style>
