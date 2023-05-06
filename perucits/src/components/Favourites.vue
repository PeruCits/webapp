<template>
  <v-container>
    <h2>Favoritos</h2>
    <v-divider></v-divider>
    <v-row style="padding-top:5%">
        <div class="d-flex justify-space-around">
         
          
        </div>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'FavPlaces',
    components: {
  },
    data: () => ({
      selectedRegion: null,
      selectedLocation: null,
      selectedPlace: null,
    }),
    methods:{
      likePlace(){
        console.log("like");
      }
    }
  }
</script>

<style  lang="scss" scoped>
  .v-select{
    padding-right: 5%;
  }
  .v-text-field{
    padding-right: 5%;
  }
</style>
