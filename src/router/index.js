import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/user/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/cs/register',
      name: 'register',
      component: register
    }
  ]
})
