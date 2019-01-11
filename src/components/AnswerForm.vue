<template>
    <form @submit.prevent="submit">
        <input v-model="content" placeholder="質問への回答">
        <input type="checkbox" v-model="isGood">良い質問
        <input type="checkbox" v-model="isTrueAns">正解
        <input type="submit" value="回答">
    </form>
</template>
<script>
export default {
  props: {
    id: Number
  },
  data() {
    return {
      content: "",
      isGood: false,
      isTrueAns: false
    };
  },
  methods: {
    submit() {
      this.$emit("submit", {
        id: this.id,
        content: this.content,
        isGood: this.isGood,
        isTrueAns: this.isTrueAns
      });
      this.content = "";
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
