import {createRouter, createWebHistory} from "vue-router";
import type {App} from 'vue'
import {setupLayouts} from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages';
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

const layoutRoutes = setupLayouts(generatedRoutes);
const specialRoutes = [
    {
        path: '/',
        redirect: '/amazon/home',
        meta: {
            title: 'home',
        },
    }
]

let routes = [...specialRoutes, ...layoutRoutes]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    nProgress.start()

    if (to.meta.title) {
        document.title = `${to.meta.title}`;
    }
    next()
})

router.afterEach(() => {
    nProgress.done(true)
})
const setupRouter = (app: App<Element>) => {
    app.use(router)
}

export {
    setupRouter,
    router
}