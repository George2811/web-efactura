<template>
  <v-app>
    <toolbar></toolbar>
    <div class="my-4">
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import Toolbar from '@/components/toolbar.vue'
export default {
  components: {
    Toolbar
  }
}
</script>

<style lang="scss">

</style>
