<template>
  <v-container fluid class="createPoll">
    <v-layout row>
      <v-flex xs2 sm4 md4>
      </v-flex>
              <v-flex xs8 sm6 md4 v-if="!created">
        <form 
          name="create-poll-form"
          autocomplete="off">
          <v-text-field
            label="Poll"
            v-model="poll"
                    ></v-text-field>
          <br>
                <div v-for="option in options" :key="option">
                   <v-text-field
            label="Option"
            v-model="option.value"
          ></v-text-field>
          </div>
    <v-btn @click="addRow">More Options</v-btn>
        </form>
        <br>
        <v-btn
          dark
          color="warning"
          @click="createPoll">
          Submit
        </v-btn>
      </v-flex>
       <v-flex xs2 sm3 md4>
      </v-flex>
      </v-layout>
      <v-layout row>
       <v-flex xs2 sm3 md4>
      </v-flex>
              <v-flex xs8 sm6 md4 v-if="created">
              <h1>Congratulations!</h1>
              <p>Your poll has been <a :href="pollLink">posted</a></p>
              </v-flex>
    <v-flex xs2 sm3 md4>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PollsService from "@/services/PollsService";
import Store from "@/store/store";
import swal from "sweetalert"

export default {
  data() {
    return {
      poll: "",
      options: [{ value: "" }, { value: "" }],
      error: null,
      created: false,
      pollLink: "",
      message: ""
    };
  },
  methods: {
    async createPoll() {
      // data validation
      if(!this.poll.length){
        return swal("Please provide a poll name")
      } else if(!this.options[0].value.length || !this.options[1].value.length){
        return swal("Please submit at least two options")
      } else {
            try {
        let pollOptions = [];
        this.options.forEach(option => {
          pollOptions.push(option.value);
        });
        const response = await PollsService.register({
          pollName: this.poll,
          pollOptions: pollOptions,
          userId: Store.state.user
        }).then(response => {
          this.created = true;
          this.pollLink = "/#/poll/" + response.data.data._id;
        });
      } catch (error) {
        console.log(error);
      }
      }
    },
    addRow() {
      this.options.push({
        value: ""
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