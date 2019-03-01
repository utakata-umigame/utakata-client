import db from "../firebase";

const umigame = {
  namespaced: true,
  state: {
    currentID: "",
    currentPuzzle: {
      title: "",
      content: "",
      trueAns: ""
    },
    questions: []
  },
  mutations: {
    setID(state, id) {
      state.currentID = id;
    },
    setPuzzle(state, payload) {
      state.currentPuzzle = payload;
    },
    setQuestions(state, payload) {
      state.questions = payload;
    }
  },
  actions: {
    async submitPuzzle(context, payload) {
      db.collection("puzzles")
        .add({
          title: payload.title,
          content: payload.content,
          trueAns: ""
        })
        .then(docRef => {
          context.commit("setID", docRef.id);
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetchPuzzle(context, id) {
      context.commit("setID", id);
      db.collection("puzzles")
        .doc(id)
        .get()
        .then(doc => {
          context.commit("setPuzzle", doc.data());
        })
        .catch(error => {
          console.error(error);
        });
    },
    sendQuestion(context, payload) {
      db.collection("puzzles")
        .doc(payload.id)
        .collection("questions")
        .add({
          content: payload.content
        });
    }
  },
  getters: {}
};

export default umigame;
