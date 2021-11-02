import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import AuthView from '../views/AuthView.vue';
import UserProfile from '../views/UserProfile.vue';

import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView,
  },
  {
    path: "/profile",
    name: "profile",
    component: UserProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/inventory',
    name: 'Inventory',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Inventory.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  //Requires auth & no user
  if (requiresAuth && !(await store.dispatch("user/getCurrentUser"))) {
    next({name: "auth"});

    //Not requires auth and user (auth)
  } else if (!requiresAuth && (await store.dispatch("user/getCurrentUser"))) {
    next({ name: "Home" });
  } else {
    //Anything else
    next();
  }
});

export default router;
