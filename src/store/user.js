//import { auth } from "../firebase.js";
const state = {
  user: null,
}

const getters = {

}

const mutations = {
  setUser(state, user) {
    state.user = user;
  }
}

const actions = {
  /* getCurrentUser() {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(
        user => {
          unsubscribe();
          resolve(user);
        },
        () => {
          reject();
        }
      );
    });
  },
  async updateProfile({ commit }, { username, email, password, phone, neighbourhood }) {
    const user = auth.currentUser;
    if (username) {
      await user.updateProfile({
        displayName: username
      });
    }

    if (email) {
      await user.updateEmail(email);
    }

    if (password) {
      await user.updatePassword(password);
    }

    if (phone) {
      await user.updatePhone(phone);
    }

    if (neighbourhood) {
      await user.updateNeighbourhood(neighbourhood);
    }

    commit("setUser", user);
  },
  async doLogin({ commit }, {email, password}) {
    await auth.signInWithEmailAndPassword(email, password);
    commit("setUser", auth.currentUser);
  },
  async doRegister({ commit }, {username, email, password, phone, neighbourhood}) {
    await auth.createUserWithEmailAndPassword(email, password);
    const user = auth.currentUser;
    await user.updateProfile({
      displayName: username,
      phone: phone,
      neighbourhood: neighbourhood
    });
    commit("setUser", user);
  },
  async doLogout({ commit }) {
    await auth.signOut();
    commit("setUser", null);
  },
  async doReset(context, email) {
    await auth.sendPasswordResetEmail(email);
  } */
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};