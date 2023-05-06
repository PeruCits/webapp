<template>
  <v-container>
    <v-row class="text-center" style="padding-top: 5%;">

      <v-col class="mb-4">
        <div class="d-flex justify-space-around">
          <v-select
            label="Región natural"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            variant="solo-filled"
          ></v-select>

          <v-select
            label="Ubicación"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            variant="solo-filled"
          ></v-select>

          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Lugar"
            single-line
            hide-details
          ></v-text-field>
          <v-btn
            id="menu3"
            color="primary"
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
          >
            

            <div align="center" style="font-weight:bolder; padding:2%; font-size:20px" >
              Machu Picchu
            </div>

            <div align="center" style=" padding:1%" >
              Cusco
            </div>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
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
