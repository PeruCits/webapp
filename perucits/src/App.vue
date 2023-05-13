<template>
  <v-app >
    <div id="main">
      

      <v-main >
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style  lang="scss" scoped>
  
</style>