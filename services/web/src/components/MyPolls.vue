<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4 color="red lighten-2">
       <v-card>
        <h2>Your Polls</h2>
        <ul>
          <li v-for="poll in polls" v-text="poll">
            <!-- 1. href to the poll
            2. delete button -->
          </li>
        </ul>
       </v-card>
      </v-flex>
      <v-flex xs4 >
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import PollsService from '@/services/PollsService'
import Store from '@/store/store'
export default {
  data(){
    return {
      polls: []
    }
  },
  created () {
    console.log(Store.state.user)
      PollsService.getUserPolls(Store.state.user)
      .then((polls) => {
        console.log(polls)
        polls.data.forEach((data) => {
          this.polls.push(data.pollName);
        })
      })
    }
    }
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
