<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4 >
      </v-flex>
      <v-flex xs4 color="red lighten-2">
        <panel title="Account">
        <form 
          name="change-password-form"
          autocomplete="off">
          <v-text-field
            label="current password"
            v-model="currentPassword"
            autocomplete="provide your current password"
          ></v-text-field>
          <br>
          <v-text-field
            label="new password"
            v-model="newPassword"
            autocomplete="provide a new password"
          ></v-text-field>
        </form>
        <br>
        <v-btn
          dark
          class="cyan"
          @click="changePassword">
          Save changes
        </v-btn>
      </panel>
      </v-flex>
      <v-flex xs4 >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import AuthService from '@/services/AuthService'
// export default {
//   data () {
//     return {
//       currentPassword: '',
//       newPassword: '',
//       error: null
//     }},
//   methods: {
//     // async renewPassword () {
//     // }
// }
// }
</script>

<style scoped>
</style>