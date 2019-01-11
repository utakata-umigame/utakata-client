<template>
    <form @submit.prevent="confirm">
        <input v-model="user.name" placeholder="ハンドルネーム"><br>
        <input v-model="user.removePass" placeholder="削除用パス">
        <p>削除用パスは暗号化されませんので、知られても大丈夫な文字列をご使用ください。</p>
        <input type="submit" value="設定">
    </form>
</template>
<script>
export default {
  computed: {
    player() {
      return this.$store.getters["player/getPlayer"];
    }
  },
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    this.user = this.player;
  },
  methods: {
    confirm() {
      this.$store.commit("player/setName", this.user.name);
      this.$store.commit("player/setRemovePass", this.user.removePass);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
