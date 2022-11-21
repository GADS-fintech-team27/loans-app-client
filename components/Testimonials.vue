<template>
  <div
    class="testimonials-section container-max-width py-10 px-4 px-lg-0"
    data-qa="testimonials-section"
  >
    <div class="header">
      <h3 class="text-center py-10">Testimonials</h3>
      <p class="text-center pb-6 font-italic">
        Since 2022, we’ve been helping clients successfully finance their
        businesses, and provide them with Investment opportunities. At CHECKER,
        client satisfaction is our main priority. Below are the few client that
        we have worked with.
      </p>
    </div>
    <v-row class="d-flex justify-space-around">
      <v-col cols="12" md="3" class="">
        <div class="img-container">
          <v-img src="testimonial-img-1.webp" />
        </div>
        <div class="content text-center py-4">
          <h5 class="text-center py-4">Name</h5>
          <p>message from the person</p>
        </div>
      </v-col>
      <v-col cols="12" md="3" class="">
        <div class="img-container">
          <v-img src="testimonial-img-2.webp" />
        </div>
        <div class="content text-center py-4">
          <h5 class="text-center py-4">Kris Michaels</h5>
          <p>message from the client</p>
        </div>
      </v-col>
      <v-col cols="12" md="3" class="">
        <div class="img-container">
          <v-img src="testimonial-img-3.webp" />
        </div>
        <div class="content text-center py-4">
          <h5 class="">name</h5>
          <p>message from the person</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'Testimonials',
})
export default class Testimonials extends Vue {}
</script>

<style lang="css" scoped>
.services-section {
  height: 500px;
}
</style>
