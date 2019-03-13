<template>
  <v-container fluid>
    <form class="chat-form" @submit.prevent="send">
      <v-text-field label="チャットメッセージ" v-model="content" required>
      </v-text-field>
    </form>
    <v-list>
      <template v-for="(item, index) in lobbyChats">
        <v-list-tile :key="item.id" avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.data.sender"></v-list-tile-title>
            <v-list-tile-sub-title
              v-html="item.data.content"
            ></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action v-if="item.data.senderID === userID">
            <v-btn
              icon
              ripple
              @click="$store.dispatch('lobby/removeLobbyChat', item.id)"
              ><v-icon color="grey">delete</v-icon></v-btn
            >
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-if="index + 1 < lobbyChats.length" :key="index">
        </v-divider>
      </template>
    </v-list>
  </v-container>
</template>

<script>
import db from "@/firestore";
export default {
  data() {
    return {
      content: ""
    };
  },
  computed: {
    userID() {
      return this.$store.state.user.id;
    },
    lobbyChats() {
      return this.$store.state.lobby.chats;
    }
  },
  mounted() {
    db.collection("lobbyChats").orderBy("date").onSnapshot(querySnapshot => {
      let newList = [];
      querySnapshot.forEach(doc => {
        newList.push({
          id: doc.id,
          data: doc.data()
        });
      });
      this.$store.commit("lobby/setLobbyChats", newList);
    });
  },
  methods: {
    send() {
      const id = this.$store.state.user.id;
      const name = this.$store.state.user.name;
      if (!id) return;
      this.$store.dispatch("lobby/sendLobbyChat", {
        senderID: id,
        sender: name,
        content: this.content
      });
      this.content = "";
    }
  }
};
</script>
<style lang="scss" scoped></style>
