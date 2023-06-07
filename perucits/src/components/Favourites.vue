<template>
  <v-container>
    

    <h2>Favoritos</h2>
    <v-divider></v-divider>
    <v-row style="padding-top:3%">
      <div class="d-flex justify-space-around flex-wrap" style="margin: 2%;">
        <v-card class="mx-1 my-4" max-width="344" align="center" @click="goPlace(place.place_id)" v-for="place in places"
          :key="place.place_id">

          <div align="center" style="font-weight:bolder; padding:2%; font-size:20px">
            {{ place.name }}
          </div>

          <div align="center" style=" padding:1%">
            {{ place.region }}
          </div>
          <v-img :src="place.image" height="200px"
            cover></v-img>
          
          <svg-icon type="mdi" :path="path" style="margin:2%; color:red" ></svg-icon>
          





        </v-card>

      </div>
    </v-row>
  </v-container>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import axios from 'axios';
import { mdiHeart } from '@mdi/js';
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
    regions: ["Costa", "Sierra", "Selva"],
    locations: ["Norte", "Centro", "Sur"],
    search: "",
    favourites: []
  }),
  methods: {
    likePlace(place) {
      this.favourites.push(place)
      localStorage.setItem("favourites", JSON.stringify(this.favourites))
    },
    goPlace(id) {
      console.log("id es"+id)
      this.$store.state.placeId = id
      console.log("store id"+this.$store.state.placeId)
      this.$router.push("/place")
    },
    showPlace(place) {
      console.log(place)

      this.places = [place]
      console.log(this.places)
    },
    searchPlaces() {
      console.log(this.search)
      for (let i = 0; i <= this.places.length; i++) {
        this.places[i].name == this.search ? this.showPlace(this.places[i]) : console.log("no")
      }
    },
    searchPlaceByRegion() {
      console.log(this.selectedRegion)
      for (let i = 0; i <= this.places.length; i++) {
        this.places[i].region == this.selectedRegion ? this.showPlace(this.places[i]) : console.log("no")
      }
    },
    /*
    checkFavourite(place_id){
      for(let i = 0; i < this.favourites.length; i++){
        if(this.favourites[i].place_id == place_id){
          return true
        }
      }
    }*/
  },
  created() {
      this.favourites = JSON.parse(localStorage.getItem("favourites"))
  }
}
</script>

<style  lang="scss" scoped>
.v-select {
  padding-right: 5%;
}

.v-text-field {
  padding-right: 5%;
}
</style>
