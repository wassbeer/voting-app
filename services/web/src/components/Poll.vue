<template>
  <v-container fluid>
    <v-layout row id="root">
      <v-flex xs4 >
        <!-- <v-card> -->
          <h2>
            {{ pollTitle }}
          </h2>
        <!-- </v-card> -->
      </v-flex>
      <v-flex xs4 color="red lighten-2">
        <!-- <v-card> -->
<form>
              <v-checkbox
      v-bind:key="option" v-for="option in options"
    > {{ option }} </v-checkbox>
    </form>
          <!-- <ul>
            <li v-bind:key="option" v-for="option in options" v-text="option"></li>
          </ul> -->
        <!-- </v-card> -->
      </v-flex>
      <v-flex xs4 >
        <!-- <v-card> -->
          <p>Sorry, comments is no MVP feature yet</p>
        <!-- </v-card> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PollsService from '@/services/PollsService'
export default {
  data () {
    return {
      pollTitle: "",
      options: []
    }
},
    created(){
      console.log(this.$route.params.id)
    PollsService.getPoll(this.$route.params.id)
    .then((poll) => {
      console.log(poll)
      Object.entries(poll.data).forEach(([key, value]) => {
        if(typeof value === 'number'){
          this.options.push(key)
          console.log('this.options')
          console.log(this.options)
        }
      })
      this.pollTitle = poll.data.pollName
    })
    }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>