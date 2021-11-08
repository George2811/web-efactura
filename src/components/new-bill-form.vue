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
                :placeholder="[this.isDollar ? '$ 1500.00':'S/. 1500.00']"
                solo
                dense
                required
                :rules="numberRules"
            ></v-text-field>
          </v-list-item>

          <v-list-item class="">
            <v-list-item-title class="text-caption font-weight-bold text-body-2 pb-5">Fecha de emisión</v-list-item-title>
            <v-dialog
                ref="dialogIssue"
                v-model="modalDIssue"
                :return-value.sync="bill.dIssue"
                persistent
                width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    prepend-icon="mdi-calendar"
                    v-model="bill.dIssue"
                    readonly
                    solo
                    dense
                    required
                    :rules="requiredRules"
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="bill.dIssue"
                  scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="error"
                    @click="modalDIssue = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                    @click="$refs.dialogIssue.save(bill.dIssue)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-list-item>

          <v-list-item class="">
            <v-list-item-title class="text-caption font-weight-bold text-body-2 pb-5">Fecha de vencimiento</v-list-item-title>
            <v-dialog
                ref="dialogExpired"
                v-model="modalDExpired"
                :return-value.sync="bill.dExpiration"
                persistent
                width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    prepend-icon="mdi-calendar"
                    v-model="bill.dExpiration"
                    readonly
                    solo
                    dense
                    required
                    :rules="requiredRules"
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="bill.dExpiration"
                  scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="error"
                    @click="modalDExpired = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                    @click="$refs.dialogExpired.save(bill.dExpiration)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
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

          <v-list-item>
            <v-list-item-title class="text-caption font-weight-bold text-body-2 pb-5">Retención</v-list-item-title>
            <v-text-field
                v-model="bill.retention"
                :placeholder="this.isDollar? '$ 10.00' : 'S/. 10.00'"
                solo
                dense
                :rules="retentionRules"
            ></v-text-field>
          </v-list-item>
        </v-list>
      </v-card>
    </v-card>


    <!-- Columna de la derecha -->
    <v-card class="mt-sm-6 mt-md-0" min-width="50%" elevation="0">
      <v-card min-width="70%" min-height="370" class="d-flex flex-column mx-sm-12" elevation="0">

        <v-card-title class="d-flex py-0">
          <p class="text-caption text-sm-h6 font-weight-bold cl-text mr-5">Gastos Iniciales</p>
          <v-dialog
              v-model="InitialCostsDialog"
              persistent
              max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  icon
                  color="primary"
                  small
                  class="mb-4"
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon>mdi-plus-circle</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Agregar gasto inicial</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                      <v-text-field
                          label="Descripción"
                          required
                          v-model="descIniCostForm"
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                      <v-text-field
                          label="Costo"
                          required
                          v-model="costIniCostForm"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>Todos los campos son requeridos</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="error"
                    text
                    @click="InitialCostsDialog = false"
                >
                  Cerrar
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="addInitialCost"
                >
                  Agregar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-title>
        <v-list class="list scroll-box" v-if="isInitialCosts">
          <v-virtual-scroll
              :bench="benched"
              :items="initialCosts"
              height="130"
              item-height="35"
          >
            <template v-slot:default="{ item }">
              <v-list-item :key="item.description">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.description }}
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>
                    <strong v-if="isDollar">$ {{ item.cost }}</strong>
                    <strong v-else>S/. {{ item.cost }}</strong>
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-dialog
                      v-model="dialogInitialItem"
                      persistent
                      max-width="270"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          icon
                          x-small
                          v-bind="attrs"
                          v-on="on"
                      >
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="text-h5">
                        ¿Seguro que desea eliminar este item?
                      </v-card-title>
                      <v-card-text>Desea eliminar el gasto inicial por "{{item.description}}", con costo de {{item.cost}}"</v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="error"
                            text
                            @click="dialogInitialItem = false"
                        >
                          Cancelar
                        </v-btn>
                        <v-btn
                            color="primary"
                            text
                            @click="deleteInitialCost(item)"
                        >
                          Sí, Eliminar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-list-item-action>
              </v-list-item>

              <v-divider></v-divider>
            </template>
          </v-virtual-scroll>
        </v-list>
        <v-card-subtitle class="mt-5" v-else>No existen gastos iniciales.</v-card-subtitle>

        <v-card-title class="d-flex my-2 py-0 pt-5">
          <p class="text-caption text-sm-h6 font-weight-bold cl-text mr-8">Gastos Finales</p>
          <v-dialog
              v-model="FinalCostsDialog"
              persistent
              max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  icon
                  color="primary"
                  small
                  class="mb-4"
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon>mdi-plus-circle</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Agregar gasto final</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                      <v-text-field
                          label="Descripción"
                          required
                          v-model="descFinalCostForm"
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                      <v-text-field
                          label="Costo"
                          required
                          v-model="costFinalCostForm"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>Todos los campos son requeridos</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="error"
                    text
                    @click="FinalCostsDialog = false"
                >
                  Cerrar
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="addFinalCost"
                >
                  Agregar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-title>
        <v-list class="list scroll-box" v-if="isFinalCosts">
          <v-virtual-scroll
              :bench="benched"
              :items="finalCosts"
              height="130"
              item-height="35"
          >
            <template v-slot:default="{ item }">
              <v-list-item :key="item.description">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.description }}
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>
                    <strong v-if="isDollar">$ {{ item.cost }}</strong>
                    <strong v-else>S/. {{ item.cost }}</strong>
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-dialog
                      v-model="dialogFinalItem"
                      persistent
                      max-width="270"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          icon
                          x-small
                          v-bind="attrs"
                          v-on="on"
                      >
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="text-h5">
                        ¿Seguro que desea eliminar este item?
                      </v-card-title>
                      <v-card-text>Desea eliminar el gasto final por "{{item.description}}", con costo de {{item.cost}}"</v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="error"
                            text
                            @click="dialogFinalItem = false"
                        >
                          Cancelar
                        </v-btn>
                        <v-btn
                            color="primary"
                            text
                            @click="deleteFinalCost(item)"
                        >
                          Sí, Eliminar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-list-item-action>
              </v-list-item>

              <v-divider></v-divider>
            </template>
          </v-virtual-scroll>
        </v-list>
        <v-card-subtitle class="mt-5" v-else>No existen gastos finales.</v-card-subtitle>

      </v-card>

      <v-card-actions class="d-flex justify-center justify-md-end mt-2">
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
import BillCalculator from "../services/BillCalculator";

