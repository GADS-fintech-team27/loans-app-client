<template>
  <div>
    <hero-section />
    <about />
    <testimonials />
    <contact-us />
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'indexPage',
})
export default class IndexPage extends Vue {}
</script>

<style lang="css" scoped></style>
