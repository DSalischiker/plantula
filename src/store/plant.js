import { db } from "../firebase";
const state = {
  plants: []
};

const mutations = {};

const actions = {
  /* async createPlant({ rootState }, { name, description, isPropagable, stage, sunType, sunlight, water, inventory }) {
    await db
      .collection("plants")
      .add({
        name,
        description,
        propagable: isPropagable,
        stage,
        sunType,
        sunlight,
        water,
        inventory,
        createdAt: Date.now(),
        admin: rootState.user.user.uid
      })
  } */
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};