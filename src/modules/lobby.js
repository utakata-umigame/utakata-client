import firebase from "firebase";
import db from "../firestore";

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
          senderID: payload.senderID,
          sender: payload.sender,
          content: payload.content,
          date: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(docRef => {
          console.log(docRef.id);
        })
        .catch(error => {
          console.error(error);
        });
    },
    removeLobbyChat(context, payload) {
      db.collection("lobbyChats")
        .doc(payload)
        .delete()
        .then(() => {})
        .catch(error => {
          console.error(error);
        });
    }
  },
  getters: {}
};

export default lobby;
