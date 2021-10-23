<template>
  <div class="global">

    <div class="bg py-12">

    </div>
    <div class="form1">
      <login-form class="my-12"></login-form>
    </div>
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
  .global{
    position: relative;
  }
  .bg{
    background-image: url("../assets/bg_login.jpg");
    width: 100%;
    height: 89vh;
    background-size: cover;
    background-position: center;
    position: absolute;
    margin-top: -5%; /*TRUQUITO PARA QUITAR EL SCROLL INCOMODO*/
    filter: blur(4px);
  }
  .form1{
    margin: 0 auto;
    position: relative;
    top: 20%
  }

</style>