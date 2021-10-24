<template>
  <v-card
      class="mx-auto py-8 primary"
      dark
      max-width="400"
      style="border-radius: 30px"
  >
    <v-card-text
        class="py-0 mb-6"
    >
      <h1
          class="text-h4 text-center white--text"
      >
        Registrarse
      </h1>
    </v-card-text>
    <v-form
        v-model="register"
        class="d-flex flex-column"
    >
      <v-text-field
          v-model="username"
          label="Nombre de usuario"
          placeholder="Hugo Quispe"
          :rules="usernameRules"
          outlined
          class="mx-5"
          required
      ></v-text-field>
      <v-text-field
          v-model="password"
          label="Contraseña"
          placeholder="12345"
          outlined
          class="mx-5"
          required
          :rules="passwordRules"
      >
      </v-text-field>
      <v-text-field
          v-model="confirmed"
          label="Confirmar Contraseña"
          placeholder="12345"
          outlined
          class="mx-5"
          required
          :rules="confirmedRules"
      >
      </v-text-field>
      <v-btn
          :disabled="!register"
          color="success"
          class="mx-12"
          type="submit"
      >
        Registrarse
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "register-form",
  data: () => ({
    register: false,
    username: '',
    password: '',
    confirmed: '',
    usernameRules: [
      v => !!v || 'Nombre de usuario requerido',
      v => v.length <= 10 || 'El nombre de usuraio contiene menos de 10 caracteres'
    ],
    passwordRules: [
      v => !!v || 'Contraseña requerida',
      v => v.length <= 10 || 'La contraseña contiene menos de 10 caracteres'
    ],
    confirmedRules: [
      v => !!v || 'Contraseña requerida',
      v => v.length <= 10 || 'La contraseña contiene menos de 10 caracteres'
    ],
    user: {
      username: '',
      password: '',
    }
  }),
  methods: {
    sendForm(){
      this.user.username = this.email;
      this.user.password = this.password;
      console.log(this.user);
    },
    handleRegister() {
      this.sendForm();
      if (this.user.username && this.user.password) {
        this.$store.dispatch('auth/register', this.user).then(
            (userId) => {
              console.log('Register In ' + userId);
              //this.goToRoute(userId);
            },
            error => {
              console.log('The register failed' + error.response);
            }
        );
      }
    }
  }
}
</script>

<style scoped>

</style>