import db from "../firebase";

const lobby = {
  namespaced: true,
  state: {
    chats: []
  },
  mutations: {
    setLobbyChats(state, payload) {
      state.chats = payload;
    }
  },
  actions: {
    sendLobbyChat(context, payload) {
      db.collection("lobbyChats")
        .add({
          sender: payload.sender,
          content: payload.content,
          date: new Date().toString()
        })
        .then(docRef => {
          console.log(docRef.id);
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  getters: {}
};

export default lobby;
