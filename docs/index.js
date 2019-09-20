import Vue from 'vue'
import App from './app'

import 'quasar-framework/dist/umd/quasar.mat.css'
import Quasar from 'quasar-framework/dist/quasar.mat.esm'
Vue.use(Quasar)

new Vue({
	el: '#app',
	render: (h) => h(App),
})
