<template>
  <div class="home py-10">
    <v-card
        class="mx-4 mx-sm-auto px-8 py-3 header-part d-sm-flex"
        max-width="1200" elevation="5"
    >
      <p class="text-caption text-sm-h5 font-weight-bold cl-text">Mis Facturas</p>
      <v-spacer></v-spacer>

      <p class="text-caption text-sm-h5 font-weight-bold cl-text">T.I.R 28.6666%</p>
      <v-spacer></v-spacer>

      <v-btn
          depressed
          color="primary"
          class="text-capitalize"

      >
        Añadir factura +
      </v-btn>
    </v-card>

    <v-card
        class="mx-4 mx-sm-auto my-6 px-8 py-12 board-part"
        max-width="1200" elevation="5"
    >
      <div class="d-sm-flex justify-space-around sub-div">
        <!--
        <HomeAlt></HomeAlt>
        -->
        <bill-card v-for="(a, i) in data" :key="i"></bill-card>
      </div>

      <v-pagination
          class="pagination"
          v-model="page"
          :length="3"
      ></v-pagination>
    </v-card>

  </div>
</template>

<script>
import BillCard from '@/components/bill-card.vue'
//import HomeAlt from '../components/home-card-alt.vue'

export default {
  name: 'Home',
  components: {
    BillCard,
    //HomeAlt
  },
  data: () => ({
    page: 1,
    data : [1,2,3]
  })
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
    height: 80%;
  }
  .cl-text{
    color: #1361af;
  }
  .sub-div{
    height: 100%;
  }
  .pagination{
    margin-top: -15px;
  }
</style>




























