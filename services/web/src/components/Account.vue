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
import UsersService from '@/services/UsersService'
import Store from '@/store/store'
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
        const response = AuthService.update({
        id: Store.state.user, // retrieve the id from store or session or token
        password: this.newPassword
      }).then((update)=> {
        console.log(update)
      })
            } catch (error) {
        console.log(error)
      }
    }
}
}
</script>

<style scoped>
</style>