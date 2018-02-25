<template>
  <div id="app">
    <v-app>
       <main>
        <v-content>
          <v-container fluid>
               <nav-bar></nav-bar>
     <page-header></page-header>
          <router-view></router-view>
        </v-container>
        </v-content>
      </main>
    </v-app>
>>>>>>> web
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import PageHeader from '@/components/Header'
export default {
  name: 'app',
  components: {
    NavBar,
    PageHeader
  }
}
</script>

<style src='vuetify/dist/vuetify.min.css'>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.danger-alert {
  color: red;
}

main{
  margin-top: 50em;
}

</style> 

<style scoped>
    /* local styles */
</style> 