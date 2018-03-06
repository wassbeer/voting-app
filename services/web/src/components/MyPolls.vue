<template>
  <v-container fluid class="myPolls">
     <v-layout row> 
        <v-flex xs2 sm3 md4>
      </v-flex>
      <v-flex xs8 sm6 md4>
        <v-list>
          <v-list-tile v-for="poll in polls" v-bind:key="poll" class="listItem">
             <v-list-tile-content><a :href="'/#/poll/' + poll._id">{{poll.pollName}}</a></v-list-tile-content>
             <v-list-tile-content>
              <v-btn @click="deletePoll(poll._id)" color="warning">Delete</v-btn>
              </v-list-tile-content>
          </v-list-tile >
        </v-list>
        </v-flex>
      <v-flex xs2 sm3 md4>
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

.listItem button {
  float: right;
}




</style>
