<template>
  <v-container class="bussiness-container">
    <v-row dense>
      <v-col
        v-for="(item, index) in 12"
        :key="index"
        class="my-2"
        cols="12"
        md="3"
      >
        <v-card flat class="mx-auto" max-width="320">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="150px"
          ></v-img>

          <v-card-title> Annex limited </v-card-title>

          <v-card-subtitle> Hardware</v-card-subtitle>
          <v-card-text
            >Annex limited carries a wide selection of commercial and
            residential high-quality building materials.. These products are
            selected to meet the needs of our customers
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange lighten-2" text> more </v-btn>
            <v-spacer></v-spacer>
            <v-card-title class="orange--text lighten-2">5000 </v-card-title>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'bussiness',
})
export default class Business extends Vue {
  $accessor: any
  get investors() {
    return this.$accessor.investors
  }

  created() {
    console.log('logging investors in the investors page')
    console.log(this.investors)
  }
}
</script>

<style lang="css" scoped>
.bussiness-container {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
