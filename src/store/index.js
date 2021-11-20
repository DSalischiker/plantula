import Vue from 'vue'
import Vuex from 'vuex'

import user from "./user";
import inventories from "./inventories";
import utils from "./utils";

import { auth } from "../firebase.js";


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    checkAuth({ commit }) {
      auth.onAuthStateChanged(function(user) {
        if (user) {
          commit("user/setUser", user);
        } else {
          commit("user/setUser", null);
        }
      })
    }
  },
  modules: {
    user,
    inventories,
    utils
  }
})

export default store;

//Initial load
store.dispatch("checkAuth");