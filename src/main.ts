import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBw9CnxO9OqUYWLpwsF1g9hCEdf8jPT_ck',
  authDomain: 'twipic-autocollect.firebaseapp.com',
  databaseURL: 'https://twipic-autocollect.firebaseio.com',
  projectId: 'twipic-autocollect',
  storageBucket: 'twipic-autocollect.appspot.com',
  messagingSenderId: '1022635928323',
}
firebase.initializeApp(config)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
