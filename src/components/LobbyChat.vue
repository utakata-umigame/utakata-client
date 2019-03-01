<template>
  <div class="lobby-chat">
    <div class="messages">
      <div class="box" v-for="item in lobbyChats" :key="item.id">
        <p>
          <strong>{{ item.sender }}</strong> {{ item.content }}
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
import db from "@/firebase";
export default {
  data() {
    return {
      content: ""
    };
  },
  computed: {
    lobbyChats() {
      return this.$store.state.lobby.chats;
    }
  },
  mounted() {
    db.collection("lobbyChats").onSnapshot(querySnapshot => {
      let newList = [];
      querySnapshot.forEach(doc => {
        newList.push(doc.data());
      });
      this.$store.commit("lobby/setLobbyChats", newList);
    });
  },
  methods: {
    send() {
      this.$store.dispatch("lobby/sendLobbyChat", {
        sender: "Anonymous",
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
