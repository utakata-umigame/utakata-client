<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in puzzles" :key="index">{{ item }}</li>
    </ul>
    <button @click="submit">追加</button>
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