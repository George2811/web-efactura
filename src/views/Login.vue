<template>

  <div class="global">
    <div class="bg py-12"></div>
    <div class="form1">
      <login-form class="my-12" @loginFailed="errorLogin"></login-form>
    </div>
    <div class="alert" v-if="loginFailed">
      <v-alert
          border="top"
          dense
          elevation="1"
          prominent
          type="error"
      >No se pudo iniciar sesión, credenciales inválidas</v-alert>
    </div>

  </div>

</template>

<script>
import LoginForm from '@/components/login-form.vue'

export default {
  name: "Login",
  data(){
    return {
      loginFailed: false
    }
  },
  components: {
    LoginForm
  },
  methods:{
    errorLogin(){
      this.loginFailed = !this.loginFailed;
      window.setTimeout(this.otherLogin, 3000);
    },
    otherLogin(){
      this.loginFailed = !this.loginFailed;
    }
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
    height: 92vh;
    background-size: cover;
    background-position: center;
    position: absolute;
    margin-top: -4%; /*TRUQUITO PARA QUITAR EL SCROLL INCOMODO*/
    filter: blur(2px);
  }
  .form1{
    margin: 0 auto;
    position: relative;
    top: 20%
  }
  .alert{
    display: flex;
    justify-content: center;
    margin-top: 6rem;
  }

</style>