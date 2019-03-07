<template>
  <v-container fluid>
    <p>{{ user || "ゲスト" }}</p>
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
          $store.dispatch('user/signup', {
            email: email,
            password: password
          })
        "
      >
        登録
      </v-btn>
    </form>
    <form>
      <v-text-field v-model="username" label="ユーザー名" required />
      <v-btn
        color="primary"
        @click="$store.dispatch('user/updateProfile', { name: username })"
      >
        ユーザー名変更
      </v-btn>
    </form>
  </v-container>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user.name;
    }
  },
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  }
};
</script>
