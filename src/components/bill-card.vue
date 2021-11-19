<template>
  <v-card
      class="mx-auto mb-10 mb-md-0"
      width="324"
      min-height="320"
      elevation="2"
  >
    <v-card-text>
      <p class="my-0 text-h6 title">{{bill.name}}</p>

      <v-list>
        <v-list-item class="item">

          <v-list-item-title class="text-caption">Valor Nominal</v-list-item-title>

          <v-list-item-subtitle class="text-right">
            {{ this.moneyFormat(bill.currency) }} {{ bill.nominalValue }}
          </v-list-item-subtitle>
        </v-list-item>

        <v-list-item class="item">

          <v-list-item-title class="text-caption">Fecha vencimiento</v-list-item-title>

          <v-list-item-subtitle class="text-right">
            {{ this.convertDate(bill.expiration) }}
          </v-list-item-subtitle>

        </v-list-item>

        <v-list-item class="item">

          <v-list-item-title class="text-caption">Tasa</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ bill.ratePercentage }} %
          </v-list-item-subtitle>

        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item>
          <v-list-item-title class="font-weight-bold text-body-2">TCEA</v-list-item-title>
          <v-list-item-subtitle class="text-right font-weight-bold text-body-2">
            {{ bill.tcea }} %
          </v-list-item-subtitle>
        </v-list-item>

        <v-list-item class="item">
          <v-list-item-title class="font-weight-bold text-body-2">Valor Neto</v-list-item-title>
          <v-list-item-subtitle class="text-right font-weight-bold text-body-2">
            {{ this.moneyFormat(bill.currency) }} {{ bill.netWorth }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>

    <v-card-actions class="btns">
      <v-spacer></v-spacer>

      <v-dialog
          v-model="dialog"
          persistent
          max-width="290"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              text
              color="error"
              class="text-capitalize"
              v-bind="attrs"
              v-on="on"
          >
            Eliminar
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5">
            Eliminar
          </v-card-title>
          <v-card-text>¿Desea eliminar la factura?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary darken-1"
                class="text-capitalize"
                text
                @click="dialog = false"
            >
              Cancelar
            </v-btn>
            <v-btn
                color="error"
                class="text-capitalize"
                text
                @click="dialog = false"
            >
              Sí, eliminar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn
          fab
          x-small
          color="primary"
          class="text-lowercase text-body-1 ml-4 mr-3"
          :to="goToBill"
      >
        i
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
export default {
  name: "bill-card",
  data: () => ({
    dialog: false,
  }),
  props:[
      'bill'
  ],
  computed:{
    goToBill(){return `/bills/${this.bill.id}`}
  },
  methods:{
    moneyFormat(coin){
      if(coin === "SOLES")
        return 'S/.'
      if(coin === "DOLARES")
        return '$'
    },
    convertDate(date){
      let stringDate = new Date(date);
      return `${stringDate.getUTCDate()}/${stringDate.getMonth()+1}/${stringDate.getFullYear()}`
    }
  }
}
</script>

<style scoped>
  .title{
    color: #1361af;
  }
  .btns{
    margin: -16px 0;
  }
  .item{
    margin: -9px 0;
  }
</style>