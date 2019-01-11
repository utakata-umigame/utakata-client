<template>
  <div class="home">
    <enter-form />
    <user-form />
  </div>
</template>

<script>
// @ is an alias to /src
import EnterForm from "@/components/EnterForm.vue";
import UserForm from "@/components/UserForm.vue";
export default {
  name: "home",
  components: {
    EnterForm,
    UserForm
  }
};
</script>
