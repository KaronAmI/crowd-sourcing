import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import register from '@/components/login/register'
import login from '@/components/login/login'
import device from '@/components/device/index'
import manageProjects from '@/components/project/manage'
import publishProjects from '@/components/project/publish'
import projectDetail from '@/components/project/detail'

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
          path: 'projects',
          component: publishProjects
        },
        {
          path: 'project/detail/:id',
          component: projectDetail
        },
        {
          path: 'manageProjects',
          component: manageProjects
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
