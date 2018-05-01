import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import index from '@/components/index'
import register from '@/components/login/register'
import login from '@/components/login/login'
import device from '@/components/device/index'
import manageProjects from '@/components/project/manage'
import publishProjects from '@/components/project/publish'
import projectDetail from '@/components/project/detail'
import applications from '@/components/application/index'

Vue.use(Router)

const router = new Router({
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
          path: 'projects/:page',
          component: publishProjects
        },
        {
          path: 'project/detail/:id',
          component: projectDetail
        },
        {
          path: 'manageProjects',
          component: manageProjects
        },
        {
          path: 'myApplications',
          component: applications
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

router.beforeEach((to, from, next) => {
  const id = sessionStorage.getItem('cs-user-id')
  const email = sessionStorage.getItem('cs-user-email')
  const msg = sessionStorage.getItem('cs-user-msg')
  const type = sessionStorage.getItem('cs-user-type')
  if (to.path === '/cs/login' || to.path === '/cs/register') {
    sessionStorage.setItem('cs-user-id', null)
    sessionStorage.setItem('cs-user-email', null)
    sessionStorage.setItem('cs-user-msg', null)
    sessionStorage.setItem('cs-user-type', null)
    next()
  } else {
    if (id) {
      const login = {}
      login.id = id
      login.email = email
      login.msg = msg
      login.type = type
      store.dispatch('setState', {type: 'login', data: login})
      next()
    } else {
      next('/cs/login')
    }
  }
})

export default router
