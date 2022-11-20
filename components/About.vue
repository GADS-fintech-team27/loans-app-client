<template>
  <div
    class="about-section d-flex align-center justify-center"
    data-qa="about-section"
  >
    <div class="text-center">
      <h3>Why Checker?</h3>
      <p class="font-italic">
        We offer business owners financial solution,literacy,Investment
        assortment ...
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'About',
})
export default class About extends Vue {}
</script>

<style lang="css" scoped>
.about-section {
  height: 30vh;
}
</style>
