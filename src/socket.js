import * as io from "socket.io-client";
const socket = {
  namespaced: true,
  state: {
    socket: {},
    mondai: {
      sender: "",
      content: ""
    },
    questions: [],
    chats: []
  },
  mutations: {
    connect(state) {
      let host = "";
      if (process.env.NODE_ENV === "production") {
        host = process.env.VUE_APP_SOCKET_HOST;
      } else {
        host = "localhost:5000";
      }
      state.socket = io(host);

      let sock = state.socket;
      sock.on("mondai", data => {
        if (!data) return;
        // console.log(data);
        state.mondai = data;
      });
      sock.on("join", () => {
        // console.log("join", roomId);
      });
      sock.on("disconnect", () => {
        // console.log("disconnect");
      });
      sock.on("refreshMessage", data => {
        if (!data) return;
        state.questions = data;
      });
      sock.on("message", data => {
        if (!data) return;
        state.questions = data;
      });
      sock.on("trueAns", ans => {
        if (!ans) return;
        state.mondai.trueAns = ans;
      });
    },
    emit(state, obj) {
      if (!socket) return;
      state.socket.emit(obj.name, obj.payload);
    }
  },
  actions: {
    joinRoom(context, payload) {
      // console.log("joining", payload);
      context.commit("emit", {
        name: "join",
        payload: payload.id
      });
      context.commit("emit", {
        name: "identifyRoom",
        payload: payload.id
      });
    },
    identify(context, payload) {
      context.commit("emit", {
        name: "identify",
        payload: payload.name
      });
    },
    sendMondai(context, payload) {
      context.commit("emit", {
        name: "mondaiMessage",
        payload: payload
      });
    },
    sendQuestion(context, payload) {
      context.commit("emit", {
        name: "questionMessage",
        payload: payload
      });
    },
    sendAns(context, payload) {
      context.commit("emit", {
        name: "answerMessage",
        payload: payload
      });
    },
    sendTrueAns(context, payload) {
      context.commit("emit", {
        name: "trueAnsMessage",
        payload: payload
      });
    },
    refresh(context) {
      context.commit("emit", {
        name: "refresh",
        payload: null
      });
    }
  },
  getters: {}
};

export default socket;
