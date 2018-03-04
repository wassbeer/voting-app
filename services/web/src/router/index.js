import Vue from 'vue';
import Router from 'vue-router';
import Pong from '@/components/Pong';
import Home from '@/components/Home';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Poll from '@/components/Poll';
import CreatePoll from '@/components/CreatePoll';
import PollResult from '@/components/PollResult';
import MyPolls from '@/components/MyPolls';
import Account from '@/components/Account';
import AuthService from '@/services/AuthService';
import Store from '@/store/store';

Vue.use(Router);

/*

| Route           | Access       |
| --------------  | :----------: |
| /ping           | public       |
| /home           | Public       |
| /register       | Public       |
| / login         | Public       |
| /poll           | Public       |
| /poll/result    | Public       |
| /user/:id       | Authenticated|
| /create/poll    | Authenticated|
| /account        | Authenticated|

*/

export default new Router({
    routes: [
        {
            path: '/ping',
            name: 'Pong',
            component: Pong,
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/poll/:id',
            name: 'Poll',
            component: Poll,
        },
        {
            path: '/pollresult',
            name: 'PollResult',
            component: PollResult,
        },

    // *** authenticated routes *** //

        {
            path: '/create/poll',
            name: 'CreatePoll',
            component: CreatePoll,
            meta: { requiresAuth: true }
        },
        {
            path: '/mypolls',
            name: 'MyPolls',
            component: MyPolls,
            meta: { requiresAuth: true }

        },
        {
            path: '/account',
            name: 'Account',
            component: Account,
            meta: { requiresAuth: true }
        },

    ],
});
