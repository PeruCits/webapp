<template>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <span class="title font-weight-light">PeruCits</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
        @click="goSearch()"
      >
        <span class="mr-2">Buscar lugares</span>
      </v-btn>
      <v-btn
        target="_blank"
        text
        @click="goFav()"
      >
        <span class="mr-2">Favoritos</span>
      </v-btn>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Usuario</span>
      </v-btn>
    </v-app-bar>
</template>
  
  <script>
    export default {
      name: 'NavBar',
  
      data: () => ({
        
      }),
      methods:{
        goFav(){
          this.$router.push("/favourites")
        },
        goSearch(){
          this.$router.push("/search")
        }
      }
    }
  </script>
  