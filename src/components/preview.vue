<template>

<div class="emoji-mart-preview">
  <template v-if="emoji">
    <div class="emoji-mart-preview-emoji">
      <nimble-emoji
        :data="data"
        :emoji="emoji"
        :native="emojiProps.native"
        :skin="emojiProps.skin"
        :set="emojiProps.set"
      />
    </div>

    <div class="emoji-mart-preview-data">
      <slot :emoji="emoji" name="previewName">
        <div class="emoji-mart-preview-name">{{ emoji.name }}</div>
      </slot>
      <slot :emoji="emoji" name="previewShortNames">
        <div class="emoji-mart-preview-shortnames">
          <span v-for="shortName in emojiShortNames" :key="shortName" class="emoji-mart-preview-shortname">:{{ shortName }}:</span>
        </div>
      </slot>
      <slot :emoji="emoji" name="previewEmoticons">
        <div class="emoji-mart-preview-emoticons">
          <span v-for="emoticon in emojiEmoticons" :key="emoticon" class="emoji-mart-preview-emoticon">{{ emoticon }}</span>
        </div>
      </slot>
    </div>
  </template>

  <template v-else>
    <div class="emoji-mart-preview-emoji">
      <nimble-emoji
        :data="data"
        :emoji="idleEmoji"
        :native="emojiProps.native"
        :skin="emojiProps.skin"
        :set="emojiProps.set"
      />
    </div>

    <div class="emoji-mart-preview-data">
      <span class="emoji-mart-title-label">{{ title }}</span>
    </div>

    <div v-if="showSkinTones" class="emoji-mart-preview-skins">
      <skins :skin="skinProps.skin" @change="$emit('change', $event)" />
    </div>
  </template>
</div>

</template>

<script>

import NimbleEmoji from './emoji/nimbleEmoji'
import Skins from './skins'

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    emoji: {
      type: [String, Object]
    },
    idleEmoji: {
      type: [String, Object],
      required: true
    },
    showSkinTones: {
      type: Boolean,
      default: true
    },
    emojiProps: {
      type: Object,
      required: true
    },
    skinProps: {
      type: Object,
      required: true
    }
  },
  computed: {
    emojiData() {
      if (this.emoji) {
        return this.emoji
      } else {
        return {}
      }
    },
    emojiShortNames() {
      return this.emojiData.short_names
    },
    emojiEmoticons() {
      return this.emojiData.emoticons
    }
  },
  components: {
    NimbleEmoji,
    Skins
  }
}

</script>
