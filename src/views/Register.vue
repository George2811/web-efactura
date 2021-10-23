<template>

  <div class="global">
    <div class="bg py-12"></div>

    <div class="form1">
      <register-form class="py-12"></register-form>
    </div>
  </div>

</template>

<script>
import RegisterForm from '../components/register-form.vue'

export default {
  name: "Register",
  components: {
    RegisterForm,
  }
}
</script>

<style scoped>

.global{
  position: relative;
}

.bg{
  background-image: url("../assets/table-office-chairs-glass-window-wallpaper-preview.jpg");
  width: 100%;
  height: 91vh;
  background-size: cover;
  background-position: center;
  position: absolute;
  filter: blur(2px);
}

.form1{
  margin: 0 auto;
  position: relative;
  top: 20%
}

</style>