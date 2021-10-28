<template>
  <div class="home py-10">
    <v-card
        class="mx-4 mx-sm-auto px-8 py-3 header-part d-sm-flex"
        max-width="1200" elevation="5"
    >
      <p class="text-caption text-sm-h5 font-weight-bold cl-text">Detalle Factura-1</p>
      <v-spacer></v-spacer>
      <p>TCEA : 24.556498 %</p>

    </v-card>

    <v-card
        class="mx-4 mx-sm-auto my-6 px-8 py-12 board-part"
        max-width="1200" elevation="5"
    >
      <div class="d-sm-flex justify-space-around sub-div">
        <results></results>
      </div>

    </v-card>
  </div>
</template>

<script>
import Results from '@/components/detail-results.vue'

export default {
  name: "Detail",
  components: {
    Results
  },
}
</script>

<style scoped>
.home{
  height: 89vh;
}
.header-part{
  background-color: #F9F9F9;
}
.board-part{
  background-color: white;
  height: 80%;
}
.cl-text{
  color: #1361af;
}
.sub-div{
  height: 100%;
}
</style>