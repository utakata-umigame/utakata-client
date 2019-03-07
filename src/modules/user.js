const firebase = require("firebase");

const user = {
  namespaced: true,
  state: {
    id: "",
    name: "",
    email: ""
  },
  mutations: {
    setUser(state, payload) {
      state.id = payload.uid;
      state.name = payload.displayName;
      state.email = payload.email;
    }
  },
  actions: {
    getCurrent(context) {
      context.commit("setUser", firebase.auth().currentUser);
    },
    signup(context, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .catch(error => {
          console.error(error);
        });
    },
    signin(context, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .catch(error => {
          console.error(error);
        });
    },
    logout() {
      firebase.auth().signOut();
    },
    updateProfile(context, payload) {
      firebase.auth().currentUser.updateProfile({
        displayName: payload.name
      });
    }
  }
};

export default user;
