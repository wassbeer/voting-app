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
import swal from 'sweetalert';

let SweetAlert = {
  methods: {
    alert(options) {
        swal(options)
      },
      alertSuccess({
        title = "Success!", text = "That's all done!", timer = 1000, showConfirmationButton = false
      } = {}) {
        this.alert({
          title: title,
          text: text,
          timer: timer,
          buttons: true,
          icon: 'success'
        });
      },
      alertError({
        title = "Error!", text = "Oops...Something went wrong"
      } = {}) {
        this.alert({
          title: title,
          text: text,
          type: 'error'
        });
      },
      confirm(callback, options) {
        options = Object.assign({
          title: "Are you sure?",
          text: "Are you sure you want to do that?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes",
          closeOnConfirm: false
        }, options);

        swal(options, callback);
      }
  },
}

export default {
  mixins: [SweetAlert],
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
          this.result = "Password Updated";
        });
      } catch (error) {
        console.log(error);
      }
    },
    async terminateAccount() {
      try {
        this.confirm(() => {
          this.alertSuccess({
            title: "Confirm Succcessful!"
          });
        });
        // const response = UsersService.delete(this.$store.state.user).then(
        //   status => {
        //     this.$router.push({
        //       name: "Home"
        //     });
        //   }
        // );
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>

</style>