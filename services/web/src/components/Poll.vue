<template>
  <v-container fluid>
    <v-layout row id="root">
      <v-flex xs4 >
        <v-card>
          <h2>
            {{ pollTitle }}
          </h2>
          <p>
            {{ creater }}
          </p>
        </v-card>
      </v-flex>
      <v-flex xs4 color="red lighten-2">
        <v-card>
          <ul>
            <!-- <li v-bind:key="option" v-for="option in options" v-text="option"></li> -->
          </ul>
        </v-card>
      </v-flex>
      <v-flex xs4 >
        <v-card>
          <p>Sorry, comments is no MVP feature yet</p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import PollsService from '@/services/PollsService'
// export default {
//   el: '#root',
//   data () {
//     return {
//       pollTitle: "",
//       creater: "",
//       options: []
//     }
//     PollsService.get()
// }
// }
</script>

<style scoped>
</style>