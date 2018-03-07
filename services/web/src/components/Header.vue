<template>
  <v-layout row class="header">
    <v-flex xs2 sm3 md4>
    </v-flex>
    <v-flex xs8 sm6 md4>
      <div v-if="!$store.state.isUserLoggedIn">
        <h1>Voveō</h1>
        <p>Create custom polls with live results</p>
      </div>
      <v-btn v-if="!$store.state.isUserLoggedIn" color="warning" align-center="true" to="register">Signup</v-btn>
      <div v-if="$store.state.isUserLoggedIn">
        <h1>Dashboard</h1>
        <h5>What would you like to do today?</h5>
        <div>
          <v-btn dark color="warning" to="/create/poll">New Poll
          </v-btn>
          <v-btn dark color="warning" to="/mypolls">My Polls
          </v-btn>
        </div>
      </div>
    </v-flex>
    <v-flex xs2 sm3 md4>
    </v-flex>
  </v-layout>
</template>

<script>
  
</script>

<style scoped>
  
</style>

