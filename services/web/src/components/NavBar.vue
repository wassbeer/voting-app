<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link 
        class="home"
        tag="span"
        to="home">
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

<!-- <v-layout justify-space-around> -->
  <!-- <v-btn v-if="$store.state.isUserLoggedIn"
        flat 
        dark>
      Account
      </v-btn> -->
<v-btn    flat 
        dark  v-if="$store.state.isUserLoggedIn">
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
      user: 'user'
    };
  },
  created() {
   UsersService.get(Store.state.user)
    .then((response) => {
      this.user = response.data.data.name
    })
    .catch(e => {
      this.errors.push(e)
    })
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