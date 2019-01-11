<template>
  <div class="lobby-chat">
      <div class="messages">
          <div class="box" v-for="item in lobbyChats" :key="item.id">
              <h3><strong>{{item.name}}</strong>
              {{item.content}}</h3>
              <p>{{item.date}}</p>
          </div>
      </div>
        <div class="chat-form">
            <input v-model="content" placeholder="チャットメッセージ">
            <button @click="send">送信</button>
        </div>
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
    padding: 10px;
    bottom: 50px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .chat-form {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .box {
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid #dddddd;
    background: #ffffff;
  }
}
</style>
