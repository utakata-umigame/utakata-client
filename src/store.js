import Vue from "vue";
import Vuex from "vuex";

import player from "./player";
import umigame from "./modules/umigame";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    player,
    umigame
  },
  state: {},
  mutations: {},
  actions: {}
});
