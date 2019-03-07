import Vue from "vue";
import Vuex from "vuex";

import umigame from "./modules/umigame";
import lobby from "./modules/lobby";
import user from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    umigame,
    lobby,
    user
  },
  state: {},
  mutations: {},
  actions: {}
});
