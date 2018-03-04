// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import {sync} from 'vuex-router-sync';
import store from '@/store/store';

Vue.config.productionTip = false;

Vue.use(Vuetify)

sync(store, router)

// making sure authed routes are entered only authenticated
// otherwise: redirect to login
router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some((route) => route.meta.requiresAuth),
  authed = store.state.isUserLoggedIn
  if (authRequired && !authed) {
    next('/login')
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

