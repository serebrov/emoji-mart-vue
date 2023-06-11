<template>
  <div class="example">
    <h2>Custom Dialog Example</h2>
    <div class="row">Show Picker in the popup dialog.</div>
    <div class="row">
      <button @click="emojiPickerCustomDialog = true">
        Open Custom Dialog
      </button>
    </div>

    <div class="popup" v-if="emojiPickerCustomDialog">
      <div class="popup-box" @click="emojiPickerCustomDialog = false">
        <div class="popup-content" @click="$event.stopPropagation()">
          <div class="popup-close">
            <a @click="emojiPickerCustomDialog = false">X</a>
          </div>
          <h2>Emoji Selector</h2>
          <picker :data="index" :emojiSize="24" :native="true"></picker>
        </div>
      </div>
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
      emojiPickerCustomDialog: false,
    }
  },
  methods: {},
  components: {
    Picker,
  },
}
</script>

<style scoped>
.popup {
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 200;
  background: rebeccapurple;
  opacity: 95%;
}
.popup-box {
  height: 100%;
  overflow: auto;
  display: block;
  padding-top: 120px;
  padding-bottom: 80px;
}
.popup-content {
  background: white;
  box-shadow: 0px 24px 54px rgba(20, 28, 49, 0.14);
  border-radius: 18px;
  padding: 6px 6px 9px 6px;
  position: relative;
  width: 100%;
  max-width: 462px;
  margin: 0 auto;
}
.popup-close {
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
}
</style>
