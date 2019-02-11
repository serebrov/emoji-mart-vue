<template>

<div :class="{ 'emoji-mart-category': true, 'emoji-mart-no-results': !hasResults }" v-if="isVisible && (isSearch || hasResults)">
  <div class="emoji-mart-category-label">
    <span>{{ i18n.categories[id] }}</span>
  </div>

  <template v-for="{ emojiObject, emojiView} in emojiObjects">
    <span 
      v-if="emojiView.canRender" 
      :title="emojiObject._data.short_names[0]" 
      :class="emojiView.cssClass" 
      :style="emojiView.cssStyle"
      class="emoji-mart-emoji"
      @mouseenter="emojiProps.onEnter(emojiObject)"
      @mouseleave="emojiProps.onLeave(emojiObject)"
      @click="emojiProps.onClick(emojiObject)">
      {{emojiView.content}}
    </span>
  </template>

  <div v-if="!hasResults">
    <nimble-emoji
      :data="data"
      emoji="sleuth_or_spy"
      :native="emojiProps.native"
      :skin="emojiProps.skin"
      :set="emojiProps.set"
    />
    <div class="emoji-mart-no-results-label">{{ i18n.notfound }}</div>
  </div>
</div>

</template>

<script>

import { EmojiData, EmojiView } from '../utils/emoji-data'
import NimbleEmoji from './emoji/nimbleEmoji'


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
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    emojis: {
      type: Array
    },
    emojiProps: {
      type: Object,
      required: true
    }
  },
  computed: {
    isVisible() {
      return !!this.emojis
    },
    isSearch() {
      return this.name == 'Search'
    },
    hasResults() {
      return this.emojis.length > 0
    },
    emojiObjects() {
      return this.emojis.map((emoji) => {
          let emojiObject = new EmojiData(
            emoji, this.emojiProps.skin, this.emojiProps.set, this.data)
          let emojiView = new EmojiView(
            emojiObject, this.emojiProps.set, this.emojiProps.native, 
            this.emojiProps.fallback
          )
          return { emojiObject, emojiView }
      })
    }
  },
  components: {
    NimbleEmoji
  }
}

</script>

<style>

.emoji-mart-category {
  position: relative;
}

.emoji-mart-category-label {
  position: sticky;
  top: 0;
}


.emoji-mart-category-label {
  z-index: 2;
  position: relative;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.emoji-mart-category-label span {
  display: block;
  width: 100%;
  font-weight: 500;
  padding: 5px 6px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, .95);
}

.emoji-mart-no-results {
  font-size: 14px;
  text-align: center;
  padding-top: 70px;
  color: #858585;
}

.emoji-mart-no-results .emoji-mart-category-label {
  display: none;
}

.emoji-mart-no-results .emoji-mart-no-results-label {
  margin-top: .2em;
}

.emoji-mart-category .emoji-mart-emoji:hover {
  background-color: grey;
  border-radius: 12px;
  box-shadow: 0 0 12px 2px grey;
}

</style>

<style>

.emoji-mart-category .emoji-mart-emoji span {
  z-index: 1;
  position: relative;
  text-align: center;
  cursor: default;
}

</style>
