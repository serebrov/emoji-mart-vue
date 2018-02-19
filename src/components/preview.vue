<template>

<div class="emoji-mart-preview">
  <template v-if="emoji">
    <div class="emoji-mart-preview-emoji">
      <emoji
        :emoji="emoji"
        :native="emojiProps.native"
        :skin="emojiProps.skin"
        :set="emojiProps.set"
        :size="38"
        :sheet-size="emojiProps.sheetSize"
        :force-size="emojiProps.forceSize"
        :background-image-fn="emojiProps.backgroundImageFn"
      />
    </div>

    <div class="emoji-mart-preview-data">
      <div class="emoji-mart-preview-name">{{ emoji.name }}</div>
      <div class="emoji-mart-preview-shortnames">
        <span v-for="shortName in emojiShortNames" :key="shortName" class="emoji-mart-preview-shortname">:{{ shortName }}:</span>
      </div>
      <div class="emoji-mart-preview-emoticons">
        <span v-for="emoticon in emojiEmoticons" :key="emoticon" class="emoji-mart-preview-emoticon">{{ emoticon }}</span>
      </div>
    </div>
  </template>

  <template v-else>
    <div class="emoji-mart-preview-emoji">
      <emoji
        :emoji="idleEmoji"
        :native="emojiProps.native"
        :skin="emojiProps.skin"
        :set="emojiProps.set"
        :size="38"
        :sheet-size="emojiProps.sheetSize"
        :force-size="emojiProps.forceSize"
        :background-image-fn="emojiProps.backgroundImageFn"
      />
    </div>

    <div class="emoji-mart-preview-data">
      <span class="emoji-mart-title-label">{{ title }}</span>
    </div>

    <div class="emoji-mart-preview-skins">
      <skins :skin="skinProps.skin" @change="skinProps.onChange" />
    </div>
  </template>
</div>

</template>

<script>

import Emoji from './emoji'
import Skins from './skins'
import { getData } from '../utils'

export default {
  props: {
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
    data() {
      if (this.emoji && this.emoji.custom) {
        return this.emoji
      } else if (this.emoji) {
        return getData(this.emoji)
      } else {
        return {}
      }
    },
    emojiShortNames() {
      return this.data.short_names
    },
    emojiEmoticons() {
      return this.data.emoticons
    }
  },
  components: {
    Emoji,
    Skins
  }
}

</script>

<style scoped>

.emoji-mart-preview {
  position: relative;
  height: 70px;
}

.emoji-mart-preview-emoji,
.emoji-mart-preview-data,
.emoji-mart-preview-skins {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.emoji-mart-preview-emoji {
  left: 12px;
}

.emoji-mart-preview-data {
  left: 68px; right: 12px;
  word-break: break-all;
}

.emoji-mart-preview-skins {
  right: 30px;
  text-align: right;
}

.emoji-mart-preview-name {
  font-size: 14px;
}

.emoji-mart-preview-shortname {
  font-size: 12px;
  color: #888;
}
.emoji-mart-preview-shortname + .emoji-mart-preview-shortname,
.emoji-mart-preview-shortname + .emoji-mart-preview-emoticon,
.emoji-mart-preview-emoticon + .emoji-mart-preview-emoticon {
  margin-left: .5em;
}

.emoji-mart-preview-emoticon {
  font-size: 11px;
  color: #bbb;
}

.emoji-mart-title span {
  display: inline-block;
  vertical-align: middle;
}

.emoji-mart-title .emoji-mart-emoji {
  padding: 0;
}

.emoji-mart-title-label {
  color: #999A9C;
  font-size: 26px;
  font-weight: 300;
}

</style>
