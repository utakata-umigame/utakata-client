<template>
  <div class="home">
    <div class="chat">
      <lobby-chat />
    </div>
    <div class="control">
      <enter-form />
      <user-form />
    </div>
  </div>
</template>

<script>
import EnterForm from "@/components/EnterForm.vue";
import UserForm from "@/components/UserForm.vue";
import LobbyChat from "@/components/LobbyChat.vue";
export default {
  name: "home",
  components: {
    EnterForm,
    UserForm,
    LobbyChat
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  .chat {
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 300px;
    min-width: 200px;
    background: #fafafa;
  }
  .control {
    position: fixed;
    width: 300px;
    top: 50px;
    right: 0;
    height: 100vh;
    bottom: 0;
  }
}
</style>
