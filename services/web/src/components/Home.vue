<template>
  <v-container fluid>
    <br>
    <v-layout>   
         <v-flex xs10 sm4 md4 v-bind:style='homeItem'>  
         <!-- <v-card color="red lighten-2" height="15em"> -->
          <h2>Live Results</h2>
          <p>Live graphs show your results immediately</p>
        <!-- </v-card> -->
      </v-flex>
      <v-flex xs10 sm4 md4 color="red lighten-2" height="15em" v-bind:style='homeItem'>
        <!-- <v-card color="red lighten-2" height="15em"> -->
          <h2>Works Everywhere</h2>
          <p>A responsive desing that works on tablets, smartphones and web</p>
        <!-- </v-card> -->
      </v-flex>
      <v-flex xs10 sm4 md4 v-bind:style='homeItem' >
         <!-- <v-card color="red lighten-2" height="15em" inline-block> -->
            <h2>Social Integration</h2>
            <p>Free included Facebook comments allow your public to immediately comment</p>
        <!-- </v-card> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
  return {
    homeItem: {
      display: "block",
    }
  }
  },
  methods: {
  }
}
</script>


<style scoped>

</style>
