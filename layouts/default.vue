<template>
  <v-app class="app">
    <nav-bar />
    <v-main class="content-section pt-4">
      <Nuxt />
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavBar from '../components/navigation/NavBar.vue'
// import Footer from '~/components/navigation/Footer.vue'

@Component({
  name: 'DefaultLayout',
  components: {
    NavBar,
    // Footer,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="css" scoped>
.app {
  background-color: aliceblue;
}
</style>
