import Vue from "vue";
import Vuex from "vuex";

import socket from "./socket";
import player from "./player";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    socket,
    player
  },
  state: {},
  mutations: {},
  actions: {}
});
