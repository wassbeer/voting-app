<template>
  <v-container fluid>
    <v-layout row class="login">
      <v-flex >
      </v-flex>
         <v-flex xs8 sm6 md4>  
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
          color="warning"
          @click="login">
          Login
        </v-btn>
            <br/>
            <br/>
      </v-flex>
      <v-flex >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService";
import swal from "sweetalert";

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
        switch(this.email.length){ // data validation
          case false: // no email provided
          swal("Please provide an e-mail address");
          break;
          case true && !this.password: // no password provided
          swal("Please provide a password");
          break;
          default: // credentials validation
            const response = await AuthService.login({
            email: this.email,
            password: this.password
            }).then(response => {
              switch (response.data.success) {
                case true:
                  this.$store.dispatch("setToken", response.data.token);
                  this.$store.dispatch("setUser", response.data.user._id);
                  this.$router.push({
                    name: "MyPolls"
                  });
              break;
              default:
                swal("Warning!", response.data.error.data);
          }});
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>

</style>