import db from '../firebase';

db.collection('puzzles').onSnapshot((querySnapshot) => {
  umigame.state.puzzles = []
  querySnapshot.forEach((doc) => {
    console.log(doc);
    umigame.state.puzzles.push({
      id: doc.id,
      data: doc.data()
    });
  })
})
const umigame = {
  namespaced: true,
  state: {
    puzzles: []
  },
  mutations: {

  },
  actions: {
    submitPuzzle() {
      db.collection('puzzles').add({
        title: 'タイトル',
        content: '問題文',
        trueAns: '答え'
      })
      .then((docRef) => {
        console.log(docRef.id);
      })
      .catch((error) => {
        console.error(error);
      });
    },
    getPuzzle() {
      db.collection('puzzles').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc)
        });
      })
    }
  },
  getters: {

  }
};

export default umigame;
