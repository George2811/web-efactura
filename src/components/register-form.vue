<template>
  <v-card
      class="mx-auto py-8 primary"
      dark
      max-width="394"
      style="border-radius: 30px"
  >
    <v-card-text class="py-0 mb-6">
      <h1 class="text-h4 text-center white--text">
        Registrarse
      </h1>
    </v-card-text>
    <v-form
        v-model="register"
        class="d-flex flex-column"
        @submit.prevent="handleRegister"
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
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
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
          :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword2 ? 'text' : 'password'"
          @click:append="showPassword2 = !showPassword2"
          placeholder="12345"
          outlined
          class="mx-5"
          required
          :rules="confirmedRules.concat(passwordConfirmationRule)"
      >
      </v-text-field>
      <v-btn
          :disabled="!register"
          color="success"
          class="mx-12"
          type="submit"
      >
        <div v-if="!request">Registrarse</div>
        <v-progress-circular
            v-else
            indeterminate
            color="white"
        ></v-progress-circular>
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "register-form",
  data: () => ({
    showPassword: false,
    showPassword2: false,
    register: false,
    request: false,
    username: '',
    password: '',
    confirmed: '',
    usernameRules: [
      v => !!v || 'Nombre de usuario requerido',
      v => v.length >= 10 || 'El nombre de usuraio contiene menos de 10 caracteres'
    ],
    passwordRules: [
      v => !!v || 'Contraseña requerida',
      v => v.length >= 6 || 'La contraseña no es segura',
      (value) => (value && /\d/.test(value)) || 'La contraseña debe contener al menos un número',
      (value) => (value && /[a-z]{1}/.test(value)) || 'La contraseña debe contener al menos una letra'
    ],
    confirmedRules: [
      v => !!v || 'Contraseña requerida',
      v => v.length >= 6 || 'La contraseña no es segura',
      (value) => (value && /\d/.test(value)) || 'La contraseña debe contener al menos un número',
      (value) => (value && /[a-z]{1}/.test(value)) || 'La contraseña debe contener al menos una letra'
    ],
    user: {
      username: '',
      password: '',
    }
  }),
  computed:{
    passwordConfirmationRule() {
      return () =>
          this.password === this.confirmed || "Las contraseñas no coinciden";
    }
  },
  methods: {
    setUser(){
      this.user.username = this.username;
      this.user.password = this.password;
      console.log(this.user);
    },
    handleRegister() {
      this.request = true;
      this.setUser();
      if (this.user.username && this.user.password) {
        this.$store.dispatch('auth/register', this.user).then(
            (userId) => {
              console.log('Register In ' + userId);
              this.handleLogin(this.user);
              //this.goToRoute(userId);
            },
            error => {
              console.log('The register failed' + error.response);
              this.$emit('registerFailed');
              this.request = false;
            }
        );
      }
    },
    handleLogin(newUser) {
      this.$store.dispatch('auth/login', newUser).then(
          (userId) => {
            console.log('Logged In ' + userId);
            //console.log(this.$store.state);
            this.$router.push('/');
          },
          error => {
            console.log('The login failed' + error.response);
          }
      );

    }
  }
}
</script>

<style scoped>

</style>