<template>
  <v-container 
    fluid 
    class="home">
    <v-layout v-bind="binding">
      <v-flex 
        xs12 
        sm12 
        md4>
        <i 
          class="fa fa-line-chart fa-5x" 
          aria-hidden="true"/>
        <br>
        <br>
        <h2>Live Results</h2>
        <p>Live graphs show your results immediately</p>
      </v-flex>
      <v-flex 
        xs12 
        sm12 
        md4 
        height="15em">
        <i 
          class="fa fa-globe fa-5x"
          aria-hidden="true"/>
        <br>
        <br>
        <h2>Works Everywhere</h2>
        <p>A responsive desing that works on tablets, smartphones and web</p>
      </v-flex>
      <v-flex 
        xs12 
        sm12
        md4>
        <i class="fa fa-facebook-square fa-5x"/>
        <br>
        <br>
        <h2>Social Integration</h2>
        <p>Free included Facebook comments allow your public to immediately comment</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      binding() {
        const binding = {};
        if (this.$vuetify.breakpoint.smAndDown) binding.column = true;
        return binding;
      }
    }
  };
</script>

<style scoped>
  
</style>
