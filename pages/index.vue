<template>
  <div>
    <hero-section />
    <testimonials />
    <!-- <who-we-are />
    <services />   -->
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
