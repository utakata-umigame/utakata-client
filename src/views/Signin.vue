<template>
  <v-container fluid>
    <form>
      <v-text-field v-model="email" label="メールアドレス" required />
      <v-text-field
        v-model="password"
        type="password"
        label="パスワード"
        required
      />
      <v-btn
        color="primary"
        @click="
          $store.dispatch('user/signin', {
            email: email,
            password: password
          })
        "
      >
        ログイン
      </v-btn>
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
