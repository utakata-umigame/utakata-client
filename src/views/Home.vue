<template>
  <div class="home">
    <div class="chat"><lobby-chat /></div>
  </div>
</template>

<script>
import LobbyChat from "@/components/LobbyChat.vue";
export default {
  name: "home",
  components: {
    LobbyChat
  }
};
</script>
<style lang="scss" scoped></style>
