<template>
  <div class="bg py-12">
    <login-form class="my-12"></login-form>
  </div>
</template>

<script>
import LoginForm from '@/components/login-form.vue'
export default {
  name: "Login",
  components: {
    LoginForm
  }
}
</script>

<style scoped>
  .bg{
    background-image: url("../assets/bg_login.jpg");
    width: 100%;
    height: 92vh;
    background-size: cover;
    background-position: center;
    position: relative;
  }
</style>