<template>
  <div
      class="bg py-12">
    <Registerform
        class="py-12"
    >
    </Registerform>
  </div>
</template>

<script>

import Registerform from '../components/register-form.vue'
export default {
  name: "Register",
  components: {
    Registerform,
  }
}
</script>

<style scoped>
.bg{
  background-image: url("../assets/53026.jpg");
  width: 100%;
  height: 89vh;
  background-size: cover;
  background-position: center;
  position: relative;
}
</style>