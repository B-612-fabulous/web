import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Index from '@/components/index/Index'
import Register from '@/components/register/Register'
import Indextable from '@/components/indextable/Indextable'
import AddCommunityVegetables from '@/components/index/AddCommunityVegetables'
import EditUser from '@/components/indextable/EditUser'
// 组件模块

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/indextable',
      name: 'Indextable',
      component: Indextable
    },
    {
      path: '/add',
      name: 'AddCommunityVegetables',
      component: AddCommunityVegetables
    },
    {
      path: '/EditUser',
      name: 'EditUser',
      component: EditUser
    }

  ]
})
