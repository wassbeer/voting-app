<template>
  <v-container fluid>
    <v-layout row id="root">
      <v-flex xs6 sm4 md4> 
          <h2>
            {{ pollTitle }}
          </h2>
      </v-flex>
       <v-flex xs6 sm4 md4 color="red lighten-2">
<form>
              <v-checkbox
      v-bind:key="option" v-for="option in options" :label="option" v-model="selected" :value="option"
    > {{ option }}</v-checkbox>
    <v-btn @click="vote" color="warning">Vote</v-btn>
    </form>
      </v-flex>
      <v-flex sm4 md4 hidden-xs-only >
          <p>Sorry, comments is no MVP feature yet</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PollsService from "@/services/PollsService";
import swal from "sweetalert"

export default {
  data() {
    return {
      pollTitle: "",
      options: [],
      selected: []
    };
  },
  created() {
    PollsService.getPoll(this.$route.params.id).then(poll => {
      Object.entries(poll.data).forEach(([key, value]) => {
        if (typeof value === "number") {
          console.log(key);
          this.options.push(key);
        }
      });
      this.pollTitle = poll.data.pollName;
    });
  },
  methods: {
    vote() {
      !this.selected.length
        ? swal("Please tick a box!")
        : PollsService.put(this.$route.params.id, {
            pollOptions: this.selected[0],
            pollName: this.pollTitle
          }).then(result => {
            this.$router.push({
              name: "PollResult",
              params: {
                id: this.$route.params.id
              }
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