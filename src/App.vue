<template>
  <v-app id="app">
    <v-card flat height="100%">
      <v-toolbar color="white">
        <v-toolbar-side-icon @click="drawer = !drawer" />
        <v-avatar size="32"> <img src="./assets/icon.svg" /> </v-avatar>
        <v-toolbar-title class="brand">うたかたウミガメ</v-toolbar-title>
        <v-spacer />
        <form @submit.prevent="$router.push(`/puzzle/show/${id}`)">
          <v-text-field
            prepend-icon="question_answer"
            label="IDを入力して参加"
            single-line
            v-model="id"
          >
          </v-text-field>
        </form>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" absolute>
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile>
              <v-list-tile-action>
                <v-btn icon @click="drawer = !drawer">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-list class="pt-0" dense><v-divider /></v-list>
      </v-navigation-drawer>
      <div class="headline pa-2"><router-view /></div>
      <v-bottom-nav :value="true" fixed color="primary" dark>
        <v-btn color="teal" value="recent" @click="$router.push('/')">
          <span>ホーム</span>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn color="teal" value="favorites" @click="$router.push('/add')">
          <span>出題</span>
          <v-icon>question_answer</v-icon>
        </v-btn>
        <v-btn color="teal" value="nearby" @click="$router.push('/mypage')">
          <span>マイページ</span>
          <v-icon>face</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      drawer: true
    };
  },
  mounted() {
    this.$store.dispatch("user/getCurrent");
  },
  watch: {
    $route() {
      this.$store.dispatch("user/getCurrent");
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP|Noto+Serif+JP");
body {
  margin: 0;
  #app {
    font-family: "Noto Sans JP", "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    .multiline {
      white-space: pre-wrap;
    }
    .brand {
      font-family: "Noto Serif JP", serif;
      color: rgba(173, 146, 88, 1);
    }
  }
}
</style>