export default {
  name: "new-bill-form",
  data: () => ({
    modalDIssue: false,
    modalDExpired: false,
    newBill: false,
    dialog: false, // Boton Cancelar de la Nueva Factura
    dialogInitialItem: false,
    dialogFinalItem: false,
    dialogIssue: false,
    dialogExpired: false,
    InitialCostsDialog: false,
    FinalCostsDialog: false,
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
    retentionRules: [
      v=> v>=0||'Solo valor numérico'
    ],
    bill:{
      name: '',
      ruc: '', // acepta nulls
      vNominal: '',
      dIssue: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dExpiration: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      valueIR: '',
      timeIR: '',
      cPeriod: '', // Por default 0, la BD necesita un valor
      retention: ''
    },
    benched: 0,
    descIniCostForm: '',
    costIniCostForm: 0,
    descFinalCostForm: '',
    costFinalCostForm: 0,
    initialCosts:[

    ],
    finalCosts:[
    ]
  }),
  props:[
      'rateType',
      'cashType'
  ],
  created() {
    this.testCalculator();
    this.sumCosts(this.finalCosts);
  },
  computed:{
    isNominal(){
      return this.rateType === 'TN';
    },
    isDollar(){
      return this.cashType === '$';
    },
    isInitialCosts(){
      return this.initialCosts.length > 0;
    },
    isFinalCosts(){
      return this.finalCosts.length > 0;
    }
  },
  methods:{
    moneyFormat(cost){
      return Number.parseFloat(cost).toFixed(2);
    },
    addInitialCost(){
      this.initialCosts.push({description: this.descIniCostForm, cost: this.moneyFormat(this.costIniCostForm)})
      this.InitialCostsDialog = false;
      this.descIniCostForm = '';
      this.costIniCostForm = 0;
    },
    deleteInitialCost(item){
      this.initialCosts = this.initialCosts.filter( e => {
        return e !== item;
      });
      this.dialogInitialItem = false;
    },

    addFinalCost(){
      this.finalCosts.push({description: this.descFinalCostForm, cost: Number(this.moneyFormat(this.costFinalCostForm))});
      this.FinalCostsDialog = false;
      this.descFinalCostForm = '';
      this.costFinalCostForm = 0;
    },
    deleteFinalCost(item){
      this.finalCosts = this.finalCosts.filter( e => {
        return e !== item;
      });
      this.dialogFinalItem = false;
    },

    sumCosts(costList){
      let newList  = costList.map(e => {
        return e.cost;
      });
      console.log(newList.reduce((a, b) => a + b, 0));
    },
    testCalculator(){
      let ala = new BillCalculator(29500, 90, 'TN');
      ala.saveBill();
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
.scroll-box{
  margin-top: -20px;
}
p {
  color: #1361af;
}
</style>