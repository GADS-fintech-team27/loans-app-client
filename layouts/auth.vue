<template>
  <v-app class="app">
    <auth-nav-bar />
    <v-main class="content-section pt-4">
      <Nuxt />
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AuthNavBar from '../components/navigation/AuthNavBar.vue'

@Component({
  name: 'auth',
  components: {
    AuthNavBar,
  },
})
export default class Auth extends Vue {}
</script>

<style lang="css" scoped>
.app {
  background-color: aliceblue;
}
</style>
