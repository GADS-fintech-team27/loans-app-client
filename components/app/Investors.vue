<template>
  <v-container class="bussiness-container">
    <v-row dense class="d-flex justify-space-around">
      <v-col
        v-for="(investor, index) in investors"
        :key="index"
        class="my-2"
        cols="12"
        md="5"
      >
        <v-card
          flat
          border="left"
          colored-border
          type="warning"
          class="mx-auto d-flex investor-information-contianer"
          height="250px"
        >
          <v-row class="d-flex justify-space-between">
            <v-col cols="4" class="">
              <div
                class="profile-photo-container d-flex flex-column align-center justify-center"
              >
                <div>
                  <v-img
                    src="/avatars/avatar1.svg"
                    alt="Avatar"
                    class="investor-img"
                  ></v-img>
                </div>
                <div>
                  <v-card-title class="font-size-16 font-weight-black">
                    {{ investor.fullName }}</v-card-title
                  >
                </div>
              </div>
            </v-col>

            <v-col cols="6" class="d-flex flex-column justify-space-between">
              <div class="d-flex justify-center rating">
                <v-icon v-for="(star, index) in 4" :key="index" color="orange"
                  >mdi-star</v-icon
                >
              </div>
              <div class="content-container">
                <div class="pl-2">
                  <p class="mb-0 font-size-18">{{ investor.occupation }}</p>
                  <p class="font-size-18">{{ investor.emailAddress }}</p>
                  <p class="mb-0 font-size-18 font-weight-black">
                    {{ `Interest rate ${investor.rates}%` }}
                  </p>
                </div>
                <div class="">
                  <v-card-actions class="pa-0">
                    <v-btn color="orange lighten-2" text class="text-lowercase"
                      > View More
                    </v-btn>
                    <v-btn color="orange lighten-2" text class="text-lowercase""
                      >Contact Investor
                    </v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-col>
          </v-row>
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
}
</script>

<style lang="css" scoped>
.bussiness-container {
  max-width: 1400px;
  margin: 0 auto;
}

.rating {
  height: 100%;
}
.investor-information-contianer {
  border-left: 4px solid orange;
}
.profile-photo-container {
  height: 100%;
  width: 100%;
}
</style>
