import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import json from './data/events.json'

Vue.use(router)

Vue.config.productionTip = false

new Vue({
  router,
  data:() => ({
    events: json.events
  }),
  
  store,
  render: h => h(App)
}).$mount('#app')
