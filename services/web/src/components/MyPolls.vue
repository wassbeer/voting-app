<template>
  <v-container fluid class="myPolls">
    <v-layout row>
      <v-flex xs2 sm3 md4>
      </v-flex>
        <v-flex xs8 sm6 md4>
        <h2>Your Polls</h2>
      </v-flex>
      <v-flex xs2 sm3 md4>
      </v-flex>
    </v-layout>
     <v-layout row>
        <v-flex xs4 sm4 md4 >
      </v-flex>
        <ul>
          <li v-for="poll in polls" v-bind:key="poll">
            <v-flex xs2 sm2 md2>
            <a :href="'/#/poll/' + poll._id" >{{poll.pollName}}</a>
            </v-flex>
            <v-flex xs2 sm2 md2 >
            <v-btn @click="deletePoll(poll._id)" color="warning">Delete</v-btn>
            </v-flex>
          </li>
        </ul>
       <!-- </v-card> -->
      <v-flex xs4 sm4 md4>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import PollsService from "@/services/PollsService";
import Store from "@/store/store";
export default {
  data() {
    return {
      polls: [],
      message: ""
    };
  },
  created() {
    PollsService.getUserPolls(Store.state.user).then(polls => {
      polls.data.forEach(data => {
        this.polls.push(data);
      });
    });
  },
  methods: {
    deletePoll: function(pollId) {
      PollsService.delete(pollId).then(result => {
        this.polls = [];
        PollsService.getUserPolls(Store.state.user).then(polls => {
          polls.data.forEach(data => {
            this.polls.push(data);
          });
        });
      });
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
