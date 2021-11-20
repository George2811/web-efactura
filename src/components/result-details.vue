<template>
  <v-card
      elevation="0"
      class="v-card d-md-flex mx-auto"
      width="100%"
  >
    <v-card min-width="50%" elevation="0">
      <v-card min-width="70%" class="d-flex flex-column mx-sm-12" elevation="0">
        <v-list class="list">
          <v-list-item class="item">

            <v-list-item-title class="text-caption font-weight-bold text-body-2">R.U.C</v-list-item-title>
            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              {{bill.ruc || 'No hay'}}
            </v-list-item-subtitle>

          </v-list-item>
          <v-list-item class="item">

            <v-list-item-title class="text-caption font-weight-bold text-body-2">Valor nominal</v-list-item-title>
            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              {{ this.moneyFormat(bill.currency) }} {{bill.nominalValue}}
            </v-list-item-subtitle>

          </v-list-item>
          <v-list-item class="item">

            <v-list-item-title class="text-caption font-weight-bold text-body-2">Fecha de emisión</v-list-item-title>
            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              {{ this.convertDate(bill.issue)}}
            </v-list-item-subtitle>

          </v-list-item>
          <v-list-item class="item">

            <v-list-item-title class="text-caption font-weight-bold text-body-2">Fecha de vencimiento</v-list-item-title>
            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              {{ this.convertDate(bill.expiration)}}
            </v-list-item-subtitle>

          </v-list-item>
          <v-list-item class="item">

            <v-list-item-title class="text-caption font-weight-bold text-body-2">Tasa</v-list-item-title>
            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              {{bill.ratePercentage}} % - {{rate.type}}
            </v-list-item-subtitle>

          </v-list-item>
          <v-list-item class="item">

            <v-list-item-title class="text-caption font-weight-bold text-body-2">Gastos Iniciales</v-list-item-title>
            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              {{ this.moneyFormat(bill.currency) }} {{bill.initialExpenses}}
            </v-list-item-subtitle>

          </v-list-item>
          <v-list-item class="item">

            <v-list-item-title class="text-caption font-weight-bold text-body-2">Gastos Finales</v-list-item-title>
            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              {{ this.moneyFormat(bill.currency) }} {{bill.finalExpenses}}
            </v-list-item-subtitle>

          </v-list-item>

        </v-list>
      </v-card>
    </v-card>



    <v-card class="mt-10 mt-md-0" min-width="50%" elevation="0">
      <v-card min-width="70%" class="d-flex flex-column mx-sm-12" elevation="0">
        <p class="text-caption text-sm-h6 font-weight-bold cl-text">Resultados</p>
        <v-list class="list">
          <v-list-item class="item">
            <v-list-item-title class="text-caption font-weight-bold text-body-2">Valor Neto</v-list-item-title>

            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              {{ this.moneyFormat(bill.currency) }} {{ bill.netWorth }}
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item class="item">
            <v-list-item-title class="text-caption font-weight-bold text-body-2">Valor Entregado</v-list-item-title>

            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              {{ this.moneyFormat(bill.currency) }} {{ bill.deliveredValue }}
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item class="item">
            <v-list-item-title class="text-caption font-weight-bold text-body-2">Valor Recibido</v-list-item-title>

            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              {{ this.moneyFormat(bill.currency) }} {{ bill.receivedValue }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>
    </v-card>

  </v-card>
</template>

<script>
export default {
  name: "detail-results",
  data: () => ({
    dialog: false,
  }),
  props:[
      'bill',
      'rate'
  ],
  methods: {
    convertDate(date) {
      let stringDate = new Date(date);
      return `${stringDate.getUTCDate()}/${stringDate.getMonth() + 1}/${stringDate.getFullYear()}`
    },
    moneyFormat(coin){
      if(coin === "SOLES")
        return 'S/.'
      if(coin === "DOLARES")
        return '$'
    }
  }
}
</script>

<style scoped>
.v-card, .list {
  background: #F9F9F9;
}
.box-values {
  background: white;
  border-radius: 15px;
}
p {
  color: #1361af;
}
</style>