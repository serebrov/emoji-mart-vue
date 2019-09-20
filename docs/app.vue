<template>
  <div class="app">
    <div class="row">
      <h1>Emoji Mart Vue 🏬</h1>
    </div>
    <div class="row">
      <emoji :data="index" emoji=":santa::skin-tone-3:" :size="32" />
      <emoji :data="index" emoji="santa" set="emojione" :size="32" />
      <emoji :data="index" :emoji="santaEmojiObject" :size="32" />
    </div>

    <div class="row">
      <button @click="toggleVisible">Show / hide the picker</button>
      <button @click="toggleVisible" v-html="smile"></button>
    </div>

    <div class="row">
      <template
        v-for="set in [
          'native',
          'apple',
          'google',
          'twitter',
          'emojione',
          'messenger',
          'facebook',
        ]"
      >
        <button
          :key="set"
          @click="activeSet = set"
          :disabled="activeSet == set"
        >
          {{ set }}
        </button>
      </template>
    </div>

    <div v-if="isVisible" class="row">
      <picker
        :data="index"
        :set="activeSet"
        :native="native"
        :emoji="emoji"
        :emojiTooltip="true"
        :title="title"
        :emojiSize="30"
        @select="showEmoji"
      />
    </div>

    <div class="row">{{ emojisOutput }}</div>

    <div class="row-small">
      <iframe
        src="https://ghbtns.com/github-btn.html?user=serebrov&repo=emoji-mart-vue&type=star&count=true"
        frameBorder="0"
        scrolling="0"
        width="90px"
        height="20px"
      ></iframe>
    </div>

    <div class="row"></div>
    <h2>QDialog Example</h2>
    <div class="row">
      <q-btn label="Open QDialog" @click="emojiPickerDialog = true" />
    </div>

    <q-dialog v-model="emojiPickerDialog">
      <template v-slot:body style="height:450px">
        <picker :data="index" :emojiSize="24" :native="true"></picker>
      </template>
    </q-dialog>

    <div class="row"></div>
    <h2>Custom Search And Preview Templates Example</h2>
    <div class="row">
      Also here we use "StaticPicker" which does not use virtual scroller (it is
      slower, but easier to customize with css)
    </div>
    <div class="row">
      <StaticPicker :data="index" :native="true">
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
      </StaticPicker>
    </div>

    <div class="row"></div>
    <h2>Filtered picker example</h2>
    <div class="row">
      <Picker
        :native="true"
        emoji="flag-tf"
        :emojiSize="18"
        :data="indexFiltered"
      />
    </div>
  </div>
</template>

<script>
import data from '../data/all.json'
import { Picker, StaticPicker, Emoji, EmojiIndex } from '../src'
import '../css/emoji-mart.css'

import { QBtn, QDialog } from 'quasar-framework/dist/quasar.mat.esm'

const CUSTOM_EMOJIS = [
  {
    name: 'Party Parrot',
    short_names: ['parrot'],
    keywords: ['party'],
    imageUrl: './images/parrot.gif',
  },
  {
    name: 'Octocat',
    short_names: ['octocat'],
    keywords: ['github'],
    imageUrl: 'https://github.githubassets.com/images/icons/emoji/octocat.png',
  },
  {
    name: 'Squirrel',
    short_names: ['shipit', 'squirrel'],
    keywords: ['github'],
    imageUrl: 'https://github.githubassets.com/images/icons/emoji/shipit.png',
  },
]

let index = new EmojiIndex(data, {
  custom: CUSTOM_EMOJIS,
})

let indexFiltered = new EmojiIndex(data, {
  custom: CUSTOM_EMOJIS,
  emojisToShowFilter: (emoji) => {
    return emoji.short_names[0].match(/^flag.*/) !== null
  },
})

export default {
  data() {
    return {
      index: index,
      indexFiltered: indexFiltered,
      activeSet: 'native',
      emoji: 'point_up',
      title: 'Pick your emoji…',
      isVisible: true,
      emojiPickerDialog: false,
      emojisOutput: '',
    }
  },
  computed: {
    native() {
      return this.activeSet == 'native'
    },
    smile() {
      // Static emoji example
      let emoji = index.findEmoji(':smile:')
      // Note, that position in the emoji sheet is calculated by
      // `emoji` object
      let style = `background-position: ${emoji.getPosition()}; background-image: url(https://unpkg.com/emoji-datasource-emojione@4.0.4/img/emojione/sheets-256/64.png); width: 24px; height: 24px; display: inline-block; background-size: 5200%`
      return `<div class='emoji' style="${style}"></div>`
    },
    santaEmojiObject() {
      return index.findEmoji(':santa:')
    },
  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible
    },
    showEmoji(emoji) {
      this.emojisOutput = this.emojisOutput + emoji.native
    },
  },
  components: {
    Picker,
    StaticPicker,
    Emoji,
    QBtn,
    QDialog,
  },
}
</script>

<style scoped>
button + button {
  margin-left: 0.5em;
}
button {
  padding: 0.4em 0.6em;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  outline: 0;
  cursor: pointer;
}

button[disabled] {
  border-color: #ae65c5;
  cursor: default;
}

.modal {
  color: red;
}

/**
 * See https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors
 * the `>>>` allows to apply scoped css to child element that is generated
 * dynamically
**/
.modal >>> .modal-scroll {
  color: red;
  max-height: none;
}
.modal .modal-body {
  max-height: none;
}

h1 {
  font-family: Courier;
  font-size: 2rem;
}

h2 {
  font-family: Courier;
  font-size: 1.25rem;
  margin-top: 2rem;
}

.app .row {
  display: block;
}

.row + .row {
  margin-top: 2em;
}

.row-small {
  margin-top: 1em;
}

.emoji-mart {
  margin: 0 auto;
  text-align: left;
}

.emoji-mart-title-label {
  font-size: 21px;
}
</style>
