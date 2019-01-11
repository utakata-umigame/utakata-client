<template>
    <div>
        <div v-if="mondai">
            <p>{{mondai.content}}</p>
        </div>
        <mondai-form @submit="sendMondai"/>
        <div v-for="item in questions" :key="item.id">
            <div>Q{{item.questionNum}} by {{item.sender || "Anonymous"}} :{{item.text}}</div>
            <div v-if="item.answer !== 'waiting'">A{{item.questionNum}} by {{item.answerer || "Anonymous"}}:{{item.answer}}</div>
            <answer-form v-else :id="item.id" @submit="sendAns"/>
            <div>
              <span v-if="item.isGood">(良い質問)</span>
              <span v-if="item.isTrueAns">(正解)</span>
            </div>
        </div>
        <question-form @submit="sendQuestion"/>
        <div>
          <p>{{mondai.trueAns}}</p>
        </div>
        <true-ans-form @submit="sendTrueAns" />
    </div>
</template>
<script>
import MondaiForm from "@/components/MondaiForm";
import QuestionForm from "@/components/QuestionForm";
import AnswerForm from "@/components/AnswerForm";
import TrueAnsForm from "@/components/TrueAnsForm";
export default {
  components: {
    MondaiForm,
    QuestionForm,
    AnswerForm,
    TrueAnsForm
  },
  computed: {
    player() {
      return this.$store.getters["player/getPlayer"];
    },
    mondai() {
      return this.$store.state.socket.mondai;
    },
    questions() {
      return this.$store.state.socket.questions;
    }
  },
  created() {
    this.$store.commit("socket/connect");
    let room = this.$route.params.room;
    this.$store.dispatch("socket/joinRoom", { id: room });
    this.$store.dispatch("socket/identify", { name: this.player.name });
  },
  mounted() {},
  destroyed() {
    this.$store.commit("socket/disconnect");
  },
  methods: {
    leave() {
      this.$store.commit("socket/disconnect");
    },
    join() {
      this.$store.dispatch("socket/refresh");
    },
    sendMondai(txt) {
      this.$store.dispatch("socket/sendMondai", {
        sender: this.player.name,
        content: txt,
        removePass: this.player.removePass,
        created_month: new Date().getMonth() + 1,
        created_date: new Date().getDate()
      });
    },
    sendQuestion(txt) {
      this.$store.dispatch("socket/sendQuestion", {
        name: this.player.name,
        question: txt
      });
    },
    sendAns(obj) {
      this.$store.dispatch("socket/sendAns", {
        id: obj.id,
        answer: obj.content,
        answerer: this.player.name,
        isGood: obj.isGood,
        isTrueAns: obj.isTrueAns
      });
    },
    sendTrueAns(txt) {
      this.$store.dispatch("socket/sendTrueAns", {
        content: txt
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
