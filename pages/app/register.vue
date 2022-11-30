<template>
  <div class="container-max-width py-10 px-8">
    <v-card max-width="600px" shaped class="px-10 mx-auto pb-8 signUp">
      <v-card-title class="d-flex justify-center">
        <p>Register</p>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field
            v-model="signUpDetails.firstname"
            label="First Name"
            outlined
          ></v-text-field>

          <v-text-field
            label="Last Name"
            v-model="signUpDetails.lastname"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="signUpDetails.email"
            label="email"
            outlined
          ></v-text-field>

          <v-text-field
            label="password"
            v-model="signUpDetails.password"
            outlined
          ></v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions class="d-flex flex-column justify-center align-center">
        <v-btn width="100%" @click="register" class="mb-5"
          >Create an account</v-btn
        >
        <v-btn width="100%" class="ml-n1" to="/app/auth">Sign in</v-btn>
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
  signUpDetails = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  }

  register() {
    return this.$accessor.register({ ...this.signUpDetails })
  }
}
</script>

<style lang="css" scoped></style>
