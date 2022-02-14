import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from './components/home/AppIndex'
import Login from "@/components/Login";
import Home from "@/components/Home";
import LibraryIndex from "@/components/library/LibraryIndex";


//组件模块

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [

        // 下面都是固定的写法


        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/index',
            name: 'AppIndex',
            component: AppIndex,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/library',
            name: 'Library',
            component: LibraryIndex,
            meta: {
                requireAuth: true
            }
        },
    ]
})
