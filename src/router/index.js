import Vue from 'vue'
import Router from 'vue-router'

import Body from '@/components/Body'
import Home from '@/components/pages/Home'
import ComingSoon from '@/components/pages/ComingSoon'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Body,
      children: [
        // { path: '/', component: Home, name: 'home'},
        { path: '/comingsoon', component: ComingSoon, name: 'comingsoon', alias: '/' },
      ]
    }
  ]
})
