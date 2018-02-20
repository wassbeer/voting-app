import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Poll from '@/components/Poll'
import User from '@/components/User'
import CreatePoll from '@/components/CreatePoll'
import Account from '@/components/Account'

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
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/account',
      name: 'Account',
      component: Account
    }

  ]
})
