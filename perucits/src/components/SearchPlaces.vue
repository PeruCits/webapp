<template>
  <v-container>
    <v-row class="text-center" style="padding-top: 5%;">

      <v-col class="mb-4">
        <div class="d-flex justify-space-around">
          <v-select label="Región natural" :items="this.regions" variant="solo-filled"
            v-model="selectedRegion" @change="searchPlaceByRegion(selectedRegion)"></v-select>

          <v-select label="Ubicación" :items="this.locations" variant="solo-filled"
            v-model="selectedLocation" @change="searchPlaceByLocation(selectedLocation)"></v-select>

          <v-text-field v-model="search" append-icon="mdi-magnify" label="Lugar" single-line hide-details></v-text-field>
          <v-btn id="menu3" color="primary" @click="searchPlaces()">
            Buscar
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <h2>Resultados</h2>
    <v-divider></v-divider>
    <v-row style="padding-top:3%">
      <div class="d-flex justify-space-around flex-wrap" style="margin: 2%;">
        <v-card class="mx-1 my-4" max-width="344" align="center"  v-for="place in places"
          :key="place.place_id">

          <div align="center" style="font-weight:bolder; padding:2%; font-size:20px">
            {{ place.name }}
          </div>

          <div align="center" style=" padding:1%">
            {{ place.region }}
          </div>
          <v-img :src="place.image" height="200px"
            cover @click="goPlace(place.place_id)"></v-img>
          
          <div v-if="checkFavourite(place.place_id)" align="center" style="font-weight:bolder; padding:2%; font-size:20px" @click="likePlace(place)">
            <svg-icon type="mdi" :path="path" style="margin:2%; color:red" ></svg-icon>
          </div>
          <div v-else align="center" style="font-weight:bolder; padding:2%; font-size:20px" @click="likePlace(place)">
            <svg-icon type="mdi" :path="path" style="margin:2%;" ></svg-icon>
          </div>
          

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
  name: 'SearchPlaces',
  components: {
    SvgIcon
  },
  data: () => ({
    selectedRegion: null,
    selectedLocation: null,
    selectedPlace: null,
    path: mdiHeart,
    places: [],
    regions: ["Ninguno","costa", "sierra", "selva"],
    locations: ["Ninguno","norte", "centro", "sur"],
    search: "",
    favourites: []
  }),
  methods: {
    checkFavourite(place_id){
      for(let i = 0; i < this.favourites.length; i++){
        if(this.favourites[i].place_id == place_id){
          return true
        }
      }
    },
    checkFavourites(){
      if(localStorage.getItem("favourites") == null){
        let array = []
        localStorage.setItem("favourites", JSON.stringify(array))
      }
      else{
        this.favourites = JSON.parse(localStorage.getItem("favourites"))
      }
    },
    likePlace(place) {
      console.log(place)
      console.log("añadido a fav")
      this.checkFavourites()
      if (this.checkFavourite(place.place_id)){
        console.log("ya esta en fav")
        this.dislikePlace(place)
        return
      }

      if (this.favourites == null){
        this.favourites = [place]
      }else{
        this.favourites.push(place)
      }
      console.log(this.favourites)
      localStorage.setItem("favourites", JSON.stringify(this.favourites))
    },
    dislikePlace(place) {
      let newarray = []
      for(let i = 0; i < this.favourites.length; i++){
        if(this.favourites[i].place_id != place.place_id){
          console.log("+1");
          newarray.push(this.favourites[i])
        }
      }
      console.log(newarray.length)
      this.favourites = newarray
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
      this.search = ""
    },
    searchPlaceByRegion(region) {
      console.log(region)

      let places = []
      console.log(this.places)
      for (let i = 0; i < this.places.length; i++) {
        console.log(this.places[i].region)
        if(this.places[i].region == region){
          console.log("si")
          places.push(this.places[i])
        }
        else{
          console.log("no")
        }
      }
      console.log("caca")
      this.places = places
      console.log(places)

    },
    searchPlaceByLocation(location) {

      let places = []
      console.log(this.places)
      for (let i = 0; i < this.places.length; i++) {
        console.log(this.places[i].location)
        if(this.places[i].location == location){
          console.log("si")
          places.push(this.places[i])
        }
        else{
          console.log("no")
        }
      }
      console.log("caca")
      this.places = places
      console.log(places)
    },
    
  },
  created() {
    
    axios.get('https://perucitsback.herokuapp.com/perucits/place?page=0&size=15')
      .then(response => {
        console.log(response.data);
        this.places = response.data.content;
      })
      .catch(e => {
        console.log(e);
      });
      this.favourites = JSON.parse(localStorage.getItem("favourites"))

    this.checkFavourites()
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
