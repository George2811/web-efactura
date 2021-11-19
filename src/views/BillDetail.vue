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
          :to="goToHome"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <p class="text-h6 d-inline-flex text-sm-h5 ml-3 mt-2 font-weight-bold cl-text">Detalle {{ this.bill.name }}</p>
      <v-spacer></v-spacer>
      <p class="d-inline-flex text-caption text-sm-h6 py-1 mt-2">TCEA: </p>

      <p class="d-inline-flex box-values text-caption text-sm-h6 ml-3 my-2 py-1 px-5"> {{ this.bill.tcea }}%</p>

    </v-card>

    <v-card
        class="mx-4 mx-md-auto my-6 px-8 py-12 board-part"
        max-width="1200" height="fit" elevation="5"
    >
      <div class="d-sm-flex justify-space-around sub-div">

        <div
            class="d-md-flex mx-auto"
            v-if="loading"
        >
          <v-progress-circular
              indeterminate
              color="primary"
          ></v-progress-circular>
        </div>
        <result-details v-else :bill="bill" :rate="rate"></result-details>
      </div>

    </v-card>
  </div>
</template>

<script>
import ResultDetails from '@/components/result-details.vue'
import BillsApiService from "@/services/bills-api.service";
import InterestRatesApiService from "@/services/interest-rates-api.service";

export default {
  name: "Detail",
  data: () => ({
    loading: true,
    userId: 0,
    bill: {},
    rate: {}
  }),
  components: {
    ResultDetails
  },
  computed:{
    goToHome(){
      return '/';
    },
    getBillId(){
      return this.$route.params.billId;
    }
  },
  methods:{
    getUser(){
      this.userId = this.$store.state.auth.user;
    },
    retrieveBillAndRate(){
      console.log(this.getBillId);
      BillsApiService.getByUserIdAndBillId(this.userId, this.getBillId)
          .then(response => {
            this.bill = response.data;
            InterestRatesApiService.getByInterestId(this.bill.interestRateId)
            .then(res => {
              this.rate = res.data;
              this.loading = false;
            })
            .catch(err => {
              console.log(err);})
          })
          .catch(error => { console.log(error) });
    }
  },
  created() {
    this.getUser();
    this.retrieveBillAndRate();
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
.box-values {
  background: white;
  border-radius: 15px;

}
</style>