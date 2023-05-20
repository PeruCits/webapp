<template>
  <div id="main" style="margin-top:0;display:flex;flex-direction: column;">
    <section class="bg-light py-5">
      <div class="container px-5">
          <div class="row gx-5 justify-content-center">
              <div class="col-xxl-8">
                  <div class="text-center my-5">
                      <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">Implementación de un Modelo de Mejores Prácticas de Desarrollo de Software con Github Copilot</span></h2>
                      <p class="lead fw-light mb-4">El proyecto busca crear un modelo que sirva de apoyo a desarrolladores que usen GitHub Copilot en sus proyectos laborales o personales y puedan obtener código con buenas prácticas de desarrollo de parte de ella.</p>
                      
                  </div>
              </div>
          </div>
      </div>
    </section>
    <section class="page-section" id="services">
            <div class="container">
                <div class="text-center" style="margin:5%">
                    <h2 class="section-heading text-uppercase">Etapas del proyecto</h2>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <svg height="60px" width="60px" class="svg-inline--fa fa-circle fa-stack-2x text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg>
                        </span>
                        <h4 class="my-3">Recopilación y análisis de las prácticas</h4>
                        <p class="text-muted">Se analizaron prácticas para cada categoría y realizaron pruebas de concepto para ver cómo GitHub Copilot abordaba dicha práctica.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <svg height="60px" width="60px" class="svg-inline--fa fa-one fa-stack-1x fa-inverse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="one" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="desktop"><path fill="#111027" d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"></path></svg>
                          </span>
                        <h4 class="my-3">Diseño del modelo de buenas prácticas</h4>
                        <p class="text-muted">Se creó un modelo visual que sirva de apoyo para rápidamente saber qué práctica soporta GitHub Copilot y tener presente en qué porcentaje la herramienta aborda dicha práctica.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <svg height="60px" width="60px" class="svg-inline--fa fa-laptop fa-stack-1x fa-inverse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="#111027" d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"></path></svg>
                        </span>
                        <h4 class="my-3">Implementación del modelo con una aplicación web</h4>
                        <p class="text-muted">Se puso en práctica toda la información recopilada y el modelo para usar GitHub Copilot de forma correcta y crear una aplicación web que cumpla con buenas prácticas de desarrollo</p>
                    </div>
                </div>
            </div>
        </section>
    <section class="py-5">
      <div class="row gx-5 justify-content-center" style="padding-bottom:3%">
          <div class="text-center my-5">
              <h1  style="text-align:center; padding-top:1%;padding-bottom:2%; color:#111027; font-weight:bolder"><span class="text-gradient d-inline">Prácticas de backend</span></h1>
              <p class="lead fw-light mb-4">Estas prácticas fueron probadas con el lenguaje de programación Java</p>
          </div>
              
      </div>
      <div style="display:flex; flex-wrap:wrap; flex-direction: row; justify-content: flex-start">
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
          <img width="40%" height="100%" src="../../src/components/play (2).png" />
          <div style="display:flex; flex-direction:column;justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de backend</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">1. DRY: Don't Repeat Yourself</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">66.67%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width: 66.67%; background-color:green" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
          <img width="40%" height="100%" src="../../src/components/play (2).png" />
          <div style="display:flex; flex-direction:column;justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de backend</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">2. No inventar</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">100%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width:100%; background-color:cyan" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
          <img width="40%" height="100%" src="../../src/components/play (2).png" />
          <div style="display:flex; flex-direction:column;justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de backend</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">3. Legibilidad antes de optimización</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">75%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width: 75%; background-color:green" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
          <img width="40%" height="100%" src="../../src/components/play (2).png" />
          <div style="display:flex; flex-direction:column;justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de backend</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">4. Programar solo código necesario</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width: 50%; background-color:yellow" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>
    </div>
    </section>
    <section class="py-5">
    <div class="row gx-5 justify-content-center" style="padding-bottom:3%">
          <div class="text-center my-5">
              <h1  style="text-align:center; padding-top:1%;padding-bottom:2%; color:#111027; font-weight:bolder"><span class="text-gradient d-inline">Prácticas de frontend</span></h1>
              <p class="lead fw-light mb-4">Estas prácticas fueron probadas con el lenguaje de programación Javascript (No se toman en cuenta prácticas con HTML ni CSS)</p>
          </div>
              
      </div>
    <div style="display:flex; flex-wrap:wrap; align-content: space-around;">
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
          <img width="40%" height="100%" src="../../src/components/play (2).png" />
          <div style="display:flex; flex-direction:column;justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de frontend</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">1. Evitar globales</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">100%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width: 100%; background-color:cyan" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
          <img width="40%" height="100%" src="../../src/components/play (2).png" />
          <div style="display:flex; flex-direction:column;justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de frontend</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">2. Usar [ ] en vez de New Array( )</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">66.67%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width: 66.67%; background-color:green" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
          <img width="40%" height="100%" src="../../src/components/play (2).png" />
          <div style="display:flex; flex-direction:column;justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de frontend</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">3. Usar operador ternario</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">66.67%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width: 66.67%; background-color:green" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>
    </div>
    </section>
    <section class="py-5">
      <div class="row gx-5 justify-content-center" style="padding-bottom:3%">
          <div class="text-center my-5">
              <h1  style="text-align:center; padding-top:1%;padding-bottom:2%; color:#111027; font-weight:bolder"><span class="text-gradient d-inline">Prácticas de testing</span></h1>
              <p class="lead fw-light mb-4">Estas prácticas fueron probadas con Jest para realizar el testing del frontend</p>
          </div>
              
      </div>
      <div style="display:flex; flex-wrap:wrap; align-content: space-around;">
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
          <img width="40%" height="100%" src="../../src/components/play (2).png" />
          <div style="display:flex; flex-direction:column;justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de testing</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">1. No duplicar la lógica de implementación</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">66.67%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width: 66.67%; background-color:green" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
          <img width="40%" height="100%" src="../../src/components/play (2).png" />
          <div style="display:flex; flex-direction:column;justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de testing</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">2. Usar it en vez de test</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width: 50%; background-color:yellow" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
          <img width="40%" height="100%" src="../../src/components/play (2).png" />
          <div style="display:flex; flex-direction:column;justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de testing</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">3. La estructura de los tres pasos</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width: 50%; background-color:yellow" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>



    </div>
    </section>
    <section class="py-5">
      <div class="row gx-5 justify-content-center" style="padding-bottom:3%">
          <div class="text-center my-5">
              <h1  style="text-align:center; padding-top:1%;padding-bottom:2%; color:#111027; font-weight:bolder"><span class="text-gradient d-inline">Prácticas de seguridad</span></h1>
              <p class="lead fw-light mb-4">Estas prácticas fueron probadas con Java y Javascript en los entornos backend y frontend</p>
          </div>
              
      </div>
    <div style="display:flex; flex-wrap:wrap; align-content: space-around;">
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
          <img width="40%" height="100%" src="../../src/components/play (2).png" />
          <div style="display:flex; flex-direction:column;justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de seguridad</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">1. Cookies seguras</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">66.67%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width: 66.67%; background-color:green" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
          <img width="40%" height="100%" src="../../src/components/play (2).png" />
          <div style="display:flex; flex-direction:column;justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de seguridad</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">2. Prácticas criptográficas</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">66.67%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width: 66.67%; background-color:green" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
          <img width="40%" height="100%" src="../../src/components/play (2).png" />
          <div style="display:flex; flex-direction:column; justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de seguridad</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">3. Control de accesos</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">66.67%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width: 66.67%; background-color:green" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>
      <v-card
        elevation="24"
        width="30rem"
        height="15rem"
        class="mx-auto"
        style="display:flex"
        href="https://youtu.be/xt3rY2RQh_0"
        target="_blank"
      >
 
        <img width="40%" height="100%" src="../../src/components/play (2).png" />
        <div style="display:flex; flex-direction:column;justify-content:center; padding:15px">
          <span style="color:grey; margin-bottom:10px ">Prácticas de seguridad</span>
          <span style="color:black; font-size:25px; font-weight:bold; margin-bottom:10px ">4. Administración de sesiones</span>
          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">66.67%</div>
          <div class="progress progress-sm mr-2">
            <div class=""  role="progressbar" style="width: 66.67%; background-color:green" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </v-card>

      
    </div>
    </section>
    
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>

<style  lang="scss" scoped>
  .v-card{
    margin-bottom: 10%;
  }
  
</style>
