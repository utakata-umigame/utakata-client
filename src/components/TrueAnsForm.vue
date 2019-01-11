<template>
    <form @submit.prevent="submit">
        <textarea v-model="content" placeholder="解説" />
        <input type="submit" value="解説を出す">
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
<style lang="scss" scoped>
</style>
