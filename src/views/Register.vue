<template>
  <div class="bg py-12">
    <register-form class="py-12"></register-form>
  </div>
</template>

<script>

import RegisterForm from '../components/register-form.vue'
export default {
  name: "Register",
  components: {
    RegisterForm,
  }
}
</script>

<style scoped>
.bg{
  background-image: url("../assets/table-office-chairs-glass-window-wallpaper-preview.jpg");
  width: 100%;
  height: 89vh;
  background-size: cover;
  background-position: center;
  position: relative;
}
</style>