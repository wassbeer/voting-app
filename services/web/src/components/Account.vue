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
            label="new password"
            v-model="newPassword"
            autocomplete="provide your new password"
          ></v-text-field>
          <br>
          <v-text-field
            label="new password"
            v-model="confirmPassword"
            autocomplete="confirm a new password"
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
import AuthService from '@/services/UsersService'
export default {
  data () {
    return {
      newPassword: '',
      confirmPassword: '',
      error: null
      }},
  methods: {
    async changePassword () {
      try{
        const response = UsersService.update({
        id: req.session.id, // retrieve the id from store or session or token
        password: this.newPassword
      })
     console.log('succesfully updated')
      } catch (error) {
        this.error = error.response.data
      }
    }
}
}
</script>

<style scoped>
</style>