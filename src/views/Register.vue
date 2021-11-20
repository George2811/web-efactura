<template>

  <div class="global">
    <div class="bg py-12"></div>

    <div class="form1 py-12">
      <register-form @registerFailed="errorLogin"></register-form>
    </div>
    <div class="alert" v-if="registerFailed">
      <v-alert
          border="top"
          dense
          elevation="1"
          prominent
          type="error"
      >El usuario ya existe, intenta con otro.</v-alert>
    </div>
  </div>

</template>

<script>
import RegisterForm from '../components/register-form.vue'

export default {
  name: "Register",
  components: {
    RegisterForm,
  },
  data(){
    return {
      registerFailed: false
    }
  },
  methods:{
    errorLogin(){
      this.registerFailed = !this.registerFailed;
      window.setTimeout(this.otherLogin, 3000);
    },
    otherLogin(){
      this.registerFailed = !this.registerFailed;
    }
  }
}
</script>

<style scoped>

.global{
  position: relative;
}

.bg{
  background-image: url("../assets/bg_register.jpg");
  width: 100%;
  height: 91vh;
  background-size: cover;
  background-position: center;
  position: absolute;
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
  margin-top: 1rem;
}

</style>