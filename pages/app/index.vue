<template>
  <v-container> <p>app index page</p> </v-container>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'appIndexPage',
  layout: 'appLayout',
})
export default class AppIndexPage extends Vue {}
</script>

<style lang="css" scoped></style>
