<template>

<div>
  <div>
    <h1 class="demo-title">Emoji Mart Vue</h1>

    <iframe
      src="https://ghbtns.com/github-btn.html?user=jm-david&repo=emoji-mart-vue&type=star&count=true"
      frameBorder="0"
      scrolling="0"
      width="170px"
      height="20px"
    ></iframe>
  </div>

  <div class="row">
    <template v-for="set in ['apple', 'google', 'twitter', 'emojione', 'messenger', 'facebook']">
      <button @click="activeSet = set" :disabled="activeSet == set">{{ set }}</button>
    </template>
  </div>

  <div class="row">
    <button @click="hidden = !hidden">
      {{ hidden ? 'Mount' : 'Unmount' }}
    </button>
  </div>

  <pre>
<syntax type="operator">import</syntax> &#123; Picker &#125; <syntax type="operator">from</syntax> <syntax type="string">'emoji-mart-vue'</syntax>

<syntax type="operator">&lt;</syntax><syntax type="variable">picker</syntax>
  :emoji-size<syntax type="operator">=</syntax>"<syntax type="variable">{{ emojiSize }}</syntax>" <input type="range" min="16" max="64" v-model.number="emojiSize" />
  :per-line<syntax type="operator">=</syntax>"<syntax type="variable">{{ perLine }}</syntax>" {{ perLine < 10 ? '  ' : ' ' }} <input type="range" min="7" max="16" v-model.number="perLine" />
  :skin<syntax type="operator">=</syntax>"<syntax type="variable">{{ skin }}</syntax>"        <input type="range" min="1" max="6" v-model.number="skin">
  :native<syntax type="operator">=</syntax>"<syntax type="variable">{{ native ? 'true' : 'false' }}</syntax>" {{ native ? ' ' : '' }} <input type="checkbox" v-model="native" />
  set<syntax type="operator">=</syntax><syntax type="string">"{{ activeSet }}"</syntax>
  :custom<syntax type="operator">=</syntax>"<syntax type="variable">[&hellip;]</syntax>"
  :auto-focus<syntax type="operator">=</syntax>"<syntax type="variable">{{ autoFocus ? 'true' : 'false' }}</syntax>" <input type="checkbox" v-model="autoFocus" />
  :infinite-scroll<syntax type="operator">=</syntax>"<syntax type="variable">{{ infiniteScroll ? 'true' : 'false' }}</syntax>" <input type="checkbox" v-model="infiniteScroll" />
  :include<syntax type="operator">=</syntax>"<syntax type="variable">[</syntax>
  <div class="categories">
    <label v-for="category in categories">
      <input type="checkbox" :checked="isIncluded(category)" @change="onChangeInclude(category)" :disabled="exclude.length > 0"> <syntax type="string">"{{ category }}"</syntax>
    </label>
  </div>
  <syntax type="variable">]</syntax>"
  :exclude<syntax type="operator">=</syntax>"<syntax type="variable">[</syntax>
  <div class="categories">
    <label v-for="category in categories">
      <input type="checkbox" :checked="isExcluded(category)" @change="onChangeExclude(category)" :disabled="include.length > 0"> <syntax type="string">"{{ category }}"</syntax>
    </label>
  </div>
  <syntax type="variable">]</syntax>"
  @click<syntax type="operator">=</syntax>"<syntax type="variable">addEmoji</syntax>"&gt;
<syntax type="operator">&lt;/</syntax><syntax type="variable">picker</syntax>&gt;</syntax>
  </pre>

  <picker
    v-if="!hidden"
    :emoji-size="emojiSize"
    :per-line="perLine"
    :skin="skin"
    :native="native"
    :set="activeSet"
    :custom="custom"
    :auto-focus="autoFocus"
    :infinite-scroll="infiniteScroll"
    :include="include"
    :exclude="exclude"
    @click="onClick">
  </picker>

  <div>
    <pre>
<syntax type="operator">import</syntax> &#123; Emoji &#125; <syntax type="operator">from</syntax> <syntax type="string">'emoji-mart-vue'</syntax>

<syntax type="operator">&lt;</syntax><syntax type="variable">emoji</syntax>
  emoji<syntax type="operator">=</syntax><syntax type="string">"{{ currentEmoji.id }}"</syntax>
  :size<syntax type="operator">=</syntax>"<syntax type="variable">64</syntax>"&gt;
<syntax type="operator">&lt;/</syntax><syntax type="variable">emoji</syntax><syntax type="operator">&gt;</syntax>
    </pre>

    <span :style="{ display: 'inline-block', marginTop: 60 }">
      <emoji
        :emoji="currentEmoji"
        :size="64"
        :set="activeSet"
      />
    </span>
  </div>

  <div>
    <pre>
