import { db } from "../firebase";
const state = {
  inventories: []
};

const mutations = {};

const actions = {
  async createInventory({ rootState }, { name, description }) {
    await db
      .collection("inventories")
      .add({
        name,
        description,
        createdAt: Date.now(),
        admin: rootState.user.user.uid
      })
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};