import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Index from '@/components/index/Index'
import Register from '@/components/register/Register'
import ForgetPassword from '@/components/register/ForgetPassword'
import Indextable from '@/components/indextable/Indextable'
import AddCommunityVegetables from '@/components/index/AddCommunityVegetables'
import EditUser from '@/components/indextable/EditUser'
import ShowAnnouncement from '@/components/index/ShowAnnouncement'
import EditAnnouncement from '@/components/indextable/EditAnnouncement'
import ShowCommunityVegtables from '@/components/index/ShowCommunityVegtables'
import ShowIdleZone from '@/components/index/ShowIdleZone'
import AddIdleZone from '@/components/index/AddIdleZone'
import HolidayTravel from '@/components/index/HolidayTravel'
import EditHousekeepingServices from '@/components/indextable/EditHousekeepingServices'
import EditIdleZone from '@/components/indextable/EditIdleZone'
import ShowTravel from '@/components/index/ShowTravel'
import ShowHouse from '@/components/index/ShowHouse'
import HomePage from '@/components/index/HomePage'
import Test from '@/components/indextable/Test'
// 组件模块

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
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
      path: '/ForgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword
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
    },
    {
      path: '/ShowAnnouncement',
      name: 'ShowAnnouncement',
      component: ShowAnnouncement
    },
    {
      path: '/EditAnnouncement',
      name: 'EditAnnouncement',
      component: EditAnnouncement
    },
    {
      path: '/ShowCommunityVegtables',
      name: 'ShowCommunityVegtables',
      component: ShowCommunityVegtables
    },
    {
      path: '/ShowIdleZone',
      name: 'ShowIdleZone',
      component: ShowIdleZone
    },
    {
      path: '/ShowTravel',
      name: 'ShowTravel',
      component: ShowTravel
    },

    {
      path: '/AddIdleZone',
      name: 'AddIdleZone',
      component: AddIdleZone
    },
    {
      path: '/HolidayTravel',
      name: 'HolidayTravel',
      component: HolidayTravel
    },
    {
      path: '/EditHousekeepingServices',
      name: 'EditHousekeepingServices',
      component: EditHousekeepingServices
    },
    {
      path: '/EditIdleZone',
      name: 'EditIdleZone',
      component: EditIdleZone
    },
    {
      path: '/ShowHouse',
      name: 'ShowHouse',
      component: ShowHouse
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    }

  ]
})
