<template>
  <v-card
      class="mx-auto"
      max-width="304"
      elevation="2"
  >
    <v-card-text>
      <p class="my-0 text-h6 title">Factura-1</p>

      <v-list>
        <v-list-item
            v-for="item in values"
            :key="item.day"
        >
          <v-list-item-title class="text-caption">{{ item.type }}</v-list-item-title>

          <v-list-item-subtitle class="text-right">
            {{ item.symbol }} {{ item.temp }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item>
          <v-list-item-title class="font-weight-bold text-body-2">TCEA</v-list-item-title>
          <v-list-item-subtitle class="text-right font-weight-bold text-body-2">
            20.5 %
          </v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-title class="font-weight-bold text-body-2">Monto a pagar</v-list-item-title>
          <v-list-item-subtitle class="text-right font-weight-bold text-body-2">
            S/. 1500
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>

    <v-card-actions class="btns">
      <v-spacer></v-spacer>
      <v-btn
        text
        color="error"
      >
        Eliminar
      </v-btn>
      <v-btn
          fab
          x-small
          color="primary"
          class="text-lowercase text-body-1 ml-4"
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
    values: [
      { type: 'Valor Nominal', symbol: 'S/. ', temp: '975.00' },
      { type: 'Fecha vencimiento', symbol: '', temp: '22/10/22' },
      { type: 'Tipo de tasa', symbol: '', temp: 'TNA' },
    ],
  })
}
</script>

<style scoped>
  .title{
    color: #1361af;
  }
  .btns{
    margin: -16px 0;
  }
</style>