<template>
  <div id="app">
    <div id="nav">
      <img class="icon" width="32" height="32" src="./assets/icon.svg">
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
    input {
      padding: 10px;
      border: 1px solid #eeeeee;
      font-size: 1rem;
      box-sizing: border-box;
    }
    textarea {
      padding: 10px;
      border: 1px solid #eeeeee;
      font-size: 1.2rem;
      display: block;
      box-sizing: border-box;
    }
    button {
      background: #ffffff;
      border: rgba(173, 146, 88, 1) solid 1px;
      padding: 10px;
      font-size: 1rem;
      color: rgba(173, 146, 88, 1);
      box-sizing: border-box;
    }
    button:hover {
      color: #ffffff;
      background: rgba(173, 146, 88, 1);
      box-sizing: border-box;
    }
  }
  #nav {
    position: fixed;
    background: #ffffff;
    top: 0;
    height: 50px;
    box-sizing: border-box;
    width: 100%;
    border-bottom: rgba(173, 146, 88, 1) solid 1px;
    .icon {
      margin-left: 5px;
      margin-top: 9px;
    }
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
