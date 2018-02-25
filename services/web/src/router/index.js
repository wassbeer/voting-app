import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Poll from '@/components/Poll';
import CreatePoll from '@/components/CreatePoll';
import PollResult from '@/components/PollResult';
import MyPolls from '@/components/MyPolls';
import Account from '@/components/Account';

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
        // test route /helloworld
        {
            path: '/ping',
            name: 'Pong',
            component: HelloWorld,
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
            path: '/poll',
            name: 'Poll',
            component: Poll,
        },
        {
            path: '/pollresult',
            name: 'PollResult',
            component: PollResult,
        },
        {
            path: '/create/poll',
            name: 'CreatePoll',
            component: CreatePoll,
        },
        {
            path: '/user/:id',
            name: 'MyPolls',
            component: MyPolls,
        },
        {
            path: '/Account',
            name: 'Account',
            component: Account,
        },

    ],
});
