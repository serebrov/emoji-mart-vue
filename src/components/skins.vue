<template>

<div :class="{ 'emoji-mart-skin-swatches': true, 'emoji-mart-skin-swatches-opened': opened }">
  <span v-for="skinTone in 6" :key="skinTone" :class="{ 'emoji-mart-skin-swatch': true, 'emoji-mart-skin-swatch-selected': skin == skinTone }">
    <span :class="'emoji-mart-skin emoji-mart-skin-tone-' + skinTone" @click="onClick(skinTone)"></span>
  </span>
</div>

</template>

<script>

export default {
  props: {
    skin: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    onClick(skinTone) {
      if (this.opened) {
        if (skinTone != this.skin) {
          this.$emit('change', skinTone)
        }
      }

      this.opened = !this.opened
    }
  }
}

</script>

<style scoped>

.emoji-mart-skin-swatches {
  font-size: 0;
  padding: 2px 0;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  background-color: #fff;
}

.emoji-mart-skin-swatches-opened .emoji-mart-skin-swatch {
  width: 16px;
  padding: 0 2px;
}

.emoji-mart-skin-swatches-opened .emoji-mart-skin-swatch-selected:after {
  opacity: .75;
}

.emoji-mart-skin-swatch {
  display: inline-block;
  width: 0;
  vertical-align: middle;
  transition-property: width, padding;
  transition-duration: .125s;
  transition-timing-function: ease-out;
}

.emoji-mart-skin-swatch:nth-child(1) { transition-delay: 0s }
.emoji-mart-skin-swatch:nth-child(2) { transition-delay: .03s }
.emoji-mart-skin-swatch:nth-child(3) { transition-delay: .06s }
.emoji-mart-skin-swatch:nth-child(4) { transition-delay: .09s }
.emoji-mart-skin-swatch:nth-child(5) { transition-delay: .12s }
.emoji-mart-skin-swatch:nth-child(6) { transition-delay: .15s }

.emoji-mart-skin-swatch-selected {
  position: relative;
  width: 16px;
  padding: 0 2px;
}
.emoji-mart-skin-swatch-selected:after {
  content: "";
  position: absolute;
  top: 50%; left: 50%;
  width: 4px; height: 4px;
  margin: -2px 0 0 -2px;
  background-color: #fff;
  border-radius: 100%;
  pointer-events: none;
  opacity: 0;
  transition: opacity .2s ease-out;
}

.emoji-mart-skin {
  display: inline-block;
  width: 100%; padding-top: 100%;
  max-width: 12px;
  border-radius: 100%;
}

.emoji-mart-skin-tone-1 { background-color: #ffc93a }
.emoji-mart-skin-tone-2 { background-color: #fadcbc }
.emoji-mart-skin-tone-3 { background-color: #e0bb95 }
.emoji-mart-skin-tone-4 { background-color: #bf8f68 }
.emoji-mart-skin-tone-5 { background-color: #9b643d }
.emoji-mart-skin-tone-6 { background-color: #594539 }

</style>
