<template>
  <v-card class="mt-12">
    <v-app-bar class="px-6 white" app>
      <v-toolbar-title class="font-weight-bold primary--text">EFACTURA</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text class="text-capitalize" to="/login" v-if="!logged">
        Iniciar Sesión
      </v-btn>
      <v-btn text class="text-capitalize" to="/detail" v-if="!logged">
        Detalle
      </v-btn>
      <v-btn text class="text-capitalize" to="/register" v-if="!logged">
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
              <v-btn text class="text-capitalize">
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
      logged: false
    }
  }
}
</script>

<style scoped>

</style>