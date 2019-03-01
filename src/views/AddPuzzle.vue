<template>
  <div class="container">
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Item"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
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
<style lang="scss" scoped></style>
