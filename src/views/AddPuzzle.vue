<template>
  <div class="container">
    <form v-if="!id" @submit.prevent="submit">
      <input v-model="title" /> <textarea v-model="content" />
      <button type="submit">追加</button>
    </form>
    <div v-else>
      <router-link :to="{ name: 'puzzle', params: { id: id } }">
        {{ id }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "add",
  data() {
    return {
      title: "",
      content: ""
    };
  },
  mounted() {
    this.$store.commit("umigame/setID", "");
  },
  computed: {
    id() {
      return this.$store.state.umigame.currentID;
    }
  },
  methods: {
    async submit() {
      await this.$store.dispatch("umigame/submitPuzzle", {
        title: this.title,
        content: this.content
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin-top: 100px;
}
</style>
