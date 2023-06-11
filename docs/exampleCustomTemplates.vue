<template>
  <div class="example">
    <h2>Custom Search And Preview Templates Example</h2>
    <div class="row">
      Custom UI for search and preview areas by overwriting default Picker
      slots.
    </div>
    <div class="row">
      <Picker :data="index" :native="true">
        <template slot="searchTemplate" slot-scope="slotProps">
          <input
            type="text"
            :placeholder="slotProps.i18n.search"
            v-on:input="slotProps.onSearch($event.target.value)"
          />
        </template>
        <template slot="previewTemplate" slot-scope="slotProps">
          <div class="emoji-mart-preview">
            <div class="emoji-mart-preview-emoji">
              <Emoji
                :data="slotProps.data"
                :emoji="slotProps.emoji ? slotProps.emoji : 'point_up'"
                :native="slotProps.emojiProps.native"
                :skin="slotProps.emojiProps.skin"
                :set="slotProps.emojiProps.set"
              />
            </div>
            <div class="emoji-mart-preview-data">
              <div class="emoji-mart-preview-name">
                {{
                  slotProps.emoji
                    ? '~' + slotProps.emoji.name + '~'
                    : 'Choose...'
                }}
              </div>
              <div class="emoji-mart-preview-shortnames">
                {{ slotProps.emoji ? slotProps.emoji.colons : '' }}
              </div>
            </div>
          </div>
        </template>
      </Picker>
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
    return {}
  },
  components: {
    Picker,
    Emoji,
  },
}
</script>

<style scoped></style>
