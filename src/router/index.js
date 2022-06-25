import Vue from 'vue'
import VueRouter from 'vue-router'

//import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/InventoriesView.vue')
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import(/* webpackChunkName: "about" */ '../views/AuthView.vue')
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/UserProfile.vue')
  },
  {
    path: '/inventory',
    name: 'inventory',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Inventory.vue')
  },
  {
    path: "/create",
    name: "createInventory",
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateInventory.vue')
  },
  {
    path: "/inventory/add",
    name: "addPlant",
    meta: {
      requiresAuth: true
    },
    component: () => import (/* webpackChunkName: "about" */ '../views/AddPlant.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

/* router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  //Requires auth & no user
  if (requiresAuth && !(await store.dispatch("user/getCurrentUser"))) {
    next({name: "auth"});

    //Not requires auth and user (auth)
  } else if (!requiresAuth && (await store.dispatch("user/getCurrentUser"))) {
    next({ name: "home" });
  } else {
    //Anything else
    next();
  }
}); */

export default router;
