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
            <v-text-field label="Password" variant="outlined" type="password"></v-text-field>

          <div style="display:flex, flex-direction:column">
          <v-btn
            color="primary"
          >
            Ingresar
          </v-btn>
          <v-btn
            color="secondary"
          >
            Registrar
          </v-btn>
          
          
          </div>
           
     
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

    }
  }
</script>

<style  lang="scss" scoped>
  .v-btn{
    margin: 5%;}
</style>
