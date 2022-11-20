<template>
  <div
    class="services-section d-flex justify-center"
    data-qa="services-section"
  >
    services section
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'Services',
})
export default class Services extends Vue {}
</script>

<style lang="css" scoped>
.services-section {
  height: 500px;
}
</style>
