import Vue from 'vue'
import Vuex from 'vuex'

import user from "./user";
import inventories from "./inventories";
import utils from "./utils";

//import { auth } from "../firebase.js";


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading: true,
  },
  mutations: {
    setLoading(state, loading) {
      state.isLoading = loading;
    }
  },
  actions: {
    /* checkAuth({ dispatch, commit }) {
      auth.onAuthStateChanged(function(user) {
        if (user) {
          commit("user/setUser", user);
          dispatch("inventories/getInventories");
        } else {
          commit("user/setUser", null);
          commit("inventories/setInventories", []);
        }
      })
    } */
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