<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4 color="red lighten-2" v-if="!created">
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
          class="cyan"
          @click="createPoll">
          Submit
        </v-btn>
      </v-flex>
            <v-flex xs4 color="red lighten-2" v-if="created">
              <h1>Congratulations!</h1>
              <p>Your poll has been posted to {{ pollLink }}</p>
              </v-flex>
      <v-flex xs4 >
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
      poll: "",
      options: [{ value: " " }, { value: "" }],
      error: null,
      created: false,
      pollLink: "",
      message: ""
    };
  },
  methods: {
    async createPoll() {
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
          this.pollLink =
            "http//:localhost:8080/#/poll/" + response.data.data._id;
        });
      } catch (error) {
        console.log(error);
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