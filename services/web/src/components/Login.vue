<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4 color="red lighten-2">
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
            <br/>
            <br/>
      <h2>
      {{ message }}
      </h2>
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
      message: "",
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
            default:
            console.log('login failed')
            this.message = response.data.data
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