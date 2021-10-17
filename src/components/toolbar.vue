<template>
  <v-card class="mt-12">
    <v-app-bar class="px-6 white" app>
      <v-toolbar-title class="font-weight-bold primary--text">EFACTURA</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text class="text-capitalize" to="/login">
        Iniciar Sesión
      </v-btn>
      <v-btn text class="text-capitalize" to="/register">
        Registrarse
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "toolbar",
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>