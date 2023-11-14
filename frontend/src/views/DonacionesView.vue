
<template>
  <v-container>
    <v-card class="pa-4 mx-auto" max-width="600">
       <v-card-title>Registro de Donaciones</v-card-title>
       <v-card-item>

            <v-form validate-on="submit lazy" @submit.prevent="submit">

              <v-combobox
              v-model="form.id_proyecto"
              label="Nombre del Proyecto"
              :items="['Escuela Digna', 'Uniforme Escolar', 'Rescate Canino', 'Operacion Mochila', 'Colonia Limpia', 'Almuerzo Universitario']"
              ></v-combobox>

              <v-combobox
              v-model="form.id_donatario"
              label="Nombre del Donatario"
              :items="['RICARDO', 'IVONE', 'ERIKA', 'MANU', 'AVID', 'KARMEN']"
              ></v-combobox>
              
              <v-combobox
              v-model="form.id_donador"
              label="Nombre del Donante"
              :items="['UABC', 'CFE', 'Otis', 'Milla', 'Noah', 'Otro']"
              ></v-combobox>                       
              
              <v-text-field
                v-model="form.monto"
                label="Monto"
              ></v-text-field>    
              
             <v-text-field
                v-model="form.fecha"
                type="date"
                label="Fecha"
              ></v-text-field>  

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
   id_proyecto: null,
   id_donatario: null,
   id_donador: null,  
   monto:null,
   fecha:null,    
});


function submit()
{

 fetch("http://localhost:3000/proyecto/donaciones", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(form.value),
 }).then((data) => data.json())
 .then((data) => {
     form.value.monto = null;
     form.value.fecha = null;
     toast('Donacion Guardada Satisfactoriamente');
 })
 .catch((er) => {
  console.log(er);
 }); 
 
};
</script>