import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Index from '@/pages/index'
import IndexContent from '@/pages/IndexContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          name: 'IndexContent',
          component: IndexContent
        }
      ]
    }
  ]
})
