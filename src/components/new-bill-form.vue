<template>
  <v-form
      v-model="newBill"
      class="d-md-flex  mx-auto"
  >
    <v-card min-width="50%" elevation="0">
      <v-card min-width="70%" class="d-flex flex-column mx-sm-12" elevation="0">
        <v-list class="list py-0">
          <v-list-item class="">
            <v-list-item-title class="text-caption font-weight-bold text-body-2">Nombre</v-list-item-title>
            <v-text-field
                v-model="bill.name"
                placeholder="Factura-1"
                solo
                required
                dense
                :rules="billRules"
            ></v-text-field>
          </v-list-item>

          <v-list-item class="my-0 py-0">
            <v-list-item-title class="text-caption font-weight-bold text-body-2">R.U.C</v-list-item-title>
            <v-text-field
                v-model="bill.ruc"
                placeholder="0077644654"
                solo
                dense
                required
                :rules="billRules"
            ></v-text-field>
          </v-list-item>

          <v-list-item class="">
            <v-list-item-title class="text-caption font-weight-bold text-body-2">Valor Nominal</v-list-item-title>
            <v-text-field
                v-model="bill.vNominal"
                placeholder="S/. 1500.00"
                solo
                dense
                required
                :rules="billRules"
            ></v-text-field>
          </v-list-item>

          <v-list-item class="">
            <v-list-item-title class="text-caption font-weight-bold text-body-2">Fecha de emisión</v-list-item-title>
            <v-text-field
                v-model="bill.dIssue"
                placeholder="01/11/21"
                solo
                dense
                required
                :rules="billRules"
            ></v-text-field>
          </v-list-item>

          <v-list-item class="">
            <v-list-item-title class="text-caption font-weight-bold text-body-2">Fecha de vencimiento</v-list-item-title>
            <v-text-field
                v-model="bill.dExpiration"
                placeholder="01/01/22"
                solo
                dense
                required
                :rules="billRules"
            ></v-text-field>
          </v-list-item>

          <v-list-item class="">
            <v-list-item-title class="text-caption font-weight-bold text-body-2">Tasa de interés</v-list-item-title>
            <v-text-field
                v-model="bill.valueIR"
                placeholder="7.5"
                solo
                dense
                required
                :rules="billRules"
            ></v-text-field>
            <v-text-field
                v-model="bill.timeIR"
                placeholder="Anual"
                solo
                dense
                required
                :rules="billRules"
            ></v-text-field>
            <v-text-field
                v-model="bill.cPeriod"
                placeholder="diario"
                solo
                dense
                required
            ></v-text-field>
          </v-list-item>
        </v-list>
      </v-card>
    </v-card>

    <v-card class="mt-10 mt-md-0" min-width="50%" elevation="0">
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
      </v-card>
      <v-card-actions class="d-flex justify-center justify-md-end mt-12">
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
    username: '',
    password: '',
    confirmed: '',
    nameRules: [
      v => !!v || 'Nombre requerido'
    ],
    billRules: [
      v => !!v || 'Campo requerido',
      (value) => (value && /\d/.test(value)) || 'La contraseña debe contener al menos un número',
    ],
    user: {
      username: '',
      password: '',
    },
    bill:{
      name: '',
      ruc: '',
      vNominal: '',
      dIssue: '',
      dExpiration: '',
      valueIR: '',
      timeIR: '',
      cPeriod: ''
    }
  }),

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