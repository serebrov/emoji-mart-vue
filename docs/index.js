import Vue from 'vue'
import App from './app'

// See https://github.com/quasarframework/quasar/issues/1576
// for the information about Quasar integration into existing app.
import 'quasar-framework/dist/umd/quasar.mat.css'
import Quasar from 'quasar-framework/dist/quasar.mat.esm'
Vue.use(Quasar)

new Vue({
	el: '#app',
	render: (h) => h(App),
})
