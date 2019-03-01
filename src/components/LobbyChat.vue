<template>
  <div class="container">
    <form class="chat-form" @submit.prevent="send">
      <v-text-field label="チャットメッセージ" v-model="content" required>
      </v-text-field>
    </form>
    <v-list>
      <template v-for="(item, index) in lobbyChats">
        <v-list-tile :key="index" avatar @click="() => {}">
          <v-list-tile-content>
            <v-list-tile-title v-html="item.sender"></v-list-tile-title>
            <v-list-tile-sub-title
              v-html="item.content"
            ></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <!--<div class="messages">
      <div class="box" v-for="item in lobbyChats" :key="item.id">
        <p>
          <strong>{{ item.sender }}</strong> {{ item.content }}
        </p>
        <p>
          <small>{{ item.date }}</small>
        </p>
      </div>
    </div>-->
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
<style lang="scss" scoped></style>
