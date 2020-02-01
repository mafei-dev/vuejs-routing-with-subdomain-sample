import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminDashboard from "../views/AdminDashboard";
import NotFound from "../views/NotFound";

Vue.use(VueRouter)

const routes = [

    {
        path: '/admin',
        name: 'AdminDashboard',
        component: AdminDashboard
    },

    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
