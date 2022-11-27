<template>
  <div class="container-max-width auth-nav-container">
    <div class="pt-12 px-6 d-flex justify-center align-center">
      <div
        class="logo-contianer d-flex flex-column justify-center align-center"
      >
        <nuxt-link class="text-center text-sm-left font-size-md-26" to="/"
          >CHECKER</nuxt-link
        >
        <P class="font-italic"
          >the solution you need for financial liberation</P
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppNavBar',
})
export default class AppNavBar extends Vue {
  isMenuOpen: boolean = false

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
</script>

<style lang="css" scoped>
.border {
  border: 1px solid red;
}
.auth-nav-container {
  width: 100%;
}
</style>
