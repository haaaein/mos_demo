import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/recommend',
        name: 'recommend',
        component: () => import('../views/Recommend.vue')
    },
    {
        path: '/segment',
        name: 'segment',
        component: () => import('../views/Segment'),
    },
    {
        path: '/',
        name: 'main',
        component: () => import('../views/Main'),
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router