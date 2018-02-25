<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4 color="red lighten-2">
        <panel title="Login">
        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>
        <br>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
        ></v-text-field>
        <br>
        <v-btn
          dark
          class="cyan"
          @click="login">
          Login
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
//     }
//   },
//   methods: {
//   //   async login () {
//   // //     try {
//   // //       const response = await AuthenticationService.login({
//   // //         email: this.email,
//   // //         password: this.password
//   // //       })
//   // //       this.$store.dispatch('setToken', response.data.token)
//   // //       this.$store.dispatch('setUser', response.data.user)
//   // //       this.$router.push({
//   // //         name: 'mypolls'
//   // //       })
//   // //     } catch (error) {
//   // //       this.error = error.response.data.error
//   // //     }
//   //   }
//   }
// }
</script>

<style scoped>
</style>