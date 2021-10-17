<template>
  <div>
    <v-card
        class="mx-auto primary"
        max-width="500"
        style="border-radius: 30px"
    >
      <v-card-title
          class="mx-auto primary"
          style="text-align: center; margin: auto;"
      >
        <h1
            class="mx-auto primary"
            style="text-align: center; margin: auto; color: white;"
        >
          REGISTRARSE
        </h1>
      </v-card-title>
      <v-card
          class="mx-auto primary"
          width="45%"
          style="float: left;" elevation="0"
      >
        <v-card
            class="primary"
            elevation="0"
            height="10px"
        >
        </v-card>
        <v-card
            elevation="0"
            class="mx-auto primary"
            align="right"
            width="100%"
        >
          <label
              style="color: white"
          >
            Nombre de Usuario :
          </label>
        </v-card>
        <v-card
            class="primary"
            elevation="0"
            height="35px"
        >
        </v-card>
        <v-card
            elevation="0"
            class="mx-auto primary"
            align="right"
            width="100%"
        >
          <label
              style="color: white"
          >
            Nombre de Usuario :
          </label>
        </v-card>
        <v-card
            elevation="0"
            height="40px"
            class="primary"
        >
        </v-card>
        <v-card
            elevation="0"
            class="mx-auto primary"
            align="right"
            width="100%"
        >
          <label
              style="color: white"
          >
            Nombre de Usuario :
          </label>
        </v-card>
        <v-card
            elevation="0"
            height="10px"
            class="primary"
        >
        </v-card>
      </v-card>
      <v-card
          class="mx-auto primary"
          width="3%"
          height="100px"
          style="float: left;"
          elevation="0"
      >
      </v-card>
      <v-form
          class="primary"
          width="45%"
          style="float: left;"
          elevation="0"
      >
        <v-card></v-card>
        <v-text-field
            rounded
            solo
            dense></v-text-field>
        <v-text-field
            rounded
            solo
            dense></v-text-field>
        <v-text-field
            rounded
            solo
            dense></v-text-field>
        <v-card></v-card>
      </v-form>
      <div
          class="text-center">
        <v-btn
            class="mr-4"
            color="success"
            @click="submit"
            rounded
        >
          Crear Cuenta
        </v-btn>
        <v-card
            class="transparent"
            height="10px"
            width="50%"
            elevation="0"
        ></v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
name: "register-form"
}
</script>

<style scoped>

</style>