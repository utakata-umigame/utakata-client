<template>
  <v-app id="app">
    <v-toolbar color="light">
      <v-toolbar-title>うたかたウミガメ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon> <v-icon>refresh</v-icon> </v-btn>
    </v-toolbar>
    <v-card flat>
      <div class="headline pa-2"><router-view /></div>
      <v-bottom-nav :value="true" fixed color="light">
        <v-btn color="teal" flat value="recent" @click="$router.push('/')">
          <span>ホーム</span>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn
          color="teal"
          flat
          value="favorites"
          @click="$router.push('/add')"
        >
          <span>出題</span>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn color="teal" flat value="nearby">
          <span>設定</span>
          <v-icon>settings</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </v-app>
</template>

<style lang="scss">
body {
  margin: 0;
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    .multiline {
      white-space: pre-wrap;
    }
  }
}
</style>
