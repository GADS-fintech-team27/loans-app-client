<template>
  <v-container> <Business /> </v-container>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import Business from '../../components/app/Bussiness.vue'
@Component({
  name: 'appIndexPage',
  layout: 'appLayout',
  components: { Business },
})
export default class AppIndexPage extends Vue {}
</script>

<style lang="css" scoped></style>
