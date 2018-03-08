<template>
  <div id="app">
    <v-app>
      <main>
        <v-content>
          <v-container fluid>
            <nav-bar/>
            <page-header/>
            <router-view/>
          </v-container>
        </v-content>
      </main>
    </v-app>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageHeader from "@/components/Header";
export default {
  name: "app",
  components: {
    NavBar,
    PageHeader
  }
};
</script>

<style src='./assets/css/mycss.css'/> 