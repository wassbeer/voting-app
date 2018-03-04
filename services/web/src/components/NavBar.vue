<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link 
        class="home"
        tag="span"
        to="/">
        Voting App
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark
        to="login">
        Login
      </v-btn>
      
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark
        to="register">
        Sign Up
      </v-btn>
<v-btn class="mr-4"  flat 
        dark  v-if="$store.state.isUserLoggedIn" to="mypolls">
  Hello {{ user }}
        </v-btn>

<v-btn         flat 
        dark 
        to="account">
<v-icon v-if="$store.state.isUserLoggedIn"
        class="material-icons"
        >settings</v-icon>
        </v-btn>
      <v-btn 
       v-if="$store.state.isUserLoggedIn"
        flat 
        dark 
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import UsersService from "@/services/UsersService";
import Store from "@/store/store";
export default {
  data() {
    return {
      user: "user"
    };
  },
  created: function() {
    if (Store.state.isUserLoggedIn) {
      UsersService.get(Store.state.user)
        .then(response => {
          this.user = response.data.data.name;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.isUserLoggedIn;
    }
  },
  watch: {
    loggedIn(value) {
      if (value) {
        UsersService.get(Store.state.user)
          .then(response => {
            this.user = response.data.data.name;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "Home"
      });
    }
  }
};
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #e9e;
}
</style>