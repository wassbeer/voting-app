<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4 color="red lighten-2">
        <panel title="Sign Up">
        <form 
          name="sign-up-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <v-btn
          dark
          class="cyan"
          @click="register">
          Register
        </v-btn>
      </panel>
      </v-flex>
      <v-flex xs4 >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import AuthenticationService from '@/services/AuthService'
// export default {
//   data () {
//     return {
//       email: '',
//       password: '',
//       error: null
//     }},
//   methods: {
//     // async register () {
//       //       try {
//         // const response = await 
//         AuthService.register()
//       //     email: this.email,
//       //     password: this.password
//       //   })
//       //   this.$store.dispatch('setToken', response.data.token)
//       //   this.$store.dispatch('setUser', response.data.user)
//       //   this.$router.push({
//       //     name: 'mypolls'
//       //   })
//       // } catch (error) {
//       //   this.error = error.response.data.error
//       // }
//     // }
// }
// }

</script>

<style scoped>
</style>