<template>
  <v-container fluid>
    <div id="firebaseui-auth-container" />
    <form
      @submit.prevent="signin"
    >
      <v-text-field v-model="email" label="メールアドレス" required />
      <v-text-field
        v-model="password"
        type="password"
        label="パスワード"
        required
      />
      <v-btn color="primary" type="submit"> ログイン </v-btn>
    </form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    signin() {
      this.$store.dispatch("user/signin", {
        email: this.email,
        password: this.password
      });
      this.$router.push("/mypage");
    }
  }
};
</script>
