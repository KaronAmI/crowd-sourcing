import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import register from '@/components/login/register'
import login from '@/components/login/login'
import device from '@/components/device/index'
import project from '@/components/project/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/cs/',
      component: index,
      children: [
        {
          path: 'device',
          component: device
        },
        {
          path: 'project',
          component: project
        }
      ]
    },
    {
      path: '/cs/register',
      name: 'register',
      component: register
    },
    {
      path: '/cs/login',
      name: 'login',
      component: login
    }
  ]
})
