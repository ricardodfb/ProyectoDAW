
  <template>
    <v-container>
      <v-card class="pa-4 mx-auto" max-width="600">
         <v-card-title>Registro de Proyectos</v-card-title>
         <v-card-item>

              <v-form validate-on="submit lazy" @submit.prevent="submit">
<!--                 <v-text-field
                  v-model="form.id"
                  label="# Proyecto"
                ></v-text-field> -->

                <v-text-field
                  v-model="form.nombre"
                  label="Nombre"
                ></v-text-field>

                <v-textarea 
                  v-model="form.descripcion"
                  label="Descripcion"
                  maxlength="250"
                ></v-textarea>

                <v-file-input
                  label="Subir Imagen"
                  variant="filled"
                  prepend-icon="mdi-camera"
                ></v-file-input>

                <VSonner position="top-center" />
                <v-btn
                  color="indigo-darken-4"
                  type="submit"
                  block
                  class="mt-2"
                  text="Guardar"
                  size="large"
                ></v-btn>

                
              </v-form>

          </v-card-item>

        </v-card>
    </v-container>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { VSonner, toast } from 'vuetify-sonner';

  toast('Event has been created', {
  cardProps: {
    color: 'success',
     },
   });

  const form = ref({
     id: "",
     nombre: "",
     descripcion: "",
     image: null,     
  });


  function submit()
  {

     fetch("http://localhost:3000/proyecto/proyectos", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(form.value),
     }).then((data) => data.json())
     .then((data) => {
         form.value.nombre = '';
         form.value.descripcion = '';
         toast('Proyecto Guardado Satisfactoriamente');
     })
     .catch((er) => {
      console.log(er);
     }); 
     
  };
</script>

