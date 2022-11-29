<template>
  <div class="hero-container px-4 px-lg-0" data-qa="hero-section">
    <div class="img-container">
      <v-img class="hero-img" cover src="/hero-image.webp" />
    </div>
    <div class="hero-message text-center py-2 py-md-8">
      <h2 class="font-size-16 font-size-md-24">
        Apply for a business loan now
      </h2>
      <p
        class="font-italic font-size-14 font-size-md-24 font-size-md-18 mb-0 pb-2"
      >
        Discover the Possibilities {{ email }}
      </p>
      <v-btn
        outlined
        rounded
        small
        color="red"
        class="text-capitalize font-size-12"
        to="/app"
        @click="loadInvestors"
      >
        get started</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'HeroSection',
})
export default class HeroSection extends Vue {
  $accessor: any
  get email() {
    return this.$accessor.emailAddress
  }

  loadInvestors() {
    // this.$accessor.loadInvestors()
  }
}
</script>

<style lang="css" scoped>
.hero-container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}

.hero-img {
  width: 100%;
  height: 45vh;
}
.hero-message {
  width: 100%;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: aliceblue;
}

@media screen and (min-width: 960px) {
  .hero-img {
    width: 100%;
    height: auto;
  }
}
</style>
