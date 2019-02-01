import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome , faSearch, faHeartbeat, faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faSearch, faHeartbeat , faHeart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)

import Home from '@/components/Home.vue'
import Search from '@/components/Search.vue'
import Favorite from '@/components/Favorite.vue'

const router = new VueRouter({
  routes :[
    { name: 'home', path: '/', component: Home },
    { name: 'search', path: '/search', component: Search },
    { name: 'favorite', path: '/favorites', component: Favorite }
  ]
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
