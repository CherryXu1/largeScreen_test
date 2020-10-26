import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/views/page/test'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/',
        name: 'test',
        component: test
    }]
})