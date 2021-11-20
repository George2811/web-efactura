<template>
  <div class="home py-10">
    <v-card
        class="mx-4 mx-sm-auto px-8 py-3 header-part d-sm-flex"
        max-width="1200" elevation="5"
    >
      <p class="text-h6 text-sm-h5 font-weight-bold cl-text">Mis Facturas</p>
      <v-spacer></v-spacer>

      <p class="text-caption  text-sm-h5 font-weight-bold cl-text">T.I.R 28.6666%</p>
      <v-spacer></v-spacer>

      <v-btn
          depressed
          color="primary"
          class="text-capitalize"
          to="/new-bill"
      >
        Añadir factura +
      </v-btn>
    </v-card>

    <v-card
        class="mx-4 mx-sm-auto my-6 px-8 py-12 board-part"
        max-width="1200" height="fit" elevation="5"
    >
      <div class="d-sm-flex justify-space-around sub-div" v-if="loading">
        <v-progress-circular
            indeterminate
            color="primary"
        ></v-progress-circular>
      </div>
      <div class="d-sm-flex justify-space-around sub-div" v-if="existBills">
        <bill-card v-for="(bill, i) in bills.slice((this.page-1)*3, this.page*3)" :key="i" :bill="bill" @update="retrieveBills"></bill-card>
      </div>
      <div class="d-sm-flex justify-space-around sub-div" v-if="!existBills && !loading">
          <HomeAlt></HomeAlt>
      </div>

      <v-pagination
          v-if="existBills"
          class="pagination pt-12"
          v-model="page"
          :length="lengthBills"
      ></v-pagination>
    </v-card>

  </div>
</template>

<script>
import BillsApiService from "@/services/bills-api.service";

import BillCard from '@/components/bill-card.vue'
import HomeAlt from '../components/home-card-alt.vue'

export default {
  name: 'Home',
  components: {
    BillCard,
    HomeAlt
  },
  data: () => ({
    page: 1,
    data : [1,2,3],
    loading: true,
    bills : [],
    userId: 0,
  }),
  computed:{
    existBills(){
      return this.bills.length > 0;
    },
    lengthBills(){
      return Math.ceil(this.bills.length/3) ? Math.ceil(this.bills.length/3) : 1;
    }
  },
  methods:{
    getUser(){
      this.userId = JSON.parse(localStorage.getItem('user')).userId;
    },
    retrieveBills(){
      this.page = 1;
      BillsApiService.getAllByUserId(this.userId)//.userId
          .then(response => {
            this.loading = false;
            this.bills = response.data.content;
          })
          .catch(err => {
            console.log(err);
          });
    }
  },
  created() {
    this.getUser();
    this.retrieveBills();
  }
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
  .pagination{
    margin-top: -15px;
  }
</style>




























