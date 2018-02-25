<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4 color="red lighten-2">
          <panel title="Create Poll">
        <form 
          name="create-poll-form"
          autocomplete="off">
          <v-text-field
            label="Poll"
            v-model="Poll"
            autocomplete="provide a poll"
          ></v-text-field>
          <br>
          <v-text-field
            label="Answer"
            v-model="Answer"
            autocomplete="provide an answer"
          ></v-text-field>
        </form>
        <br>
        <v-btn
          dark
          class="cyan"
          @click="createPoll">
          Submit
        </v-btn>
      </panel>
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
//       poll: '',
//       answer: '',
//       error: null
//     }
//   }
//     ,
//   methods: {
//     // async createPoll () {
//     //   //       try {
//     //   //   const response = await PollsService.register({
//     //   //     poll: this.poll,
//     //   //     answer: this.password // forEach((answer))
//     //   //   })
//     //   // } catch (error) {
//     //   //   this.error = error.response.data.error
//     //   // }
//     // }
// }
// }

</script>

<style scoped>
</style>