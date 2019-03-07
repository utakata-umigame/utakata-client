<template>
  <v-container fluid>
    <div id="firebaseui-auth-container" />
    <form
      @submit.prevent="
        $store.dispatch('user/signin', {
          email: email,
          password: password
        })
      "
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
  }
};
</script>
