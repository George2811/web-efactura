<template>
  <v-card class="mx-auto py-8 primary" dark max-width="394" style="border-radius: 30px">
    <v-card-text class="py-0 mb-6">
      <h1 class="text-h4 text-center white--text">
        Iniciar Sesión
      </h1>
    </v-card-text>

    <v-form v-model="login" class="d-flex flex-column" @submit.prevent="handleLogin">
      <v-text-field
          v-model="username"
          label="Nombre de usuario"
          placeholder="JohnLaw1720"
          :rules="usernameRules"
          outlined
          class="mx-5"
          required
      ></v-text-field>
      <v-text-field
          v-model="password"
          label="Contraseña"
          placeholder="12345"
          :rules="passwordRules"
          outlined
          class="mx-5"
          required
      ></v-text-field>
      <v-btn
          :disabled="!login"
          color="success"
          class="mx-12"
          type="submit"
      >
        Iniciar Sesión
      </v-btn>
    </v-form>

  </v-card>
</template>

<script>
export default {
  name: "login-form",
  data: () => ({
    login: false,
    username: '',
    password: '',
    usernameRules: [
      v => !!v || 'Nombre de usuario requerido',
      v => v.length <= 30 || 'El nombre de usuraio es muy extenso'
    ],
    passwordRules: [
      v => !!v || 'Contraseña requerida',
      v => v.length > 6 || 'La contraseña contiene menos de 6 caracteres',
      (value) => (value && /\d/.test(value)) || 'La contraseña debe contener al menos un número'
    ],
    user: {
      username: '',
      password: ''
    }
  }),
  methods: {
    sendForm(){
      this.user.username = this.email;
      this.user.password = this.password;
      console.log(this.user);
    },
    handleLogin() {
      this.sendForm();
      if (this.user.username && this.user.password) {
        this.$store.dispatch('auth/login', this.user).then(
            (userId) => {
              console.log('Logged In ' + userId);
              //this.goToRoute(userId);
            },
            error => {
              console.log('The login failed' + error.response);
            }
        );
      }
    }
  }
}
</script>

<style scoped>

</style>