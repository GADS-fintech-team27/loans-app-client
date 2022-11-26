<template>
  <div class="contactus-section py-10 px-4 px-lg-0" data-qa="contactus-section">
    <v-row>
      <v-col cols="12" md="5"></v-col>
      <v-col cols="12" md="5">
        <div>
          <v-row>
            <v-col>
              <v-text-field
                label="Name*"
                hint="Enter your name"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Email*"
                hint="Enter your email"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              ><v-text-field
                label="Phone"
                hint="Enter your phone number"
                required
              ></v-text-field
            ></v-col>
            <v-col
              ><v-text-field
                v-model="address"
                label="Address"
                hint="Enter your address"
                required
              ></v-text-field
            ></v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field label="subject" required></v-text-field>
            </v-col>
            <v-col cols="12"
              ><v-text-field label="message" required></v-text-field
            ></v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'ContactUs',
})
export default class ContactUs extends Vue {}
</script>

<style lang="css" scoped>
.who-we-are {
  height: 500px;
}
</style>
