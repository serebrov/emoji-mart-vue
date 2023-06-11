[![Build Status - CircleCI](https://circleci.com/gh/serebrov/emoji-mart-vue/tree/master.svg?style=svg)](https://circleci.com/gh/serebrov/emoji-mart-vue/tree/master)

[![codecov](https://codecov.io/gh/serebrov/emoji-mart-vue/branch/master/graph/badge.svg)](https://codecov.io/gh/serebrov/emoji-mart-vue)

This project is a fork of https://github.com/jm-david/emoji-mart-vue with many performance fixes, tests and structural code changes.
See the [changelog](#changelog) for details.

The original component was [very slow to show/destroy](https://github.com/jm-david/emoji-mart-vue/pull/47), around 2 seconds to show and even a bit longer to destroy, so it was unusable in a popup.

This was the reason to fork and change it, the demo is [here](https://serebrov.github.io/emoji-mart-vue/), use the "Show / hide the picker" button to see create/destroy performance

> The original project has been forked from [emoji-mart](https://www.npmjs.com/package/emoji-mart) which was written for React.

<div align="center">
  <br><b>Emoji Mart (Vue)</b> is a Slack-like customizable<br>emoji picker component for VueJS
  <br><a href="https://serebrov.github.io/emoji-mart-vue">Demo</a> • <a href="https://github.com/serebrov/emoji-mart-vue/releases">Changelog</a>
  <br><img src="https://cloud.githubusercontent.com/assets/436043/17186519/9e71e8fe-5403-11e6-9314-21365c56a601.png">
</div>

# Demo app

Live demo app: https://serebrov.github.io/emoji-mart-vue/
Demo application code is [under the ./docs folder](./docs).

# Installation

Install from npm: `npm install --save emoji-mart-vue-fast`.

It is also possible to install directly from github (could be useful for forks): `npm install --save serebrov/emoji-mart-vue#5.4.9.`

Here is the list of [releases](https://github.com/serebrov/emoji-mart-vue/releases).

# Vue 3 Support

Component works with Vue 3, [here is a simple demo app](https://github.com/serebrov/emoji-mart-vue3-demo).

Live demo: https://serebrov.github.io/emoji-mart-vue3-demo/.

See also: [#88](https://github.com/serebrov/emoji-mart-vue/issues/88).

# Quick Example

```
<template>
  <div class="row">
    <Picker :data="emojiIndex" set="twitter" @select="showEmoji" />
  </div>

  <div class="row">
    <div>
      {{ emojisOutput }}
    </div>
  </div>
</template>

<script>
// Import data/twitter.json to reduce size, all.json contains data for
// all emoji sets.
import data from "emoji-mart-vue-fast/data/all.json";
// Import default CSS
import "emoji-mart-vue-fast/css/emoji-mart.css";

// Vue 2:
import { Picker, EmojiIndex } from "emoji-mart-vue-fast";
// Vue 3, import components from `/src`:
import { Picker, EmojiIndex } from "emoji-mart-vue-fast/src";

// Create emoji data index.
// We can change it (for example, filter by category) before passing to the component.
let emojiIndex = new EmojiIndex(data);

export default {
  name: "App",
  components: {
    Picker
  },

  data() {
    return {
      emojiIndex: emojiIndex,
      emojisOutput: ""
    };
  },

  methods: {
    showEmoji(emoji) {
      this.emojisOutput = this.emojisOutput + emoji.native;
    }
  }
};
</script>

<style>
.row { display: flex; }
.row > * { margin: auto; }
</style>
```

# Changelog

Major changes comparing to the original emoji-mart-vue:

- [2023-06-11, v15] Updated to emojis v15, thanks [@susnux](https://github.com/susnux)
- [2022-07-12, v11] Updated to emojis v14, thanks [@Hysterelius](https://github.com/Hysterelius)!
- [2021-04-17, v10] Accessibility properties and keyboard controls
- [2021-03-20, v9] Updated to emojis v13, thanks [@sgtaziz](https://github.com/sgtaziz)!
- Updated to emojis v12 (see the breaking change note below)

Performance improvements:

- Reworked emoji index class: use same index (so same data) for all components.
- Render emojis in categories without `Emoji` component, there are a lot of emojis to render and there is a noticeable slow down when we render a component per emoji.
- Frozen objects with emoji data to disable Vue change tracking
- Do not create `EmojiIndex` globally, before it was loaded (along with the emoji data) even when it was not actually used
- Extract CSS into external file, use less inline styles to reduce the amount of generated HTML
- Fixes in CSS for native unicode emojis ported from the [original react project](https://github.com/missive/emoji-mart)
- Excluded ./data/all.json from the js bundle (it was always loaded within the bundle even if it is not needed)
- Updated to babel 7
- Added tests

Breaking change in v6: removed `Emoji` and `Picker` [wrappers](#convenience-wrappers), renamed `NimbleEmoji` to `Emoji` and `NimblePicker` to `Picker`.
See the `Convenience Wrappers` section below for details.

Breaking change in v7: switched to Unicode v12 emoji set which results in several breaking changes:
- Removed 'emojione' set (removed from [emoji-datasource](https://github.com/iamcal/emoji-data) by [JoyPixels request](https://github.com/iamcal/emoji-data/blob/master/CHANGES.md#2018-07-05--v410))
- Removed 'messenger' set - it was [merged](https://github.com/iamcal/emoji-data/blob/master/CHANGES.md#2020-01-10--v500) into 'facebook' set
- Changed emoji categories: removed 'Smileys & People', added 'Smileys & Emotions' and 'People & Body' instead

Breaking change in v8:
- The `StaticPicker` component is now default (exported as `Picker`), previous default component renamed to `VirtualScrollPicker`

Breaking change in v12:
- The `VirtualScrollPicker` was removed, see [#236](https://github.com/serebrov/emoji-mart-vue/issues/236).

# Original Readme

## Not opinionated

**Emoji Mart** doesn’t automatically insert anything into a text input, nor does it show or hide itself. It simply returns an `emoji` object. It’s up to the developer to mount/unmount (it’s fast!) and position the picker. You can use the returned object as props for the `EmojiMart.Emoji` component. You could also use `emoji.colons` to insert text into a textarea or `emoji.native` to use the emoji.

## Components

### Picker

```js
import data from 'emoji-mart-vue-fast/data/all.json'
import { Picker, EmojiIndex } from 'emoji-mart-vue-fast'
let emojiIndex = new EmojiIndex(data)
```

Import CSS with default styles:

```js
import 'emoji-mart-vue-fast/css/emoji-mart.css'
```

Note: to have a custom look for the picker, either use own css file without including the standard one or add custom styles on top of standard.

Note: CSS also includes background images for image-based emoji sets (apple, google, twitter, facebook). The images are loaded from the `unpkg.com`. To use self-hosted emojis sheet, override CSS like this:

```css
/* load twitter sheet from own server */
.emoji-mart-body .emoji-type-image.emoji-set-twitter {
	background-image: url(/img/twitter-5.0.1-sheets-256-64.png);
}
```

```html
<picker :data="emojiIndex" set="twitter" />
<picker :data="emojiIndex" @select="addEmoji" />
<picker :data="emojiIndex" title="Pick your emoji…" emoji="point_up" />
<picker :data="emojiIndex" :style="{ position: 'absolute', bottom: '20px', right: '20px' }" />
<picker :data="emojiIndex" 
	:i18n="{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }"
/>
```

| Prop               | Required | Default            | Description                                                                                          |
| ------------------ | :------: | ------------------ | ---------------------------------------------------------------------------------------------------- |
| **autoFocus**      |          | `false`            | Auto focus the search input when mounted                                                             |
| **color**          |          | `#ae65c5`          | The top bar anchors select and hover color                                                           |
| **emoji**          |          | `department_store` | The emoji shown when no emojis are hovered, set to an empty string to show nothing                   |
| **emojiSize**      |          | `24`               | The emoji width and height; affects font size for native emoji (it is 80% of emojiSize); also the picker width is cacluated dynamically based on emojiSize |
| **perLine**        |          | `9`                | Number of emojis per line. While there’s no minimum or maximum, this will affect the picker’s width. |
| **i18n**           |          | [`{…}`](#i18n)     | [An object](#i18n) containing localized strings                                                      |
| **native**         |          | `false`            | Renders the native unicode emoji                                                                     |
| **set**            |          | `apple`            | The emoji set: `'apple', 'google', 'twitter', 'facebook'`                   |
| **showPreview**    |          | `true`             | Display preview section                                                                              |
| **showSearch**     |          | `true`             | Display search section                                                                               |
| **showCategories** |          | `true`             | Display categories                                                                                   |
| **showSkinTones**  |          | `true`             | Display skin tones picker                                                                            |
| **emojiTooltip**   |          | `false`            | Show emojis short name when hovering (title)                                                         |
| **skin**           |          |                    | Forces skin color: `1, 2, 3, 4, 5, 6`                                                                |
| **defaultSkin**    |          | `1`                | Default skin color: `1, 2, 3, 4, 5, 6`                                                               |
| **pickerStyles**   |          |                    | Inline styles applied to the root element. Useful for positioning                                    |
| **title**          |          | `Emoji Mart™`      | The title shown when no emojis are hovered                                                           |
| **infiniteScroll** |          | `true`             | Scroll continuously through the categories                                                           |

| Event           | Description             |
| --------------- | ----------------------- |
| **select**      | Params: `(emoji) => {}` |
| **skin-change** | Params: `(skin) => {}`  |

#### Picker Usage And Native Emoji vs Images

The `select` event described above can be handled to insert the emoji into the text area or use it in any other way.
This component does not enforce the usage pattern and it's up to the application how to handle the emoji after it was selected.

For example:

```
<picker :data="emojiIndex" @select="this.selectEmoji" />

...

selectEmoji(emoji) {
  // Assuming the `textContainer` method that returns the
  // text container component with `enterText` method.
  const textContainer = this.textContainer()
  // Enter the native emoji
  textContainer.enterText(emoji.native)
}
```

The above will use `emoji.native` to insert native emoji into the input.

This is the simplest way to use the component and it works relatively well in latest versions of native browsers and latest operating systems.
Here, we rely on native unicode emojis support, which, theoretically, should be handled just like any other unicode characters.

In practice, the support for native unicode emoji is still not perfect: unicode emoji characters are part of the font and the font needs to be colorful. But there is no yet a single standard for [color fonts](https://www.colorfonts.wtf/) implemented by browsers, so the browser leaves emoji rendering to the operating system.

This way, how the emoji will look depends on the operating system and native unicode emoji will look different on different platforms. Also older operating system versions don't not support all the emojis that are currently in the [unicode standard](https://unicode.org/emoji/charts/full-emoji-list.html), so it may be necessary to limit emojis to some smaller subset.

More consistent solution is also more complex: we can use `emoji.colons` to insert emoji in the "colons" syntax (such as `:smile:`) and use regular expressions to find and render the colons emoji as images.

In this case the application can keep text emoji representation and replace before rendering wherever needed (browser, mobile app, email).

The good part here is that we get rid of most of the problems, related to unicode, we work with plain text. For example, in the database the application could have a text like "Hello :smile:" which will be turned into emoji with javascript and even if we leave it as a text (due to the bug or lack of javascript support), it will still make sense.

The bad part is that conflicts are possible - if someone enters the `:smile:` text, it will turn into emoji.

The `emoji.getPosition()` might be useful in this case to get the emoji position on the emoji sprite sheet.

The replacement can be done approximately like this:

```
const COLONS_REGEX = new RegExp(
  '([^:]+)?(:[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?)',
  'g'
)

/**
 * Replace emojis insdie the `text` with `<span>`s.
 */
export function wrapEmoji(text: string): string {
  return text.replace(COLONS_REGEX, function(match, p1, p2) {
    const before = p1 || ''
    // We add "data-text='{emoji.native}'", don't replace it
    if (endsWith(before, 'alt="') || endsWith(before, 'data-text="')) {
      return match
    }
    let emoji = emojiIndex.findEmoji(p2)
    if (!emoji) {
      return match
    }
    return before + emojiToHtml(emoji)
  })
  return text;
}

/**
 * Convert Emoji to HTML to represent it as an image.
 */
export function emojiToHtml(emoji: Emoji): string {
  let style = `background-position: ${emoji.getPosition()}`
  // The src="data:image..." is needed to prevent border around img tags.
  return `<img data-text="${emoji.native}" alt="${
    emoji.colons
  }" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class='emoji-text' style="${style}">`
}

```

Another solution is to use `emoji.native` to insert native emoji and then find and replace them with images.

In this case, the application can keep the native emoji in the database and replace with images where needed - in this case, it can do the replacement for browser, but keep unicode emoji for native app.

The good side here is that conflicts are unlikely, we have native unicode emoji as a part of the text and replace them with images for better browser / os support. It means that if browsers improve the color font support in the future, we can just remove the image replacement part and the rest will be working.

The replacement can be done like this (using the [emoji-regex](https://www.npmjs.com/package/emoji-regex) package):

```
// npm install emoji-regex
import emojiRegex from 'emoji-regex'

import data from 'emoji-mart-vue-fast/data/all.json'
import { EmojiIndex } from 'emoji-mart-vue-fast'

const unicodeEmojiRegex = emojiRegex()

export function wrapEmoji(text: string): string {
  return text.replace(unicodeEmojiRegex, function(match, offset) {
    const before = text.substring(0, offset)
    if (endsWith(before, 'alt="') || endsWith(before, 'data-text="')) {
      // Emoji inside the replaced <img>
      return match
    }
    // Find emoji object by native emoji.
    let emoji = emojiIndex.nativeEmoji(match)
    if (!emoji) {
      // Can't find unicode emoji in our index
      return match
    }
    // See `emojiToHtml` function above.
    return emojiToHtml(emoji)
  })
}

```

Here we can use `emojiIndex.nativeEmoji(emoji_char)` to get the emoji object by native emoji and then convert it to the HTML image.


#### I18n

```js
search: 'Search',
notfound: 'No Emoji Found',
categories: {
  search: 'Search Results',
  recent: 'Frequently Used',
  smileys: 'Smileys & Emoticon',
  people: 'People & Body',
  nature: 'Animals & Nature',
  foods: 'Food & Drink',
  activity: 'Activity',
  places: 'Travel & Places',
  objects: 'Objects',
  symbols: 'Symbols',
  flags: 'Flags',
  custom: 'Custom',
}
```

#### Sheet sizes

Sheets are served from [unpkg](https://unpkg.com), a global CDN that serves files published to [npm](https://www.npmjs.com).
Note: URLs for background images are specified in the [css/emoji-mart.css](css/emoji-mart.css).

| Set       | Size (`sheetSize: 16`) | Size (`sheetSize: 20`) | Size (`sheetSize: 32`) | Size (`sheetSize: 64`) |
| --------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| apple     | 334 KB                 | 459 KB                 | 1.08 MB                | 2.94 MB                |
| facebook  | 322 KB                 | 439 KB                 | 1020 KB                | 2.50 MB                |
| google    | 301 KB                 | 409 KB                 | 907 KB                 | 2.17 MB                |
| twitter   | 288 KB                 | 389 KB                 | 839 KB                 | 1.82 MB                |

#### Datasets and Custom Emojis

While the default setup assumes `all.json` usage with all sets available, you may want to include only a single set data to reduce the size of your bundle.

| Set       | Size (on disk) |
| --------- | -------------- |
| all       | 570 KB         |
| apple     | 484 KB         |
| facebook  | 421 KB         |
| google    | 483 KB         |
| twitter   | 484 KB         |

To use these data files (or any other custom data), use the `Picker` component like this:

```js
import data from 'emoji-mart-vue-fast/data/facebook.json'
import { Picker, EmojiIndex } from 'emoji-mart-vue-fast'
let index = new EmojiIndex(data)
```

```html
<picker set="facebook" :data="data" />
```

Using `EmojiIndex`, it is also possible to control which emojis data is included or excluded via constructor parameters:

| Param                  | Default | Description                                                                                                                                                     |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **include**            | `[]`    | Only load included categories. Accepts [I18n categories keys](#i18n). Order will be respected, except for the `recent` category which will always be the first. |
| **exclude**            | `[]`    | Don't load excluded categories. Accepts [I18n categories keys](#i18n).                                                                                          |
| **custom**             | `[]`    | [Custom emojis](#custom-emojis)                                                                                                                                 |
| **recent**             |         | Pass your own frequently used emojis as array of string IDs                                                                                                     |
| **recentLength**       |         | Set the number of emojis for the recent category.                                                                                                               |
| **emojisToShowFilter** |         | `((emoji) => true)`                                                                                                                                             | A Fn to choose whether an emoji should be displayed or not |

Categories for `exclude` and `include` parameters are specified as category id, that are present in data arrays.

Avaiable categories are: `people,` `nature,` `foods,` `activity,` `places,` `objects,` `symbols,` `flags`.

For example:

```js
import data from 'emoji-mart-vue-fast/data/facebook.json'
import { Picker, EmojiIndex } from 'emoji-mart-vue-fast'

let emojisToShowFilter = function(emoji) {
	// check the emoji properties, see the examples of emoji object below
	return true // return true to include or false to exclude
}
let include = ['people', 'nature']
// or exclude:
// let exclude = ['flags']

const custom = [
	{
		name: 'Octocat',
		short_names: ['octocat'],
		text: '',
		emoticons: [],
		keywords: ['github'],
		imageUrl: 'https://assets-cdn.github.com/images/icons/emoji/octocat.png?v7',
	},
]

let index = new EmojiIndex(data, {
	emojisToShowFilter,
	include,
	exclude,
	custom,
})
```

#### Examples of `emoji` object:

```js
{
  id: 'smiley',
  name: 'Smiling Face with Open Mouth',
  colons: ':smiley:',
  text: ':)',
  emoticons: [
    '=)',
    '=-)'
  ],
  skin: null,
  native: '😃'
}

{
  id: 'santa',
  name: 'Father Christmas',
  colons: ':santa::skin-tone-3:',
  text: '',
  emoticons: [],
  skin: 3,
  native: '🎅🏼'
}

{
  id: 'octocat',
  name: 'Octocat',
  colons: ':octocat',
  text: '',
  emoticons: [],
  custom: true,
  imageUrl: 'https://assets-cdn.github.com/images/icons/emoji/octocat.png?v7'
}
```

#### Keyboard Controls

When the cursor is in the search field, the `Picker` component allows to select the emoji with arrow keys.
The selection is confirm with enter, which will emit the `selected` event (same as when the emoji is clicked with mouse).

### Emoji

```js
import data from 'emoji-mart-vue-fast/data/all.json'
import { Emoji, EmojiIndex } from 'emoji-mart-vue-fast'
```

```html
<emoji :data="index" emoji=":santa::skin-tone-3:" :size="32" />
<emoji :data="index" emoji="santa" set="twitter" :size="32" />
<emoji :data="index" :emoji="santaEmojiObject" :size="32" />

<script>
import data from 'emoji-mart-vue-fast/data/all.json'
let index = new EmojiIndex(data)

export default {
  computed: {
    santaEmojiObject() {
      return index.findEmoji(':santa:')
    },
  },
}
</script>

```

| Prop                                         | Required | Default                                                                                              | Description                                                                                                        |
| -------------------------------------------- | :------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **emoji**                                    |    ✓     |                                                                                                      | Either a string or an `emoji` object                                                                               |
| **size**                                     |    ✓     |                                                                                                      | The emoji width and height.                                                                                        |
| **native**                                   |          | `false`                                                                                              | Renders the native unicode emoji                                                                                   |
| [**fallback**](#unsupported-emojis-fallback) |          |                                                                                                      | Params: `(emoji) => {}`                                                                                            |
| **set**                                      |          | `apple`                                                                                              | The emoji set: `'apple', 'google', 'twitter', 'facebook'`                                                          |
| **sheetSize**                                |          | `64`                                                                                                 | The emoji [sheet size](#sheet-sizes): `16, 20, 32, 64`                                                             |
| **backgroundImageFn**                        |          | `` ((set, sheetSize) => `https://unpkg.com/emoji-datasource@3.0.0/sheet_${set}_${sheetSize}.png`) `` | A Fn that returns that image sheet to use for emojis. Useful for avoiding a request if you have the sheet locally. |
| **skin**                                     |          | `1`                                                                                                  | Skin color: `1, 2, 3, 4, 5, 6`                                                                                     |
| **tooltip**                                  |          | `false`                                                                                              | Show emoji short name when hovering (title)                                                                        |
| **tag**                                      |          | `span`                                                                                               | HTML tag to use, `span` by default, set to `button` for clickable emojis.                                          |

| Event          | Description             |
| -------------- | ----------------------- |
| **select**     | Params: `(emoji) => {}` |
| **mouseenter** | Params: `(emoji) => {}` |
| **mouseleave** | Params: `(emoji) => {}` |

#### Unsupported emojis fallback

Certain sets don’t support all emojis (i.e. Facebook don’t support `:shrug:`). By default the Emoji component will not render anything so that the emojis’ don’t take space in the picker when not available. When using the standalone Emoji component, you can however render anything you want by providing the `fallback` props.

To have the component render `:shrug:` you would need to:

```js
function emojiFallback(emoji) {
	return `:${emoji.short_names[0]}:`
}
```

```html
<emoji set="facebook" emoji="shrug" :size="24" :fallback="emojiFallback" />
```

## Headless search

The `Picker` doesn’t have to be mounted for you to take advantage of the advanced search results.

```js
import { EmojiIndex } from 'emoji-mart-vue-fast'
import data from 'emoji-mart-vue-fast/data/all.json'

const emojiIndex = new EmojiIndex(data)
emojiIndex.search('christmas').map((o) => o.native)
// => [🎄, 🎅🏼, 🔔, 🎁, ⛄️, ❄️]
```

### With custom data

```js
import data from 'emoji-mart-vue-fast/data/facebook'
import { EmojiIndex } from 'emoji-mart-vue-fast'

let emojiIndex = new EmojiIndex(data)
emojiIndex.search('christmas')
```

## Storage

By default EmojiMart will store user chosen skin and frequently used emojis in `localStorage`. That can however be overwritten should you want to store these in your own storage.

```js
import { store } from 'emoji-mart-vue-fast'

store.setHandlers({
	getter: (key) => {
		// Get from your own storage (sync)
	},

	setter: (key, value) => {
		// Persist in your own storage (can be async)
	},
})
```

Possible keys are:

| Key        | Value                            | Description                                                                                                     |
| ---------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| skin       | `1, 2, 3, 4, 5, 6`               |                                                                                                                 |
| frequently | `{ 'astonished': 11, '+1': 22 }` | An object where the key is the emoji name and the value is the usage count                                      |
| last       | 'astonished'                     | (Optional) Used by `frequently` to be sure the latest clicked emoji will always appear in the “Recent” category |

## Features

### Powerful search

#### Short name, name and keywords

Not only does **Emoji Mart** return more results than most emoji picker, they’re more accurate and sorted by relevance.

<img width="338" alt="summer" src="https://user-images.githubusercontent.com/436043/32532567-179f1be4-c400-11e7-885e-df6e9b52c665.png">

#### Emoticons

The only emoji picker that returns emojis when searching for emoticons.

<img width="338" alt="emoticons" src="https://user-images.githubusercontent.com/436043/32532570-1be0dd28-c400-11e7-90cd-f33396277602.png">

#### Results intersection

For better results, **Emoji Mart** split search into words and only returns results matching both terms.

<img width="338" alt="high-five" src="https://user-images.githubusercontent.com/436043/32532573-1f4a9d1e-c400-11e7-8656-921bc6c09732.png">

### Fully customizable

#### Anchors color, title and default emoji

<img width="338" alt="customizable-color" src="https://user-images.githubusercontent.com/436043/32532582-302dc9e4-c400-11e7-9b97-f37c447231ca.png"><br><img width="338" alt="pick-your-emoji" src="https://user-images.githubusercontent.com/436043/32532585-34546faa-c400-11e7-9c9d-fbbe830d4368.png">

#### Emojis sizes and length

<img width="296" alt="size-and-length" src="https://user-images.githubusercontent.com/436043/32532590-381f67de-c400-11e7-86f6-328e30d6b116.png">

#### Default skin color

As the developer, you have control over which skin color is used by default.

<img width="205" alt="skins" src="https://user-images.githubusercontent.com/436043/32532858-0a559560-c402-11e7-8680-f77f780a5a49.png">

It can however be overwritten as per user preference.

<img width="98" alt="customizable-skin" src="https://user-images.githubusercontent.com/436043/32532883-2c620e7c-c402-11e7-976c-50d32be0566c.png">

#### Multiple sets supported

Apple / Google / Twitter / Facebook

<img width="214" alt="sets" src="https://user-images.githubusercontent.com/436043/33786868-d4226e60-dc38-11e7-840a-e4cf490f5f4a.png">

## Convenience Wrappers

The original project had convenience wrappers for `Emoji` and `Picker` components that make the usage a bit simpler.
But, since they are using `all.json` for data, that resulted in bigger bundle sizes as `all.json` was also included into the any app that is using emoji picker, even if it doesn't need all kinds of emojis.

Original components were removed and included here as an example.

Picker component wrapper with default settings:

```javascript
<script>
import data from 'emoji-mart-vue-fast/data/all.json'
import { EmojiIndex } from 'emoji-mart-vue-fast/src/utils/emoji-data'
import EmojiMartPicker from 'emoji-mart-vue-fast/src/components/Picker'

import { PickerProps } from 'emoji-mart-vue-fast/src/utils/shared-props'

let index = new EmojiIndex(data)

export default {
  functional: true,
  props: {
    ...PickerProps,
    data: {
      type: Object,
      default() {
        return index
      },
    },
  },
  render(h, ctx) {
    let { data, props, children } = ctx

    return h(EmojiMartPicker, { ...data, props }, children)
  },
}
</script>
```

Emoji component wrapper with default settings:

```javascript
<script>
import data from 'emoji-mart-vue-fast/data/all.json'
import { EmojiIndex } from 'emoji-mart-vue-fast/src/utils/emoji-data'
import EmojiMartEmoji from 'emoji-mart-vue-fast/src/components/Emoji'

import { EmojiProps } from 'emoji-mart-vue-fast/src/utils/shared-props'

export default {
  functional: true,
  props: {
    ...EmojiProps,
    data: {
      type: Object,
      default() {
        let index = new EmojiIndex(data)
        return index
      },
    },
  },
  render(h, ctx) {
    let { data, props, children } = ctx

    return h(EmojiMartEmoji, { ...data, props }, children)
  },
}
</script>
```

## Development

Build the component and the demo app.

```sh
# Build the component and watch for file changes.
$ npm run build
```

```sh
# Build the demo app and watch for file changes.
$ npm run dev:docs
```

Open [docs/index.html](docs/index.html) in browser to see the demo.

Or serve the dir (with [npx](https://www.npmjs.com/package/npx) and [http-server](https://www.npmjs.com/package/http-server):

```sh
npx http-server ./docs
```

And open [http://127.0.0.1:8080/](http://127.0.0.1:8080/).

### Updating emoji

Update `emoji-datasource` in `package.json`.

Run `npm install` to update packages.

Rebuild data with `npm run build`.

If needed, update sheet columns in `src/utils/emoji-data.js` to reflect `emoji-datasource` (usually found [here](https://github.com/missive/emoji-mart/blob/5d04680c0503410752256ed1f744166ac48ee219/packages/emoji-mart-data/build.js#L43)).

Update tests with `npm run jest -- -u`, then run tests and prettier (below).

Push changes to GitHub.

## Tests

Run tests with `npm run jest`.

To debug tests, run `npm run jest-debug` and then open `chrome://inspect` in Chrome and open the node inspector client from there.

Code formatting with prettier: `npm run prettier`.

## Building

```sh
# Checkout master branch, update version
git checkout master
# Edit package.json, update `version` field
vim package.json
git add package.json

# Build
NODE_ENV=production npm run build
npm run dev:docs

# Add build files
git add dist/
git add docs/

# Commit and push changes.
git commit -m "Update version to X.Y.Z"
git push origin HEAD

# Tag the new release (same as package.json version), add the description for tag
# Hint: refer PRs with #17 (PR id) to later have links to PRs in github releases
git tag X.Y.Z -a

# Push the tags
git push origin --tags

# Publish to npm with `npm publish`

## 🎩 Hat tips!

Original react emoji picker: [missive/emoji-mart](https://github.com/missive/emoji-mart).
Vue port: [jm-david/emoji-mart-vue](https://github.com/jm-david/emoji-mart-vue)

Powered by [iamcal/emoji-data](https://github.com/iamcal/emoji-data) and inspired by [iamcal/js-emoji](https://github.com/iamcal/js-emoji).<br>
🙌🏼  [Cal Henderson](https://github.com/iamcal).
```
