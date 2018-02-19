import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

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
        	path: '/poll',
        	name: 'Poll',
        	component: Poll
        },
        {
        	path: 'Account',
        	name: 'Account',
        	component: Account
        }

    ]
})



// Header:
// nav bar 1
// nav bar 2
// Home: http://votingapp.herokuapp.com 
// Signup
// Login
// User / My polls
// New Poll
// Publicly accesible poll
// Settings / Change password / User settings / delete