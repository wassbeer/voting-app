<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4 color="red lighten-2">
              <h1
          >{{ result }}</h1>
        <form 
          name="change-password-form"
          autocomplete="off">
          <v-text-field
            label="new password"
            type="password"
            v-model="newPassword"
            autocomplete="provide your new password"
          ></v-text-field>
          <br>
          <v-text-field
            label="new password"
            type="password"
            v-model="confirmPassword"
            autocomplete="confirm a new password"
          ></v-text-field>
        </form>
        <br>
        <v-btn
          dark
          class="cyan"
          @click="changePassword">
          Change Password
        </v-btn>
      </v-flex>
      <v-flex xs4 >
      </v-flex>
    </v-layout>
        <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4 color="red lighten-2">
        <form 
          name="delete-account-form"
          autocomplete="off">
        <v-btn
          dark
          class="cyan"
          @click="terminateAccount">
          Terminate Account
        </v-btn>
      </form>
      </v-flex>
      <v-flex xs4 >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService";
import UsersService from "@/services/UsersService";
import Store from "@/store/store";
export default {
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
      result: "",
      error: null
    };
  },
  methods: {
    async changePassword() {
      try {
        const response = AuthService.update({
          id: Store.state.user, // retrieve the id from store or session or token
          password: this.newPassword
        }).then(update => {
          console.log(update);
          this.result = "Password Updated";
        });
      } catch (error) {
        console.log(error);
      }
    },
    async terminateAccount() {
      try {
        const response = UsersService.delete(this.$store.state.user).then(
          status => {
            console.log(status);
            this.result = "Account Terminated";
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>

</style>