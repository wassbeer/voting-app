<template>
  <div id="app">
        <v-container fluid>
          <PageHeader></PageHeader>
          <router-view></router-view>
              <img src="./assets/logo.png"> 

        </v-container>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    'PageHeader': PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
