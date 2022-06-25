//import { db } from "../firebase";
const state = {
  inventories: []
};

const mutations = {
  setInventories(state, inventories) {
    state.inventories = inventories;
  }
};

const actions = {
  /* async createInventory({ rootState }, { name, description }) {
    await db
      .collection("inventories")
      .add({
        name,
        description,
        createdAt: Date.now(),
        adminUid: rootState.user.user.uid,
        adminName: rootState.user.user.displayName
      })
  },
  async getInventories({ commit }) {
    const query = db
      .collection("inventories")
      .orderBy("createdAt", "desc");

    query.onSnapshot(querySnapshot => {
      const inventories = [];
      commit("setLoading", true, { root: true });
      querySnapshot.forEach(doc => {
        let inventory = doc.data();
        inventory.id = doc.id;
        inventories.push(inventory);
      });
      commit("setLoading", false, { root: true });
      commit("setInventories", inventories);
    });
  } */
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};