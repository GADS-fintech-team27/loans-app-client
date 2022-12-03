<template>
  <div data-qa="nav-bar">
    <div class="wrapper pt-12 px-6">
      <v-row justify-space-between>
        <v-col cols="12" md="6" class="d-flex justify-center justify-md-start">
          <div class="logo-contianer">
            <nuxt-link class="text-center text-sm-left font-size-md-26" to="/"
              >CHECKER</nuxt-link
            >
            <P class="font-italic"
              >the solution you need for financial liberation</P
            >
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center justify-md-end">
          <div class="d-flex align-center">
            <register v-if="currentPath === '/app'" />
            <investors-dialog v-if="currentPath === '/app/investors'" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Register from '../app/Register.vue'
import InvestorsDialog from '../app/InvestorsDialog.vue'
@Component({
  name: 'AppNavBar',
  components: { Register, InvestorsDialog },
})
export default class AppNavBar extends Vue {
  isMenuOpen: boolean = false
  $router: any
  $route: any

  currentPath = ''
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
  mounted() {
    this.currentPath = this.$route.path
  }
}
</script>

<style lang="css" scoped>
.wrapper {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
