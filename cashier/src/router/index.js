import Vue from 'vue'
import VueRouter from 'vue-router'
import CashierDashboard from "../views/CashierDashboard";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: CashierDashboard
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
