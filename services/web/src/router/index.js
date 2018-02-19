import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

/*

| Route           | Access       |
| --------------  | :----------: |
| /ping           | public       |
| /home           | Public       |
| /register       | Public       | 
| / login         | Public       |
| /poll           | Public       |
| /user/:id       | Authenticated|
| /create/poll    | Authenticated|
| /account        | Authenticated|

*/

export default new Router({
    routes: [
        // test route /helloworld
        {
            path: '/ping',
            name: 'Pong',
            component: Pong
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/poll',
            name: 'Poll',
            component: Poll
        },
        {
            path: '/user/:id',
            name: 'User',
            component: User
        },
        {
            path: '/create/poll',
            name: 'CreatePoll',
            component: CreatePoll
        },
        {
            path: 'Account',
            name: 'Account',
            component: Account
        }

    ]
})