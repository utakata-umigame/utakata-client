<template>
  <div class="container">
    <h1>{{ current.title }}</h1>
    <p>{{ current.content }}</p>
    <p>{{ current.trueAns }}</p>
    <form @submit.prevent="sendQuestion">
      <v-text-field
        v-model="question"
        :error-messages="nameErrors"
        label="質問文"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-btn>質問</v-btn>
    </form>
    <v-list two-line>
      <template v-for="(item, index) in questions">
        <v-list-tile :key="item.sender" avatar ripple @click="toggle(index)">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.sender }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.content }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider v-if="index + 1 < questions.length" :key="index"></v-divider>
      </template>
    </v-list>
  </div>
</template>
<script>
import db from "@/firebase";
export default {
  data() {
    return {
      question: ""
    };
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
