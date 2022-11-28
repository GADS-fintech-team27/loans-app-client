<template>
  <v-container> <Investors /> </v-container>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import Investors from '../../components/app/Investors.vue'
@Component({
  name: 'appIndexPage',
  layout: 'appLayout',
  components: { Investors },
})
export default class InvestorsPage extends Vue {}
</script>

<style lang="css" scoped></style>
