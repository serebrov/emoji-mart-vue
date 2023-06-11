<template>
  <div class="app">
    <div class="row">
      <h1>
        Emoji Mart Vue (fast)
        <emoji class="zap" :data="index" emoji=":zap:" :size="28" />
        <iframe
          src="https://ghbtns.com/github-btn.html?user=serebrov&repo=emoji-mart-vue&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="90px"
          height="20px"
        ></iframe>
      </h1>
    </div>

    <div class="row">
      <emoji :data="index" emoji=":santa::skin-tone-3:" :size="32" />
      <emoji :data="index" emoji="santa" set="twitter" :size="32" />
      <emoji :data="index" :emoji="santaEmojiObject" :size="32" />
    </div>

    <div class="row">
      <button class="tab-link" :class="tabCss('main')" @click="set('main')">
        Main Demo
      </button>
      <button
        class="tab-link"
        :class="tabCss('custom-dialog')"
        @click="set('custom-dialog')"
      >
        Custom Dialog
      </button>
      <button
        class="tab-link"
        :class="tabCss('q-dialog')"
        @click="set('q-dialog')"
      >
        QDialog
      </button>
      <button
        class="tab-link"
        :class="tabCss('selectable')"
        @click="set('selectable')"
      >
        Selectable Demo
      </button>
      <button
        class="tab-link"
        :class="tabCss('custom-templates')"
        @click="set('custom-templates')"
      >
        Templates Demo
      </button>
      <button
        class="tab-link"
        :class="tabCss('custom-order')"
        @click="set('custom-order')"
      >
        Categories Order Demo
      </button>
      <button
        class="tab-link"
        :class="tabCss('filtered')"
        @click="set('filtered')"
      >
        Filtered Picker
      </button>
      <button class="tab-link" :class="tabCss('i18n')" @click="set('i18n')">
        I18N Demo
      </button>
      <button
        class="tab-link"
        :class="tabCss('small-picker')"
        @click="set('small-picker')"
      >
        Small Picker
      </button>
    </div>

    <ExampleMain :index="index" v-if="is('main')" />
    <ExampleSelectable :index="index" v-if="is('selectable')" />
    <ExampleCustomDialog :index="index" v-if="is('custom-dialog')" />
    <ExampleCustomOrder :index="index" v-if="is('custom-order')" />
    <ExampleCustomTemplates :index="index" v-if="is('custom-templates')" />
    <ExampleFiltered :index="index" v-if="is('filtered')" />
    <ExampleI18N :index="index" v-if="is('i18n')" />
    <ExampleQDialog :index="index" v-if="is('q-dialog')" />
    <ExampleSmallPicker :index="index" v-if="is('small-picker')" />
  </div>
</template>

<script>
import data from '../data/all.json'
import { Emoji, EmojiIndex } from '../src'
import '../css/emoji-mart.css'

import ExampleMain from './exampleMain'
import ExampleSelectable from './exampleSelectable'
import ExampleCustomDialog from './exampleCustomDialog'
import ExampleCustomOrder from './exampleCustomOrder'
import ExampleCustomTemplates from './exampleCustomTemplates'
import ExampleFiltered from './exampleFiltered'
import ExampleI18N from './exampleI18N'
import ExampleQDialog from './exampleQDialog'
import ExampleSmallPicker from './exampleSmallPicker'

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

export default {
  data() {
    return {
      activeTab: 'main',
      index: index,
    }
  },
  computed: {
    santaEmojiObject() {
      return index.findEmoji(':santa:')
    },
  },
  methods: {
    set(tab) {
      this.activeTab = tab
    },
    is(tab) {
      return this.activeTab == tab
    },
    tabCss(tab) {
      return this.activeTab == tab ? 'tab-active' : ''
    },
    toggleVisible() {
      this.isVisible = !this.isVisible
    },
    toggleFlagsVisible() {
      this.flagsVisible = !this.flagsVisible
      if (!this.flagsVisible) {
        this.$refs.flags.onAnchorClick(this.$refs.flags.categories[0])
      }
    },
    showEmoji(emoji) {
      this.selectedEmojis.push(emoji)
      if (emoji.native) {
        this.emojisOutput = this.emojisOutput + emoji.native
      } else {
        this.emojisOutput = this.emojisOutput + '?'
      }
    },
    selectableSelectEmoji(emoji) {
      this.selectedEmoji = emoji
    },
    selectableUnselectEmoji(emoji) {
      this.selectedEmoji = undefined
    },
    toggleSelectable() {
      this.selectableVisible = !this.selectableVisible
    },
  },
  components: {
    Emoji,
    ExampleMain,
    ExampleSelectable,
    ExampleCustomDialog,
    ExampleCustomOrder,
    ExampleCustomTemplates,
    ExampleFiltered,
    ExampleI18N,
    ExampleQDialog,
    ExampleSmallPicker,
  },
}
</script>

<style>
body {
  padding: 1em;
}
h1 {
  font-family: Courier;
  font-size: 2rem;
}
h2,
.example h2 {
  font-family: Courier;
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 2rem;
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

.app .row {
  display: block;
}

.row + .row {
  margin-top: 2em;
}

.emoji-mart {
  margin: 0 auto;
  text-align: left;
}
.emoji-mart-title-label {
  font-size: 21px;
}

.example {
  margin-top: 1em;
}
.example .row {
  display: block;
}
</style>

<style scoped>
button.tab-link {
  border: none;
  color: blue;
  text-decoration: underline;
}
button.tab-active {
  border: 1px dotted;
  color: blue;
  text-decoration: underline;
}

button[disabled] {
  border-color: #ae65c5;
  cursor: default;
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
  margin-top: 1em;
}

.emoji-mart {
  margin: 0 auto;
  text-align: left;
}

.emoji-mart-title-label {
  font-size: 21px;
}

.zap {
  vertical-align: middle;
  margin: -7px 0 0 -12px;
}
</style>
