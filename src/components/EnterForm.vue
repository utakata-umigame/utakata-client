<template>
  <form @submit.prevent="enter">
    <input v-model="room" placeholder="部屋ID" />
    <input type="submit" value="入室" />
  </form>
</template>
<script>
export default {
  data() {
    return {
      room: ""
    };
  },
  methods: {
    enter() {
      this.$router.push("/mondai/" + this.room);
    }
  }
};
</script>
<style lang="scss" scoped></style>
