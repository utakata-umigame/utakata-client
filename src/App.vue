<template>
  <div id="app">
    <div id="nav">
      <img width="32" height="32" src="./assets/icon.svg">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
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
    height: 100vh;
    .multiline {
      white-space: pre-wrap;
    }
  }
  #nav {
    position: fixed;
    height: 49px;
    width: 100%;
    border-bottom: rgba(173, 146, 88, 1) solid 1px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
