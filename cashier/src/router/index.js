import Vue from 'vue'
import VueRouter from 'vue-router'
import CashierDashboard from "../views/CashierDashboard";
import NotFound from "../views/NotFound";

Vue.use(VueRouter)

const routes = [
    {
        path: '/cashier',
        name: 'dashboard',
        component: CashierDashboard
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
