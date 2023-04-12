import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home.notlogin',
        component: () => import('@/views/HomeLanding.vue')
    },
    {
        path: '/main',
        name: 'home.logined',
        component: () => import('@/views/Main.vue')
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
