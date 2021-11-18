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
      <div class="d-sm-flex justify-space-around sub-div" v-if="existBills">
        <bill-card v-for="(a, i) in bills" :key="i"></bill-card>
      </div>
      <div class="d-sm-flex justify-space-around sub-div" v-else>
          <HomeAlt></HomeAlt>
      </div>

      <v-pagination
          v-if="existBills"
          class="pagination pt-12"
          v-model="page"
          :length="3"
      ></v-pagination>
    </v-card>

  </div>
</template>

<script>
import BillCard from '@/components/bill-card.vue'
import BillsApiService from "@/services/bills-api.service";
import UserApiService from "@/services/user-api.service"
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
    bills : []
  }),
  computed:{
    existBills(){
      return this.bills.length > 0;
    }
  },
  methods:{
    getUser(){
      return this.$store.state.auth.user;
    },
    getBills(){
      BillsApiService.getAllByUserId(this.getUser().userId)
      .then(response => {
        console.log(response);
        this.bills = response.data.content;
      })
      .catch(err => {
        console.log(err);
      });
    },
    getUsers(){
      UserApiService.getAll()
      .then(response => {
        console.log(response);
      })
      .catch(err => { console.log(err)});
    }
  },
  created() {
    //console.log(this.getUser().userId);
    //this.getUsers();
    this.getBills();
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




























