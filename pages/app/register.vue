<template>
  <div class="container-max-width py-10 px-8">
    <v-card max-width="600px" shaped class="px-10 mx-auto pb-8 signUp">
      <v-card-title class="d-flex justify-center">
        <p>Register</p>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form v-model="formValid">
            <v-text-field
              v-model="signUpDetails.firstname"
              label="First Name"
              :rules="generalRule"
              outlined
            ></v-text-field>

            <v-text-field
              label="Last Name"
              v-model="signUpDetails.lastname"
              :rules="generalRule"
              outlined
            ></v-text-field>

            <v-text-field
              v-model="signUpDetails.email"
              label="email"
              :rules="emailRules"
              outlined
            ></v-text-field>

            <v-text-field
              label="password"
              v-model="signUpDetails.password"
              :rules="generalRule"
              outlined
            ></v-text-field>
            <v-text-field
              label="confirm password"
              :rules="generalRule"
              outlined
            ></v-text-field>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions class="d-flex flex-column justify-center align-center">
        <v-btn
          width="100%"
          outlined
          color="orange "
          @click="register"
          :disabled="!formValid"
          class="mb-5"
          >Create an account</v-btn
        >
        <v-btn
          width="100%"
          class="ml-n1"
          outlined
          color="orange "
          to="/app/auth"
          >Sign in</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'authPage',
  layout: 'auth',
  components: {},
})
export default class AuthPage extends Vue {
  showSignIn = false
  showSignUp = false
  formValid = false
  signUpDetails = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  }

  generalRule = [(value) => !!value || 'required field']

  emailRules = [(value) => /.+@.+/.test(value) || 'E-mail must be valid']

  register() {
    return this.$accessor.register({ ...this.signUpDetails })
  }
}
</script>

<style lang="css" scoped></style>
