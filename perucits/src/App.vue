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
  
</style>