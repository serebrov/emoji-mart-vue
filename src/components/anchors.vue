<template>

<div class="emoji-mart-anchors">
  <span
    v-for="category in categories"
    :key="category.id"
    :class="{ 'emoji-mart-anchor': true, 'emoji-mart-anchor-selected': category.id == activeCategory.id }"
    :style="{ 'color': (category.id == activeCategory.id ? color : '') }"
    :title="i18n.categories[category.id]"
    @click="$emit('click', category)">
    <div v-html="svgs[category.id]"/>
    <span class="emoji-mart-anchor-bar" :style="{ backgroundColor: color }"></span>
  </span>
</div>

</template>

<script>

import svgs from '../svgs'

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
  created() {
    this.svgs = svgs
  }
}

</script>

<style scoped>

.emoji-mart-anchors {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 6px;
  color: #858585;
  line-height: 0;
}

.emoji-mart-anchor {
  position: relative;
  display: block;
  flex: 1 1 auto;
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
  max-height: 18px;
}

</style>
