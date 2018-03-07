<template>
  <v-container fluid class="poll">
    <v-layout row v-bind="binding">
      <v-flex xs12 sm12 md4> 
          <h2>
            {{ pollTitle }}
          </h2>
      </v-flex>
       <v-flex xs12 sm12 md4>
<form>
              <v-checkbox
      v-bind:key="option" v-for="option in options" :label="option" v-model="selected" :value="option"
    > {{ option }}</v-checkbox>
    <v-btn @click="vote" color="warning">Vote</v-btn>
    </form>
      </v-flex>
      <v-flex xs12 sm12 md4 >
          <p id="comments">Sorry, comments is no MVP feature yet</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PollsService from "@/services/PollsService";
import swal from "sweetalert";

export default {
  data() {
    return {
      pollTitle: "",
      options: [],
      selected: []
    };
  },
  computed: {
    binding() {
      const binding = {};
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true;
      return binding;
    }
  },
  created() {
    PollsService.getPoll(this.$route.params.id).then(poll => {
      Object.entries(poll.data).forEach(([key, value]) => {
        if (typeof value === "number") {
          this.options.push(key);
        }
      });
      this.pollTitle = poll.data.pollName;
    });
  },
  methods: {
    vote() {
      switch(!this.selected.length){
        case true:
        swal("Please tick a box!")
        break;
        case false:
        this.selected.length > 1 ?
        (this.selected = [],
        swal("Please tick one box!")) :
        PollsService.put(this.$route.params.id, {
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
  }}}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>