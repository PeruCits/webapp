<template>
  <div id="main" style="margin-top:0">
    <h1 style="text-align:center; padding-top:1%;padding-bottom:1%; color:white; font-weight:bolder">Backend</h1>
    <v-card
      elevation="24"
      width="40%"
      class="mx-auto"
    >
      
      <v-carousel
        height="400"
        hide-delimiter-background
        show-arrows="hover"
        pause
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
        <div style="display:flex" >
          <v-card-title>{{ slide }}</v-card-title>
          <v-card-title style="background-color:#61CD4C ;position:absolute; right:0">{{cobertura[i]}}</v-card-title>
        </div>
        

        
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xt3rY2RQh_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <h1 style="text-align:center; padding-top:1%;padding-bottom:1%; color:white; font-weight:bolder">Frontend</h1>
    <v-card
      elevation="24"
      width="40%"
      class="mx-auto"
    >
      
      <v-carousel
        height="400"
        hide-delimiter-background
        show-arrows="hover"
        pause
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
        <div style="display:flex" >
          <v-card-title>{{ slide }}</v-card-title>
          <v-card-title style="background-color:#61CD4C ;position:absolute; right:0">{{cobertura[i]}}</v-card-title>
        </div>
        

        
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xt3rY2RQh_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <h1 style="text-align:center; padding-top:1%;padding-bottom:1%; color:white; font-weight:bolder">Testing</h1>
    <v-card
      elevation="24"
      width="40%"
      class="mx-auto"
    >
      
      <v-carousel
        height="400"
        hide-delimiter-background
        show-arrows="hover"
        pause
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
        <div style="display:flex" >
          <v-card-title>{{ slide }}</v-card-title>
          <v-card-title style="background-color:#F0E44D ;position:absolute; right:0">{{cobertura[i]}}</v-card-title>
        </div>
        

        
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xt3rY2RQh_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <h1 style="text-align:center; padding-top:1%;padding-bottom:1%; color:white; font-weight:bolder">Seguridad</h1>
    <v-card
      elevation="24"
      width="40%"
      class="mx-auto"
    >
      
      <v-carousel
        height="400"
        hide-delimiter-background
        show-arrows="hover"
        pause
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
        <div style="display:flex" >
          <v-card-title>{{ slide }}</v-card-title>
          <v-card-title style="background-color:#4D72F0 ;position:absolute; right:0">{{cobertura[i]}}</v-card-title>
        </div>
        

        
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xt3rY2RQh_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'green',
          'blue',
          'green',
          'yellow',
        ],
        cobertura: [
          '66.67%',
          '100%',
          '75%',
          '50%',
        ],
        slides: [
          "DRY: Don't Repeat Yourself",
          'No inventar',
          'Legibilidad antes que optimización',
          'Programar solo código necesario ',
        ],
        slides2: [
          "Evitar los globales ",
          'Usar [] en vez de New Array() ',
          'Usar el operador ternario ',
        ],
      }
    },
  }
</script>

<style  lang="scss" scoped>
  .v-card{
    margin: 2%;
    margin-bottom: 15%;
  }
  
</style>
