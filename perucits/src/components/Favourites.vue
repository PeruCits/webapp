<template>
  <v-container>
    <h2>Favoritos</h2>
    <v-divider></v-divider>
    <v-row style="padding-top:5%">
        <div class="d-flex justify-space-around flex-wrap">
          <v-card
            class="mx-auto"
            max-width="344"
            align="center"
            @click="goPlace()"
            v-for="place in this.places" :key="place.place_id"
          >
            

            <div align="center" style="font-weight:bolder; padding:2%; font-size:20px" >
              {{place.name}}
            </div>

            <div align="center" style=" padding:1%" >
              {{place.region}}
            </div>
            <v-img
              src="https://cdn.pixabay.com/photo/2016/08/30/18/30/cusco-1631689_960_720.jpg"
              height="200px"
              cover
            ></v-img>

           <svg-icon type="mdi" :path="path" style="margin:2%; color:red" @onclick="likePlace()"></svg-icon>


          </v-card>
          
        </div>
      </v-row>
  </v-container>
</template>

<script>
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiHeart } from '@mdi/js';
  import axios from 'axios';
  export default {
    name: 'FavPlaces',
    components: {
    SvgIcon
  },
    data: () => ({
      selectedRegion: null,
      selectedLocation: null,
      selectedPlace: null,
      path: mdiHeart,
      places: [],
    }),
    methods:{
      likePlace(){
        console.log("like");
      },
      getFavourites(){
        //create an axios request to get favourites places from the user
        axios.get('http://localhost:8080/perucits/favorite?page=0&size=5')
        .then(response => {
          this.places = response.data.content;
        })
        .catch(error => {
          console.log(error);
        })
      
      },
    },
    created(){
      this.getFavourites()
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
