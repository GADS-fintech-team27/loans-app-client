<template>
  <div class="container-max-width py-10 px-8">
    <v-dialog
      v-model="dialog"
      persistent
      transition="dialog-bottom-transition"
      max-width="800"
    >
      <template #activator="{ on }">
        <v-btn outlined color="orange " v-on="on"
          >Register as an Investor</v-btn
        >
      </template>
      <v-card max-width="800px" shaped class="px-10 mx-auto pb-8 signUp">
        <div class="d-flex justify-end pt-4">
          <v-btn
            icon
            outlined
            fab
            text
            data-qa="close-dialog-btn"
            @click="dialog = false"
          >
            <v-icon color="primary" large>mdi-window-close</v-icon></v-btn
          >
        </div>
        <v-card-title class="d-flex justify-center">
          <p>Register as an Investor</p>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="investorDetails.fullName"
                  label="full Name"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="investorDetails.occupation"
                  label="occupation"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="investorDetails.telephoneNumber"
                  label="Physical Address"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="investorDetails.emailAddress"
                  label="email"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="investorDetails.rates"
                  label="interest rates"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12"> </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="d-flex flex-column justify-center align-center">
          <v-btn
            width="100%"
            @click="registerInvestor"
            class="ml-n1 text-capitalize"
            href="/app/investors"
            outlined
            color="orange "
            >Register as an Investor</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'Register',
  layout: 'auth',
  components: {},
})
export default class Register extends Vue {
  dialog = false
  investorDetails = {
    fullName: '',
    occupation: '',
    telephoneNumber: '',
    emailAddress: '',
    rates: null,
    profilePhotoUrl: 'string',
  }

  registerInvestor() {
    return this.$accessor.registerInvestor({ ...this.investorDetails })
  }
}
</script>

<style lang="css" scoped></style>
