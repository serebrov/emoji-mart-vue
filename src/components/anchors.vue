<template>

<div class="emoji-mart-anchors">
  <template v-for="category in categories">
    <span
      :class="{ 'emoji-mart-anchor': true, 'emoji-mart-anchor-selected': category.name == activeCategory.name }"
      :style="{ 'color': (category.name == activeCategory.name ? color : '') }"
      :title="i18n.categories[category.name.toLowerCase()]"
      @click="$emit('click', category)">
      <i v-html="assets.svgs[category.name]"></i>
      <span class="emoji-mart-anchor-bar" :style="{ backgroundColor: color }"></span>
    </span>
  </template>
</div>

</template>

<script>

import * as svgs from '../svgs'

export default {
  props: {
    i18n: {
      type: Object,
      required: true
    },
    color: {
      type: String
    },
    categories: {
      type: Array,
      required: true
    },
    activeCategory: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      assets: { svgs }
    }
  }
}

</script>

<style scoped>

.emoji-mart-anchors {
  display: flex;
  justify-content: space-between;
  padding: 0 6px;
  color: #858585;
  line-height: 0;
}

.emoji-mart-anchor {
  position: relative;
  flex: 1;
  text-align: center;
  padding: 12px 4px;
  overflow: hidden;
  transition: color .1s ease-out;
}
.emoji-mart-anchor:hover,
.emoji-mart-anchor-selected {
  color: #464646;
}

.emoji-mart-anchor-selected .emoji-mart-anchor-bar {
  bottom: 0;
}

.emoji-mart-anchor-bar {
  position: absolute;
  bottom: -3px; left: 0;
  width: 100%; height: 3px;
  background-color: #464646;
}

.emoji-mart-anchors i {
  display: inline-block;
  width: 100%;
  max-width: 22px;
}

</style>

<style>

.emoji-mart-anchors svg {
  fill: currentColor;
}

</style>
