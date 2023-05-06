<template>
    <div class="d-flex justify-space-around" align="center" style="padding:10%">
            
          <v-card
            class="mx-auto"
            width="30rem"
            align="center"
            style="padding:3%"
          >
            <h2 >Ingresa a Perucits</h2>

            <v-text-field label="Email" variant="outlined"></v-text-field>
            <v-text-field label="Password" variant="outlined"></v-text-field>


           <v-btn
            id="menu3"
            color="primary"
          >
            Ingresar
          </v-btn>
          <v-btn
            id="menu3"
            color="secondary"
          >
            Registrar
          </v-btn>
     
          </v-card>
          
        </div>
</template>

<script>
  export default {
    name: 'LoginView',
    components: {
  },
    data: () => ({
    }),
    methods:{
      likePlace(){
        console.log("like");
      }
    }
  }
</script>

<style  lang="scss" scoped>
  
</style>
