<template>
  <div id="app">
    <v-toolbar color="primary">
      <v-toolbar-title>うたかたウミガメ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon> <v-icon>refresh</v-icon> </v-btn>
    </v-toolbar>
    <v-card flat>
      <div class="headline pa-5"><router-view /></div>
      <v-bottom-nav :value="true" fixed color="primary">
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
          <span>使い方</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </div>
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
