<template>
  <div class="example">
    <h2>Small picker example</h2>
    <div class="row">Override picker styles to make it small</div>
    <div class="row row-small-picker">
      <Picker
        :data="index"
        :native="native"
        :set="activeSet"
        :emojiSize="12"
        :perLine="5"
      />
    </div>
  </div>
</template>

<script>
import { Picker } from '../src'

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
    }
  },
  computed: {
    native() {
      return this.activeSet == 'native'
    },
  },
  methods: {},
  components: {
    Picker,
  },
}
</script>

<style scoped>
button + button {
  margin-left: 0.5em;
}
.row-small-picker >>> .emoji-mart-anchors svg {
  width: 9px;
  height: 9px;
}
.row-small-picker >>> .emoji-mart-title-label {
  font-size: 9px;
}
.row-small-picker >>> .emoji-mart-preview-data {
  left: 40px;
  font-size: 9px;
}
.row-small-picker >>> .emoji-mart-preview-name {
  font-size: 9px;
}
.row-small-picker >>> .emoji-mart-preview-emoji .emoji-type-native {
  font-size: 12px;
  width: 12px;
  height: 12px;
}
</style>
