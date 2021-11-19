<template>
  <v-card class="mt-12">
    <v-app-bar class="px-6 white" app>
      <v-toolbar-title class="font-weight-bold primary--text">EFACTURA</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text class="text-capitalize" to="/login" v-if="!isLogged">
        Iniciar Sesión
      </v-btn>
      <v-btn text class="text-capitalize" to="/register" v-if="!isLogged">
        Registrarse
      </v-btn>

      <v-menu offset-y v-else>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="primary"
              fab
              small
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>
              mdi-account
            </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn text class="text-capitalize" @click="handleLogout">
                <v-icon>mdi-logout</v-icon> Cerrar Sesión
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "toolbar",
  data(){
    return{
      //logged: !this.$store.state.auth.status,
    }
  },
  computed:{
    isLogged(){
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods:{
    handleLogout(){
      this.$store.dispatch('auth/logout')
          .then((userId) => {
            console.log('Logged Out '+ userId);
            //this.$store.state.auth.person = null;
            localStorage.removeItem('user');
            this.$router.push('/login');
          })
          .catch(error => {
            console.log('The logout failed'+error.response.data);
          });
    }
  }
}
</script>

<style scoped>

</style>