<syntax type="operator">&lt;</syntax><syntax type="variable">emoji</syntax>
  emoji<syntax type="operator">=</syntax><syntax type="string">":{{ currentEmoji.id }}:"</syntax>
  :size<syntax type="operator">=</syntax>"<syntax type="variable">64</syntax>"&gt;
<syntax type="operator">&lt;/</syntax><syntax type="variable">emoji</syntax><syntax type="operator">&gt;</syntax>
    </pre>

    <span :style="{ display: 'inline-block', marginTop: 40 }">
      <emoji
        :emoji="`:${currentEmoji.id}:`"
        :size="64"
        :set="activeSet">
      </emoji>
    </span>
  </div>

  <div>
    <pre>
<syntax type="operator">&lt;</syntax><syntax type="variable">emoji</syntax>
  emoji<syntax type="operator">=</syntax><syntax type="string">":{{ currentEmoji.id }}::skin-tone-3:"</syntax>
  :size<syntax type="operator">=</syntax>"<syntax type="variable">64</syntax>"&gt;
<syntax type="operator">&lt;/</syntax><syntax type="variable">emoji</syntax><syntax type="operator">&gt;</syntax>
    </pre>

    <span :style="{ display: 'inline-block', marginTop: 40 }">
      <emoji
        :emoji="`:${currentEmoji.id}::skin-tone-3:`"
        :size="64"
        :set="activeSet">
      </emoji>
    </span>
  </div>

  <div>
    <pre>
<syntax type="operator">&lt;</syntax><syntax type="variable">emoji</syntax>
  emoji<syntax type="operator">=</syntax><syntax type="string">':{{ currentEmoji.id }}::skin-tone-3:'</syntax>
  :size<syntax type="operator">=</syntax>"<syntax type="variable">64</syntax>"
  native&gt;
<syntax type="operator">&lt;/</syntax><syntax type="variable">emoji</syntax><syntax type="operator">&gt;</syntax>
    </pre>

    <span :style="{ display: 'inline-block', marginTop: 60 }">
      <emoji
        :emoji="`:${currentEmoji.id}::skin-tone-3:`"
        :size="64"
        native>
      </emoji>
    </span>
  </div>
</div>

</template>

<script>

import Syntax from './syntax'
import { Picker, Emoji } from '../src'

const CUSTOM_EMOJIS = [
  {
    name: 'Octocat',
    short_names: ['octocat'],
    keywords: ['github'],
    imageUrl: 'https://assets-cdn.github.com/images/icons/emoji/octocat.png?v7'
  },
  {
    name: 'Squirrel',
    short_names: ['shipit', 'squirrel'],
    keywords: ['github'],
    imageUrl: 'https://assets-cdn.github.com/images/icons/emoji/shipit.png?v7'
  }
]

export default {
  data() {
    return {
      emojiSize: 24,
      perLine: 9,
      skin: 1,
      native: false,
      activeSet: 'apple',
      custom: CUSTOM_EMOJIS,
      currentEmoji: { id: '+1' },
      autoFocus: false,
      infiniteScroll: true,
      include: [],
      exclude: [],
      hidden: false,
      categories: ['recent', 'people', 'nature', 'foods', 'activity', 'places', 'objects', 'symbols', 'flags', 'custom']
    }
  },
  methods: {
    onClick(emoji) {
      this.currentEmoji = emoji
    },
    onChangeInclude(category) {
      if (this.isIncluded(category)) {
        this.include.splice(this.include.indexOf(category), 1)
      } else {
        this.include.push(category)
      }
    },
    onChangeExclude(category) {
      if (this.isExcluded(category)) {
        this.exclude.splice(this.exclude.indexOf(category), 1)
      } else {
        this.exclude.push(category)
      }
    },
    isIncluded(category) {
      return this.include.indexOf(category) >= 0
    },
    isExcluded(category) {
      return this.exclude.indexOf(category) >= 0
    }
  },
  components: {
    Syntax,
    Picker,
    Emoji
  }
}

</script>

<style scoped>

button + button { margin-left: .5em }
button {
  padding: .4em .6em;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, .1);
  background: #fff;
  outline: 0;
  cursor: pointer;
}

button[disabled] {
  border-color: #ae65c5;
}

.row {
  margin-top: 1em;
}

.demo-title {
  display: inline-block;
}

iframe {
  margin-left: 1em;
}

pre {
  font-size: 18px;
  display: inline-block;
  vertical-align: top;
  margin: 1em;
  width: 460px;
}

.categories {
  margin-left: 40px;
  width: 400px;
  white-space: normal;
}

.categories label {
  display: inline-block;
  width: 200px;
}

.categories input:disabled + span {
  opacity: .5;
}

</style>