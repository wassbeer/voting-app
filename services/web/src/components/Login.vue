<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4 color="red lighten-2">
        <!-- <panel title="Login"> -->
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
      <!-- </panel> -->
      </v-flex>
      <v-flex xs4 >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        }).then(response => {
          console.log(response);
          // 1. the login worked out
          switch (response.data.success) {
            case true:
              this.$store.dispatch("setToken", response.data.token);
              this.$store.dispatch("setUser", response.data.user._id);
              this.$router.push({
                name: "MyPolls",
                params: { id: response.data.user._id }
              });
              break;

            // 2. the login did not work because of a false password
            // 2.1 error message, staying on the same page
            
            // 3. the login did not work because the email is not registered
            // 3. error message, stay on the same page
            default:
            console.log('login failed')

              break;
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>

</style>