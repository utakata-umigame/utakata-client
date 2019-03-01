<template>
  <form @submit.prevent="submit">
    <input v-model="content" placeholder="質問文" />
    <input type="submit" value="質問" />
  </form>
</template>
<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.content);
      this.content = "";
    }
  }
};
</script>
<style lang="scss" scoped></style>
