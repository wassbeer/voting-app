<template>
  <v-container fluid>
    <br>
    <br>
    <br>
    <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4>
                <div v-if="!$store.state.isUserLoggedIn">
        <v-card color="red lighten-2">
       <h1>Voveō</h1>
<p>Create custom polls with live results</p>
      </v-card>
      </div>
        <div v-if="$store.state.isUserLoggedIn">
          <h1>Dashboard</h1>
          <h5>What would you like to do today?</h5>
          <div>
            <v-btn 
            dark
          class="cyan"
          to="/create/poll">New Poll</v-btn>
              <v-btn 
            dark
          class="cyan"
          @click="myPolls">My Polls</v-btn>

          </div>
        </div>
      </v-flex>
      <v-flex xs4 >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Store from '@/store/store'
export default {
  methods: {
    myPolls: function(){
       this.$router.push({
                name: "MyPolls",
                params: { id: Store.state.user }
              });
    }
  }
}
</script>

