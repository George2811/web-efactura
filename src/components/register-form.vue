<template>
  <div>
    <v-card
        class="mx-auto primary"
        max-width="500"
        style="border-radius: 30px"
    >
      <v-card-title
          class="mx-auto primary"
          style="text-align: center; margin: auto;"
      >
        <h1
            class="mx-auto primary text-h4"
            style="text-align: center; margin: auto; color: white;"
        >
          REGISTRARSE
        </h1>
      </v-card-title>
      <v-card
          class="mx-auto primary"
          width="45%"
          style="float: left;" elevation="0"
      >
        <v-card
            class="primary"
            elevation="0"
            height="10px"
        >
        </v-card>
        <v-card
            elevation="0"
            class="mx-auto primary"
            align="right"
            width="100%"
        >
          <label
              style="color: white"
          >
            Nombre de Usuario :
          </label>
        </v-card>
        <v-card
            class="primary"
            elevation="0"
            height="35px"
        >
        </v-card>
        <v-card
            elevation="0"
            class="mx-auto primary"
            align="right"
            width="100%"
        >
          <label
              style="color: white"
          >
            Nombre de Usuario :
          </label>
        </v-card>
        <v-card
            elevation="0"
            height="40px"
            class="primary"
        >
        </v-card>
        <v-card
            elevation="0"
            class="mx-auto primary"
            align="right"
            width="100%"
        >
          <label
              style="color: white"
          >
            Nombre de Usuario :
          </label>
        </v-card>
        <v-card
            elevation="0"
            height="10px"
            class="primary"
        >
        </v-card>
      </v-card>
      <v-card
          class="mx-auto primary"
          width="3%"
          height="100px"
          style="float: left;"
          elevation="0"
      >
      </v-card>
      <v-form
          class="primary"
          width="45%"
          type="submit"
          v-model="register"
          style="float: left;"
          elevation="0"
      >
        <v-card></v-card>
        <v-text-field
            rounded
            solo
            dense
            v-model="username"
            placeholder="Vetaman999"
        >
        </v-text-field>
        <v-text-field
            rounded
            solo
            dense
            v-model="password"
            placeholder="12431243"
        >
        </v-text-field>
        <v-text-field
            rounded
            solo
            dense
            v-model="confirmed"
            placeholder="123456"
        >
        </v-text-field>
        <v-card></v-card>
      </v-form>
      <div
          class="text-center">
        <v-btn
            :disabled="!register"
            class="mr-4"
            color="success"
            width="50%"
            @click="submit"
            rounded
        >
          Crear Cuenta
        </v-btn>
        <v-card
            class="transparent"
            height="10px"
            elevation="0"
        ></v-card>
      </div>
    </v-card>
  </div>
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