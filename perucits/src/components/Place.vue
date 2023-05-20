<template>
  <v-container>
    
    <h2>Lugar</h2>
    <v-divider></v-divider>
    <v-row style="padding-top:5%; margin-bottom:3%">
        <div class="d-flex justify-space-around">
          <v-card
            class="mx-auto"
          >
            

            <div  style="font-weight:bolder; padding:1%; font-size:20px; margin-left:2%" >
              {{place.name}}
            </div>

            <div style="margin-left:3%">
              {{place.region}}
            </div>
            <div align="center" style=" display:flex" >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="300px"
                width="450px"
                style="margin:3%"
                cover
                ></v-img>
                <p style="margin:3%">{{place.description}}</p>
            </div>
          </v-card>
          
        </div>
      </v-row>
      <h2>Comentarios</h2>
        <v-divider></v-divider>
        <v-row style="padding-top:5%;">
        <div style="display:flex; flex-direction:column; width: 85%;">
            <v-card style="padding:3%; margin-top:3%" width=100%>
                <div  style="font-weight:bolder; padding:1%; font-size:20px;" >
                    Mi usuario
                </div>
                <v-textarea label="Deja un comentario de este lugar" style="padding:1%; font-size:15px; " >
                </v-textarea>
                <v-btn color="primary" style="margin-top:2%">Comentar</v-btn>
          
            </v-card>
            <v-card style="padding:3%; margin-top:10%" width=100% v-for="comment in comments" :key="comment.id" >
                <div  style="font-weight:bolder; padding:1%; font-size:20px;" >
                    {{comment.client.full_name}}
                </div>
                <div  style="padding:1%; font-size:15px; " >
                    {{comment.comment}}
                </div>
          
            </v-card>
          
        </div>
      </v-row>
  </v-container>
  
</template>

<script>
import axios from 'axios';
  export default {
    name: 'PlaceView',
    components: {
  },
    data: () => ({
      place: undefined,
      comments:[]
    }),
    methods:{
      likePlace(){
        console.log("like");
      },
      getComments(){
        axios.get('http://localhost:8080/perucits/comment/place/'+this.place.place_id)
        .then(response => {
          console.log(response.data);
          this.comments = response.data;
        })
        .catch(e => {
          console.log(e);
        });
      },
    },
    created(){
      
      axios.get('http://localhost:8080/perucits/place/'+this.$store.state.placeId)
      .then(response => {
        console.log(response.data);
        this.place = response.data;
        this.getComments();
      })
      .catch(e => {
        console.log(e);
      });


    }
  }
</script>

<style  lang="scss" scoped>
</style>
