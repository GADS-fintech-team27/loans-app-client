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
            <Register />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Register from '../app/Register.vue'
@Component({
  name: 'AppNavBar',
  components: { Register },
})
export default class AppNavBar extends Vue {
  isMenuOpen: boolean = false

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
</script>

<style lang="css" scoped>
.wrapper {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
