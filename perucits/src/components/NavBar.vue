<template>
    <v-app-bar app style="background-color:#111027; position:static">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          src="https://www.podfeet.com/blog/wp-content/uploads/2021/09/GitHub-Copilot-logo-1040x650.png"
          width="40"
        />

        <span class="title font-weight-light" style="color:white">Modelo Copilot</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
      >
        <span class="mr-2" style="color:white">Proyecto</span>
      </v-btn>
      <v-btn
        target="_blank"
        text
      >
        <span class="mr-2" style="color:white">Prácticas</span>
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
  