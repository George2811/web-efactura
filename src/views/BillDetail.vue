<template>
  <div class="home py-10">
    <v-card
        class="mx-4 mx-md-auto px-8 py-3 header-part d-sm-flex"
        max-width="1200" elevation="5"
    >
      <v-btn
          class="mt-sm-2 d-inline-flex"
          text
          icon
          color="primary"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <p class="text-h6 d-inline-flex text-sm-h5 ml-3 mt-2 font-weight-bold cl-text">Detalle Factura-1</p>
      <v-spacer></v-spacer>
      <p class="d-inline-flex text-caption text-sm-h6 py-1 mt-2">TCEA: </p>

      <p class="d-inline-flex box-values text-caption text-sm-h6 ml-3 my-2 py-1 px-5"> 24.556498%</p>

    </v-card>

    <v-card
        class="mx-4 mx-md-auto my-6 px-8 py-12 board-part"
        max-width="1200" height="fit" elevation="5"
    >
      <div class="d-sm-flex justify-space-around sub-div">
        <result-details></result-details>
      </div>

    </v-card>
  </div>
</template>

<script>
import ResultDetails from '@/components/result-details.vue'

export default {
  name: "Detail",
  components: {
    ResultDetails
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
  background-color: #F9F9F9;
}
.cl-text{
  color: #1361af;
}
.sub-div{
  height: 100%;
}
.box-values {
  background: white;
  border-radius: 15px;

}
</style>