import Vue from 'vue'
import VueRouter from 'vue-router'


import TriviaApp from './components/TriviaApp.vue'
import Chuck from './components/Chuck'


Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        { path: '/', component: TriviaApp},
        { path: '/chuck', component: Chuck, name: 'chuck'},
        { path: '/trivias', component: TriviaApp }
    ]
})