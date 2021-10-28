<template>
  <v-card
      elevation="0"
      class="v-card d-flex mx-auto"
      width="100%"
  >
    <v-card width="50%" elevation="0">
      <v-card width="70%" class="d-flex flex-column mx-auto my-15" elevation="0">
        <v-list class="list">
          <v-list-item
              v-for="item in values"
              :key="item.day"
              class="item"
          >
            <v-list-item-title class="text-caption font-weight-bold text-body-2">{{ item.type }}</v-list-item-title>

            <v-list-item-subtitle style="border: 1px solid black" class="hola  text-right font-weight-bold text-body-2">
              {{ item.symbol }} {{ item.temp }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>
    </v-card>

    <v-card></v-card>

    <v-card width="45%" elevation="0">
      <v-card width="70%" class="d-flex flex-column mx-auto my-15" elevation="0">
        <p class="text-caption text-sm-h6 font-weight-bold cl-text">Resultados</p>
        <v-list class="list">
          <v-list-item
              v-for="item in values2"
              :key="item.day"
              class="item"
          >
            <v-list-item-title class="text-caption font-weight-bold text-body-2">{{ item.type }}</v-list-item-title>

            <v-list-item-subtitle class="hola  text-right font-weight-bold text-body-2">
              {{ item.symbol }} {{ item.temp }}
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
    values: [
      { type: 'R.U.C', symbol: '', temp: '00752026951' },
      { type: 'Valos Nominal', symbol: 'S/. ', temp: '1500.00' },
      { type: 'Fecha de Emision', symbol: '', temp: '22/10/22' },
      { type: 'Fecha de Vencimiento', symbol: '', temp: '22/10/22' },
      { type: 'Tasa', symbol: '%', temp: '7.60' },
      { type: 'Gastos Iniciales', symbol: 'S/. ', temp: '79.00' },
      { type: 'Gastos Finales', symbol: 'S/. ', temp: '51.00' },
    ],
    values2: [
      { type: 'R.U.C', symbol: '', temp: '00752026951' },
      { type: 'Valos Nominal', symbol: 'S/. ', temp: '1500.00' },
      { type: 'Fecha de Emision', symbol: '', temp: '22/10/22' },
    ],
  })
}
</script>

<style scoped>
.v-card, .list{
  background: #F9F9F9;
}
.hola{
  background: white;
}
p{
  color: #1361af;
}
</style>