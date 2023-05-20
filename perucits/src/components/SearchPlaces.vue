<template>
  <v-container>
    <v-row class="text-center" style="padding-top: 5%;">

      <v-col class="mb-4">
        <div class="d-flex justify-space-around">
          <v-select
            label="Región natural"
            :items="this.regions"
            variant="solo-filled"
            v-model="this.selectedRegion"
          ></v-select>

          <v-select
            label="Ubicación"
            :items="this.locations"
            variant="solo-filled"
            v-model="this.selectedLocation"
          ></v-select>

          <v-text-field
            v-model="this.search"
            append-icon="mdi-magnify"
            label="Lugar"
            single-line
            hide-details
          ></v-text-field>
          <v-btn
            id="menu3"
            color="primary"
            @click="searchPlaces(this.search)"
          >
            Buscar
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <h2>Resultados</h2>
    <v-divider></v-divider>
    <v-row style="padding-top:5%">
        <div class="d-flex justify-space-around">
          <v-card
            class="mx-auto"
            max-width="344"
            align="center"
            @click="goPlace(place.id)"
            v-for="place in places" :key="place.id"
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
      regions: ["Costa", "Sierra", "Selva"],
      locations:["Norte", "Centro", "Sur"],
      search: "",
    }),
    methods:{
      likePlace(){
        console.log("like");
      },
      goPlace(id){
          this.$router.push("/place")
          this.selectedPlace=id
        },
      showPlace(place){
        let places = [place]
        this.places = places
        console.log(this.places)
      },
      searchPlaces(name){
        
        for(let i=0; i < this.places.lenght; i++){
          this.places[i].name=name ? this.showPlace(this.places[i]) : this.places[i].name

        }


        
      }
    },
    created(){
      axios.get('http://localhost:8080/perucits/place?page=0&size=15')
      .then(response => {
        console.log(response.data);
        this.places = response.data.content;
      })
      .catch(e => {
        console.log(e);
      });
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
