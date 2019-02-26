// The dummy modle to stub jest's CSS imports
// Actually, the following setting should do that:
//
//     "transform": {
//       ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
//     },
//
// But, for some reason it doesn't work and there is still an error:
//
//
//   ● Test suite failed to run
//
//     Jest encountered an unexpected token
//
//     This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.
//
//     By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".
//
//     Here's what you can do:
//      • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
//      • If you need a custom transformation specify a "transform" option in your config.
//      • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.
//
//     You'll find more details and examples of these config options in the docs:
//     https://jestjs.io/docs/en/configuration.html
//
//     Details:
//
//     /home/seb/web/emoji-mart-vue/node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css:1
//     ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){.vue-recycle-scroller{position:relative}.vue-recycle-scroller.direction-vertical:not(.page-mode){overflow-y:auto}.vue-recycle-scroller.direction-horizontal:not(.page-mode){overflow-x:auto}.vue-recycle-scroller.direction-horizontal{display:flex}.vue-recycle-scroller__slot{flex:auto 0 0}.vue-recycle-scroller__item-wrapper{flex:1;box-sizing:border-box;overflow:hidden;position:relative}.vue-recycle-scroller.ready .vue-recycle-scroller__item-view{position:absolute;top:0;left:0;will-change:transform}.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper{width:100%}.vue-recycle-scroller.direction-horizontal .vue-recycle-scroller__item-wrapper{height:100%}.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view{width:100%}.vue-recycle-scroller.ready.direction-horizontal .vue-recycle-scrolle
//
//     SyntaxError: Unexpected token .
//
//       91 | 
//       92 | import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
//     > 93 | import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
