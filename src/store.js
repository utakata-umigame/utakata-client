import Vue from "vue";
import Vuex from "vuex";

import umigame from "./modules/umigame";
import lobby from "./modules/lobby";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    umigame,
    lobby
  },
  state: {},
  mutations: {},
  actions: {}
});
