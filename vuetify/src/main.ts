import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import firebase from 'firebase'
import App from './App.vue'
import router from './plugins/router'
import vuetify from './plugins/vuetify'
import {firebaseConfig} from '@/env'

Vue.config.productionTip = false
console.log(firebaseConfig)

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
