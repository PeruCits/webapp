<template>
  <v-app >
    <div id="main">
      <NavBar />

      <v-main>
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",

  components: {
     NavBar
  },

  data: () => ({
    //
  }),
};
</script>
<style  lang="scss" scoped>
  #main{
    background: linear-gradient(rgba(5,7,12,0.90),rgba(5,7,12,0.90)), url("../src/components/fondo4.jpg") no-repeat center center fixed;
    
    
  }
  
</style>