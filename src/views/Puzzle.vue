<template>
  <div class="puzzle">
    <h1>{{ current.title }}</h1>
    <p>{{ current.content }}</p>
    <p>{{ current.trueAns }}</p>
    <button @click="sendQuestion">送信</button>
    <div v-for="(item, index) in questions" :key="index">
      {{ item.content }}
    </div>
  </div>
</template>
<script>
import db from "@/firebase";
export default {
  mounted() {
    this.$store.dispatch("umigame/fetchPuzzle", this.$route.params.id);
    db.collection("puzzles")
      .doc(this.$route.params.id)
      .collection("questions")
      .onSnapshot(querySnapshot => {
        let newList = [];
        querySnapshot.forEach(doc => {
          newList.push(doc.data());
        });
        this.$store.commit("umigame/setQuestions", newList);
      });
  },
  computed: {
    current() {
      return this.$store.state.umigame.currentPuzzle;
    },
    questions() {
      return this.$store.state.umigame.questions;
    }
  },
  methods: {
    sendQuestion() {
      this.$store.dispatch("umigame/sendQuestion", {
        id: this.$route.params.id,
        content: "a"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.puzzle {
  padding-top: 60px;
}
</style>
