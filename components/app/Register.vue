<template>
  <div class="container-max-width py-10 px-8">
    <v-dialog
      v-model="dialog"
      persistent
      transition="dialog-bottom-transition"
      max-width="800"
    >
      <template #activator="{ on }">
        <v-btn outlined color="orange " v-bind="attrs" v-on="on"
          >Register bussiness</v-btn
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
          <p>Register Bussiness</p>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="Business Name" outlined></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Business Type" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="Physical Address" outlined></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Owner Contact" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Collateral security"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="loan amout" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-file-input
                  label="add bussiness photo"
                  outlined
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-text-field label="description" outlined></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="d-flex flex-column justify-center align-center">
          <v-btn width="100%" class="ml-n1">Register</v-btn>
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
}
</script>

<style lang="css" scoped></style>
