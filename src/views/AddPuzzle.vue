<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in puzzles" :key="index">{{ item }}</li>
    </ul>
    <form @submit.prevent="submit">
      <input />
      <input type="textarea"/>
      <button type="submit">追加</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'add',
  computed: {
    puzzles() {
      return this.$store.state.umigame.puzzles;
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('umigame/submitPuzzle');
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin-top: 100px;
}
</style>