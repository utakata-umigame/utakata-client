import Vue from "vue";
import Vuex from "vuex";

import socket from "./socket";
import player from "./player";
import umigame from "./modules/umigame";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    socket,
    player,
    umigame
  },
  state: {},
  mutations: {},
  actions: {}
});
