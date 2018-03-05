<template>
  <v-container fluid>
    <v-layout row class="register">
      <v-flex >
      </v-flex>
    <v-flex xs8 sm6 md4>        <!-- <panel title="Sign Up"> -->
        <form 
          name="sign-up-form"
          autocomplete="off">
           <v-text-field
            label="Name"
            v-model="name"
          ></v-text-field>
          <br>
          <v-text-field
            label="E-mail"
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
          color="warning"
          @click="signup">
          Register
        </v-btn>
      <!-- </panel> -->
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
      name: "",
      error: null
    };
  },
  methods: {
    async signup() {
      if (!this.email || !this.password || !this.name) {
        swal("Please provide your name, e-mail and password");
      } else if (this.email.indexOf("@") < 0) {
        swal("Please provide a valid e-mail address");
      } else if (this.password.length < 8) {
        swal("Please provide a password of at least 8 characters");
      } else {
        const response = await AuthService.signup({
          email: this.email,
          name: this.name,
          password: this.password
        }).then(response => {
          switch (response.data.statusCode) {
            case 500:
              return swal("The e-mail address is already taken");
            default:
              swal("Succesfully registered!", "You are now being redirected to your polls page!", "success");
              this.$store.dispatch("setToken", response.data.token);
              this.$store.dispatch("setUser", response.data.user._id);
              this.$router.push({
                name: "MyPolls",
                params: { id: response.data.user._id }
              });
          }
        });
      }
    }
  }
};
</script>

<style scoped>

</style>