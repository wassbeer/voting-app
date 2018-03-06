<template>
  <v-container fluid class="account">
    <v-layout row>
      <v-flex >
      </v-flex>
         <v-flex xs8 sm6 md4>  
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
          color="warning"
          @click="changePassword">
          Change Password
        </v-btn>
      </v-flex>
      <v-flex >
      </v-flex>
    </v-layout>
        <v-layout row>
      <v-flex >
      </v-flex>
       <v-flex xs8 sm6 md4>
        <form 
          name="delete-account-form"
          autocomplete="off">
        <v-btn
          dark
          color="warning"
          @click="terminateAccount">
          Terminate Account
        </v-btn>
      </form>
      </v-flex>
      <v-flex  >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthService from "@/services/AuthService";
import UsersService from "@/services/UsersService";
import Store from "@/store/store";
import swal from "sweetalert";

export default {
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
      error: null
    };
  },
  methods: {
    async changePassword() {
      try {
        this.error = [];
        // data validation
        if (
          this.newPassword &&
          this.confirmPassword &&
          this.newPassword === this.confirmPassword
        ) {
          // change password
          AuthService.update({
            id: Store.state.user,
            password: this.newPassword
          }).then((update, err) => {
            if (err) {
              this.err = "Password update failed";
            }
          });
        } else if (!this.newPassword) {
          this.error.push("Please provide a new password.");
        } else if (!this.confirmPassword) {
          this.error.push("Please confirm password.");
        } else if (
          this.newPassword &&
          this.confirmPassword &&
          this.newPassword !== this.confirmPassword
        ) {
          this.error.push("Please provide corresponding passwords");
        }
        // swal with error
      } catch (error) {
        this.error = error;
      }
      swal(this.error[0] || "Password updated");
      if (!this.error[0]) {
        this.$router.push({
          name: "Home"
        });
      }
    },
    async terminateAccount() {
      try {
        swal({
          title: "Once terminated, you will not be able to recover this account!",
          text: "Are you sure you want to suspend your account?",
          icon: "warning",
          buttons: true,
          dangerMode: true
        }).then(willDelete => {
          if (willDelete) {
            UsersService.delete(this.$store.state.user).then(status => {
              swal("Your account has been deleted!", {
                icon: "success"
              });
              this.$store.dispatch("setToken", null);
              this.$store.dispatch("setUser", null);
              this.$router.push({
                name: "Home"
              });
            });
          } else {
            swal("Your account is intact!");
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