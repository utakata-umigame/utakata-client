<template>
  <v-container fluid py-5>
    <v-layout column justify-center align-center>
      <h1 class="display-1">{{ current.title }}</h1>
      <v-flex xs12>
        <v-card class="pa-5" color="grey lighten-3">
          <p class="headline">{{ current.content }}</p>
        </v-card>
      </v-flex>
      <p>{{ current.trueAns }}</p>
    </v-layout>
    <form @submit.prevent="sendQuestion">
      <v-text-field v-model="question" label="質問文" required></v-text-field>
      <v-btn>質問</v-btn>
    </form>
    <v-list two-line>
      <template v-for="(item, index) in questions">
        <v-list-tile :key="item.sender" avatar ripple @click="() => {}">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.sender }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.content }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider v-if="index + 1 < questions.length" :key="index"></v-divider>
      </template>
    </v-list>
  </v-container>
</template>
<script>
import db from "@/firestore";
export default {
  data() {
    return {
      question: ""
    };
  },
  watch: {
    $route() {
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
    }
  },
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
        content: this.question
      });
      this.question = "";
    }
  }
};
</script>
<style lang="scss" scoped></style>
