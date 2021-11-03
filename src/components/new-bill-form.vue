<template>
  <v-form
      v-model="newBill"
      class="d-md-flex  mx-auto"
  >
    <!-- Columna de la izquierda -->
    <v-card min-width="50%" elevation="0">
      <v-card min-width="70%" class="d-flex flex-column mx-sm-12" elevation="0">
        <v-list class="list py-0">
          <v-list-item class="">
            <v-list-item-title class="text-caption font-weight-bold text-body-2 pb-5">Nombre</v-list-item-title>
            <v-text-field
                v-model="bill.name"
                placeholder="Factura-1"
                solo
                required
                dense
                :rules="nameRules"
            ></v-text-field>
          </v-list-item>

          <v-list-item class="my-0 py-0">
            <v-list-item-title class="text-caption font-weight-bold text-body-2 pb-5">R.U.C</v-list-item-title>
            <v-text-field
                v-model="bill.ruc"
                placeholder="0077644654"
                solo
                dense
            ></v-text-field>
          </v-list-item>

          <v-list-item class="">
            <v-list-item-title class="text-caption font-weight-bold text-body-2 pb-5">Valor Nominal</v-list-item-title>
            <v-text-field
                v-model="bill.vNominal"
                placeholder="S/. 1500.00"
                solo
                dense
                required
                :rules="numberRules"
            ></v-text-field>
          </v-list-item>

          <v-list-item class="">
            <v-list-item-title class="text-caption font-weight-bold text-body-2 pb-5">Fecha de emisión</v-list-item-title>
            <v-text-field
                v-model="bill.dIssue"
                placeholder="01/11/21"
                solo
                dense
                required
                :rules="requiredRules"
            ></v-text-field>
          </v-list-item>

          <v-list-item class="">
            <v-list-item-title class="text-caption font-weight-bold text-body-2 pb-5">Fecha de vencimiento</v-list-item-title>
            <v-text-field
                v-model="bill.dExpiration"
                placeholder="01/01/22"
                solo
                dense
                required
                :rules="requiredRules"
            ></v-text-field>
          </v-list-item>

          <v-list-item class="d-flex flex-column justify-end flex-sm-row">
            <v-list-item-title class="text-caption font-weight-bold text-body-2 my-4 mb-sm-0 pb-10">Tasa de interés</v-list-item-title>
            <v-text-field
                v-model="bill.valueIR"
                placeholder="7.5 %"
                solo
                dense
                required
                :rules="numberRules"
            ></v-text-field>
            <v-select
                v-model="bill.timeIR"
                :items="times"
                label="Anual"
                solo
                dense
                class="ml-1"
                :rules="requiredRules"
            ></v-select>
            <v-select
                v-if="isNominal"
                v-model="bill.cPeriod"
                :items="timesCompounding"
                label="diaria"
                solo
                dense
                class="ml-1"
            ></v-select>

          </v-list-item>
        </v-list>
      </v-card>
    </v-card>

    <!-- Columna de la derecha -->
    <!-- TODO: Gastos Iniciales y Finales con scroll-->

    <v-card class="mt-sm-6 mt-md-0" min-width="50%" elevation="0">
      <v-card min-width="70%" class="d-flex flex-column mx-sm-12" elevation="0">
        <p class="text-caption text-sm-h6 font-weight-bold cl-text">Gastos Iniciales</p>
        <v-list class="list">

          <v-list-item class="item">
            <v-list-item-title class="text-caption font-weight-bold text-body-2">Valor</v-list-item-title>
            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              Hola siu
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item class="item">
            <v-list-item-title class="text-caption font-weight-bold text-body-2">Valor</v-list-item-title>
            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              Hola siu
            </v-list-item-subtitle>
          </v-list-item>

        </v-list>
        <p class="text-caption text-sm-h6 font-weight-bold cl-text">Gastos Finales</p>
        <v-list class="list">

          <v-list-item class="item">
            <v-list-item-title class="text-caption font-weight-bold text-body-2">Valor</v-list-item-title>
            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              Hola siu
            </v-list-item-subtitle>
          </v-list-item>

          <v-list-item class="item">
            <v-list-item-title class="text-caption font-weight-bold text-body-2">Valor</v-list-item-title>
            <v-list-item-subtitle class="box-values text-right font-weight-bold text-body-2 py-2 px-4">
              Hola siu
            </v-list-item-subtitle>
          </v-list-item>

        </v-list>
        <v-list-item class="">
          <v-list-item-title class="text-caption font-weight-bold text-body-2 pb-5">Retención</v-list-item-title>
          <v-text-field
              v-model="bill.retention"
              placeholder="00.00"
              solo
              dense
          ></v-text-field>
        </v-list-item>
      </v-card>
      <v-card-actions class="d-flex justify-center justify-md-end mt-5">
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
              Cancelar
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Cancelar
            </v-card-title>
            <v-card-text>¿Desea cancelar la creación de esta factura?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="primary darken-1"
                  class="text-capitalize"
                  text
                  @click="dialog = false"
              >
                Volver
              </v-btn>
              <v-btn
                  color="error"
                  class="text-capitalize"
                  text
                  @click="dialog = false"
                  to="/"
              >
                Sí, cancelar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn
            :disabled="!newBill"
            color="success"
            class="mx-12 d-inline-block"
            type="submit"
        >
          Guardar
        </v-btn>
      </v-card-actions>

    </v-card>


  </v-form>
</template>

<script>
export default {
  name: "new-bill-form",
  data: () => ({
    newBill: false,
    dialog: false,
    times: ['Anual', 'Mensual', 'Bimensual', 'Trimesnsual', 'Cuatrimensual', 'Semestral', 'Semanal'],
    timesCompounding:['diaria', 'Semanal', 'Mensual'],
    nameRules: [
      v => !!v || 'Nombre requerido',
      v => v.length <= 100 || 'El nombre es muy extenso'
    ],
    requiredRules: [
      v => !!v || 'Campo requerido',
    ],
    numberRules: [
      v => !!v || 'Campo requerido',
      v=> v>=0||'Solo valor numérico'
    ],
    bill:{
      name: '',
      ruc: '', // acepta nulls
      vNominal: '',
      dIssue: '',
      dExpiration: '',
      valueIR: '',
      timeIR: '',
      cPeriod: '', // Por default 0, la BD necesita un valor
      retention: ''
    }
  }),
  props:[
      'rateType',
      'cashType'
  ],
  computed:{
    isNominal(){
      return this.rateType === 'TN';
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