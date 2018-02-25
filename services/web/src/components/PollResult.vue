<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4 color="red lighten-2">
       <v-card>
        <h2>Poll Result</h2>
        {{ pollQuestion }}
        {{ results }} <!-- chart.js -->
       </v-card>
      </v-flex>
      <v-flex xs4 >
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
// import PollsService from '@/services/PollsService'
// export default {
//   data () {
//     return {
//       polls: function(){
//       PollsService.getResultsMethod()
//     }
//     }
// }
// }
</script>

<style scoped>
</style>
