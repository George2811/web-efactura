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
          to="/home"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <p class="text-h6 d-inline-flex text-sm-h5 ml-3 mt-2 font-weight-bold cl-text">Nueva Factura</p>
      <v-spacer></v-spacer>
      <v-card class="header-part d-sm-flex px-2" max-width="420" elevation="0">
        <v-icon class="mr-5 d-inline-flex">mdi-cash</v-icon>
        <v-radio-group v-model="radioCash" row class="d-flex flex-row d-inline-flex">
          <v-radio
              v-for="n in coin"
              :key="n"
              :label="`${n}`"
              :value="n"
          ></v-radio>
        </v-radio-group>
        <v-spacer class="mx-5"></v-spacer>
        <v-icon class="mr-5">mdi-coffee-outline</v-icon>
        <v-radio-group v-model="radioRates" row class="d-flex flex-row d-inline-flex">
          <v-radio
              v-for="n in rate"
              :key="n"
              :label="`${n}`"
              :value="n"
              class="text-body-2"
          ></v-radio>
        </v-radio-group>
      </v-card>

    </v-card>

    <v-card
        class="mx-4 mx-sm-auto my-6 px-8 py-6 board-part"
        max-width="1200" height="fit" elevation="5"
    >
      <div class="d-sm-flex justify-space-around sub-div">
        <new-bill-form :rateType="radioRates" :cashType="radioCash"></new-bill-form>
      </div>
    </v-card>

  </div>
</template>

<script>
import NewBillForm from '@/components/new-bill-form.vue'
export default {
  name: "NewBill",
  components:{
    NewBillForm
  },
  computed: {
  },
  data: () => ({
    radioCash: 'S/.',
    radioRates: 'TN',
    coin:['S/.', '$'],
    rate:['TN', 'TE']
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
}
.cl-text{
  color: #1361af;
}
.sub-div{
  height: 100%;
}
</style>