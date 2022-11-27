<template>
  <div class="container-max-width py-10 px-8">
    <v-card max-width="600px" shaped class="px-10 mx-auto pb-8 signUp">
      <v-card-title class="d-flex justify-center">
        <p>Register</p>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field label="First Name" outlined></v-text-field>

          <v-text-field label="Last Name" outlined></v-text-field>

          <v-text-field v-model="email" label="email" outlined></v-text-field>

          <v-text-field label="password" outlined></v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions class="d-flex flex-column justify-center align-center">
        <v-btn width="100%" class="mb-5">Create an account</v-btn>
        <v-btn width="100%" class="ml-n1">Sign in</v-btn>
      </v-card-actions>
    </v-card>

    <v-card max-width="600px" shaped class="px-10 mx-auto pb-8">
      <v-card-title class="d-flex justify-center">
        <p>LogIn</p>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field v-model="email" label="email" outlined></v-text-field>

          <v-text-field label="password" outlined></v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions class="d-flex flex-column justify-center align-center">
        <v-btn width="100%" class="mb-5">Sign in</v-btn>
        <v-btn width="100%" class="ml-n1">Create an account</v-btn>
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
}
</script>

<style lang="css" scoped>
.signIn {
  display: block;
}

.signUp {
  display: none;
}
</style>
