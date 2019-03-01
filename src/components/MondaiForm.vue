<template>
  <form @submit.prevent="submit">
    <textarea v-model="content" placeholder="問題文" />
    <input type="submit" value="出題" />
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
