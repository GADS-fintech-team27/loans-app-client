<template>
  <div class="hero-container" data-qa="here-section">
    <div>
      <v-img class="hero-img" cover max-height="600" src="/hero-image.webp" />
      <div class="hero-message text-center py-8">
        <h2>Apply for a business loan now</h2>
        <p class="font-italic">Discover the Possibilities</p>
        <v-btn outlined rounded color="red" class="text-capitalize">
          get started</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'HeroSection',
})
export default class HeroSection extends Vue {}
</script>

<style lang="css" scoped>
.hero-container {
  position: relative;
}

.border {
  border: 1px solid red;
}
.hero-message {
  width: 100%;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: aliceblue;
}
</style>
