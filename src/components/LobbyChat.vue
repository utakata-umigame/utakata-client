<template>
  <div class="lobby-chat">
    <div class="messages">
      <div class="box" v-for="item in lobbyChats" :key="item.id">
        <p>
          <strong>{{ item.name }}</strong> {{ item.content }}
        </p>
        <p>
          <small>{{ item.date }}</small>
        </p>
      </div>
    </div>
    <form class="chat-form" @submit.prevent="send">
      <input
        class="chat-input"
        v-model="content"
        placeholder="チャットメッセージ"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  computed: {
    player() {
      return this.$store.getters["player/getPlayer"];
    },
    lobbyChats() {
      return this.$store.getters["socket/lobbyChats"];
    }
  },
  mounted() {
    this.$store.commit("socket/connect");
    this.$store.dispatch("socket/joinRoom", { id: "LobbyChat" });

    this.$store.dispatch("socket/fetchLobby");
  },
  destroyed() {
    this.$store.commit("socket/disconnect");
  },
  methods: {
    send() {
      this.$store.dispatch("socket/sendLobbyChat", {
        name: this.player.name,
        removePass: this.player.removePass,
        content: this.content
      });
      this.content = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.lobby-chat {
  .messages {
    position: fixed;
    left: 0;
    right: 300px;
    top: 50px;
    bottom: 50px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .chat-form {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .chat-input {
    width: 100%;
    box-sizing: border-box;
  }
  .box {
    padding: 10px;
    border-bottom: 1px solid #eeeeee;
    background: #ffffff;
  }
}
</style>
