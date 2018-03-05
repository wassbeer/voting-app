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
      </v-flex>
      <v-flex xs4 >
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
        switch(this.email.length > 0){ // data validation
          case false:
          swal("Please provide an e-mail address");
          break;
          case true && !this.password:
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
                swal(response.data.data);
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