<template>
  <!-- <v-container fluid class="brown lighten-3" v-bind:style="titleDiv"> -->
    <v-layout row class="header" >
      <!-- <v-flex xs4 >
      </v-flex> --> -->
      <v-flex class="titleDiv">
                <div v-if="!$store.state.isUserLoggedIn">
       <h1>Voveō</h1>
<p>Create custom polls with live results</p>
      </div>
           <!-- <v-card color="red lighten-2"> -->
        <v-btn v-if="!$store.state.isUserLoggedIn"
        color="warning"
        align-center="true"
        to="register">Signup</v-btn>
      <!-- </v-card> -->
        <div v-if="$store.state.isUserLoggedIn">
          <h1>Dashboard</h1>
          <h5>What would you like to do today?</h5>
          <div>
            <v-btn 
            dark
          color="warning"
          to="/create/poll">New Poll
          </v-btn>
              <v-btn 
            dark
          color="warning"
          to="/mypolls">My Polls
          </v-btn>
          </div>
        </div>
      </v-flex>
      <!-- <v-flex xs4 >
      </v-flex> -->
    </v-layout>
  <!-- </v-container> -->
</template>

<script>
// export default {
//   data() {
//     return {
//     }
//   }
// };
</script>
<style scoped>

</style>

