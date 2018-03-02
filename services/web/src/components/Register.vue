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
            label="Name"
            v-model="name"
          ></v-text-field>
          <br>
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
          @click="signup">
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
import AuthService from "@/services/AuthService";
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
      try {
        const response = await AuthService.signup({
          email: this.email,
          name: this.name,
          password: this.password
        }).then(response => {

          // 1. the signup worked out
          
          console.log(response);
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user._id)
          this.$router.push({
            name: "MyPolls",
            params: { id: response.data.user._id }
          });

          // 2. the e-mail address is already taken


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