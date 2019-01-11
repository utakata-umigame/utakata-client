const player = {
  namespaced: true,
  state: {
    name: "",
    removePass: "",
    room: ""
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setRemovePass(state, removePass) {
      state.removePass = removePass;
    },
    setRoom(state, room) {
      state.room = room;
    }
  },
  actions: {},
  getters: {
    getPlayer(state) {
      return {
        name: state.name,
        removePass: state.removePass,
        room: state.room
      };
    }
  }
};
export default player;
