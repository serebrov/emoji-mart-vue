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
    <template v-for="set in ['apple', 'google', 'twitter', 'emojione']">
      <button @click="activeSet = set" :disabled="activeSet == set">
        <emoji :set="set" :size="24" emoji="grinning"></emoji>
      </button>
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
  :native<syntax type="operator">=</syntax>"<syntax type="variable">{{ native ? 'true' : 'false' }}</syntax>" {{ native ? ' ' : '' }} <input type='checkbox' v-model="native" />
  set<syntax type="operator">=</syntax><syntax type="string">"{{ activeSet }}"</syntax>
  @click<syntax type="operator">=</syntax>"addEmoji"&gt;
<syntax type="operator">&lt;/</syntax><syntax type="variable">picker</syntax>&gt;</syntax>
  </pre>

  <picker
    v-if="!hidden"
    :emoji-size="emojiSize"
    :per-line="perLine"
    :skin="skin"
    :native="native"
    :set="activeSet"
    @click="onClick">
  </picker>

  <div>
    <pre>
<syntax type="operator">import</syntax> &#123; Emoji &#125; <syntax type="operator">from</syntax> <syntax type="string">'emoji-mart-vue'</syntax>

<syntax type="operator">&lt;</syntax><syntax type="variable">emoji</syntax>
  emoji<syntax type="operator">=</syntax><syntax type="string">"thumbsup"</syntax>
  :size<syntax type="operator">=</syntax>"<syntax type="variable">64</syntax>"&gt;
<syntax type="operator">&lt;/</syntax><syntax type="variable">emoji</syntax><syntax type="operator">&gt;</syntax>
    </pre>

    <span :style="{ display: 'inline-block', marginTop: 60 }">
      <emoji
        emoji="thumbsup"
        :size="64"
        :set="activeSet"
      />
    </span>
  </div>

  <div>
    <pre>
<syntax type="operator">&lt;</syntax><syntax type="variable">emoji</syntax>
  emoji<syntax type="operator">=</syntax><syntax type="string">":thumbsup:"</syntax>
  :size<syntax type="operator">=</syntax>"<syntax type="variable">64</syntax>"&gt;
<syntax type="operator">&lt;/</syntax><syntax type="variable">emoji</syntax><syntax type="operator">&gt;</syntax>
    </pre>

    <span :style="{ display: 'inline-block', marginTop: 40 }">
      <emoji
        emoji=":thumbsup:"
        :size="64"
        :set="activeSet">
      </emoji>
    </span>
  </div>

  <div>
    <pre>
<syntax type="operator">&lt;</syntax><syntax type="variable">emoji</syntax>
  emoji<syntax type="operator">=</syntax><syntax type="string">":thumbsup::skin-tone-3:"</syntax>
  :size<syntax type="operator">=</syntax>"<syntax type="variable">64</syntax>"&gt;
<syntax type="operator">&lt;/</syntax><syntax type="variable">emoji</syntax><syntax type="operator">&gt;</syntax>
    </pre>

    <span :style="{ display: 'inline-block', marginTop: 40 }">
      <emoji
        emoji=":thumbsup::skin-tone-3:"
        :size="64"
        :set="activeSet">
      </emoji>
    </span>
  </div>

  <div>
    <pre>
<syntax type="operator">&lt;</syntax><syntax type="variable">emoji</syntax>
  emoji<syntax type="operator">=</syntax><syntax type="string">':thumbsup::skin-tone-3:'</syntax>
  :size<syntax type="operator">=</syntax>"<syntax type="variable">64</syntax>"
  native&gt;
<syntax type="operator">&lt;/</syntax><syntax type="variable">emoji</syntax><syntax type="operator">&gt;</syntax>
    </pre>

    <span :style="{ display: 'inline-block', marginTop: 60 }">
      <emoji
        emoji=":thumbsup::skin-tone-3:"
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

export default {
  data() {
    return {
      emojiSize: 24,
      perLine: 9,
      skin: 1,
      native: false,
      activeSet: 'apple',
      hidden: false
    }
  },
  methods: {
    onClick(emoji) {
      console.log(emoji)
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

</style>