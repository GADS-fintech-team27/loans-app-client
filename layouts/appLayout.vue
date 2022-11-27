<template>
  <v-app class="app">
    <app-nav-bar />
    <v-main class="content-section pt-4">
      <Nuxt />
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AppNavBar from '../components/navigation/AppNavBar.vue'

@Component({
  name: 'appLayout',
  components: {
    AppNavBar,
  },
})
export default class Auth extends Vue {}
</script>

<style lang="css" scoped>
.app {
  background-color: aliceblue;
}
</style>
