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

    // *** authenticated routes *** //

        {
            path: '/create/poll',
            name: 'CreatePoll',
            beforeEnter: (to, from, next) => {
                switch(Store.state.isUserLoggedIn){
                    case true:
                    AuthService.verify(Store.state.token).then((result) => {
                        result.data.success ? next() :
                        console.log('token verification failed')
                    }); 
                    break;
                    default:
                    console.log('you are not logged in')
                }
              },
            component: CreatePoll,
        },
        {
            path: '/user/:id',
            name: 'MyPolls',
            beforeEnter: (to, from, next) => {
                switch(Store.state.isUserLoggedIn){
                    case true:
                    AuthService.verify(Store.state.token).then((result) => {
                        result.data.success ? next() :
                        console.log('token verification failed')
                    }); 
                    break;
                    default:
                    console.log('you are not logged in')
                }
              },
            component: MyPolls,
        },
        {
            path: '/Account',
            name: 'Account',
            beforeEnter: (to, from, next) => {
                switch(Store.state.isUserLoggedIn){
                    case true:
                    AuthService.verify(Store.state.token).then((result) => {
                        result.data.success ? next() :
                        console.log('token verification failed')
                    }); 
                    break;
                    default:
                    console.log('you are not logged in')
                }
              },
            component: Account,
        },

    ],
});
