<template>
  <div class="container-max-width py-10 px-8">
    <v-card max-width="600px" shaped class="px-10 mx-auto pb-8">
      <v-card-title class="d-flex justify-center">
        <p>LogIn</p>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field
            v-model="signInDetails.email"
            label="email"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="signInDetails.password"
            label="password"
            outlined
          ></v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions class="d-flex flex-column justify-center align-center">
        <v-btn width="100%" @click="login" class="mb-5" outlined color="orange "
          >Sign in</v-btn
        >
        <v-btn
          width="100%"
          class="ml-n1"
          outlined
          color="orange "
          to="/app/register"
          >Create an account</v-btn
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
  signInDetails = {
    email: '',
    password: '',
  }
  login() {
    console.log('calling the login endpoint from the app')
    console.log(this.signInDetails)
    return this.$accessor.login({ ...this.signInDetails })
  }
}
</script>

<style lang="css" scoped></style>
