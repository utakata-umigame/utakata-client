<template>
  <div class="container">
    <form v-if="!id">
      <v-text-field
        v-model="title"
        :error-messages="nameErrors"
        :counter="10"
        label="タイトル"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="content"
        :error-messages="emailErrors"
        label="問題文"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-btn @click="submit">追加</v-btn>
      <v-btn @click="clear">clear</v-btn>
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
<style lang="scss" scoped></style>
