<template>
  <v-container class="bussiness-container">
    <v-row dense>
      <v-col
        v-for="(business, index) in businesses"
        :key="index"
        class="my-2"
        cols="12"
        md="3"
      >
        <v-card
          flat
          class="mx-auto d-flex flex-column align-space-between justify-space-between"
          max-width="320"
          height="450px"
        >
          <div>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>
            <v-card-title> {{ business.businessName }} </v-card-title>
            <v-card-subtitle> {{ business.businessType }}</v-card-subtitle>
            <v-card-text>{{ business.description }} </v-card-text>
          </div>

          <div>
            <v-card-actions class="">
              <v-btn outlined color="orange " @click="giveLoan(business.id)">
                Give Loan
              </v-btn>
              <v-spacer></v-spacer>
              <v-card-title class="orange--text lighten-2"
                >{{ `${business.loanAmount}` }}
              </v-card-title>
            </v-card-actions>
          </div>
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
  $router: any
  get businesses() {
    return this.$accessor.businesses
  }

  giveLoan(id: number) {
    this.$router.push(`/app/investors?selected-business=${id}`)
  }
}
</script>

<style lang="css" scoped>
.bussiness-container {
  max-width: 1400px;
  margin: 0 auto;
}
.border {
  border: 1px solid green;
}
</style>
