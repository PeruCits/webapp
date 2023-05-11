<template>
    <v-container>
    <h2>Editar perfil</h2>
    <v-divider></v-divider>
    <v-row style="padding-top:5%;display:flex;flex-direction:column">
        <div style="display:flex;">
          <div style="font-weight:bolder;font-size:20px; padding-left:5%;padding-top:2%">Usuario:</div>
          <v-text-field label="Usuario" variant="outlined" style="padding-left:7%"></v-text-field>
        </div>
        <div style="display:flex;">
          <div style="font-weight:bolder;font-size:20px; padding-left:5%;padding-top:2%">Contraseña:</div>
          <v-text-field label="Contraseña" variant="outlined" style="padding-left:7%" width="30px" height="40px"></v-text-field>
        </div>
        <div style="display:flex;">
          <div style="font-weight:bolder;font-size:20px; padding-left:5%;padding-top:2%">Nombre:</div>
          <v-text-field label="Nombre" variant="outlined" style="padding-left:7%" width="30px" height="40px"></v-text-field>
        </div>
        <div style="display:flex;">
          <div style="font-weight:bolder;font-size:20px; padding-left:5%;padding-top:2%">Apellido:</div>
          <v-text-field label="Apellido" variant="outlined" style="padding-left:7%" width="30px" height="40px"></v-text-field>
        </div>
      </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'EditProfile',
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
