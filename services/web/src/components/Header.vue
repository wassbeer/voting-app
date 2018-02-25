<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4>
        <v-card color="red lighten-2">
        <v-btn v-if="!$store.state.isUserLoggedIn"
        flat 
        dark
        to="register">Signup</v-btn>
      </v-card>
        <div v-if="$store.state.isUserLoggedIn">
          <h2>Dashboard</h2>
          <p>What would you like to do today?</p>
          <div>
            1. row with two columns
            2.1  new polls button
            2.2 my polls button
          </div>
        </div>

<!--         </v-card> -->
      </v-flex>
      <v-flex xs4 >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// export default {
//   data () {
//   },
//   methods: {
//   }
// }
</script>