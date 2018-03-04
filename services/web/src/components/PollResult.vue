<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4 color="red lighten-2">
        <h2>Poll Result</h2>
        {{ pollQuestion }}
        {{ results }} <!-- chart.js -->
<canvas id="myChart" width="400" height="400"></canvas>


      </v-flex>
      <v-flex xs4 >
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import PollsService from '@/services/PollsService'
export default {
  data(){
    return {
      pollQuestion: "",
      results: ""
    }
  },
  created () {
      PollsService.getResultsMethod().then((poll) => {
        // 1. get pollQuestion
        // 2. results
        // 3. data for chart

      })

    }
}
</script>

<style scoped>
</style>
