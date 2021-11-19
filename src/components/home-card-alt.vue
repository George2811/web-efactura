<template>
  <v-card class="bg py-12 mx-auto d-flex flex-column text-center align-center"
          width="500"
          max-height="320"
          elevation="0"
  >
      <v-card-text>
        <div class="py-5 text--primary">
          Usted no cuenta con facturas.
        </div>
        <div class="text--primary py-10">
          Registra tu primera factura  :)
        </div>
        <v-divider></v-divider>
      </v-card-text>
    <v-card-actions>
      <v-btn
          depressed
          color="primary"
          class="text-capitalize"
          to="/new-bill"
      >
        Añadir factura +
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "home-card-alt",
  data: () => ({
  }),
}
</script>

<style scoped>
.bg{
  background-color: #F9F9F9;
}
</style>