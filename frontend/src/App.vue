<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
<v-app>
    <v-toolbar density="compact">
      <v-btn icon>
        <v-icon icon="$vuetify"></v-icon>
      </v-btn>    

      <v-btn to="/"  text="Inicio" class="ma-2">  </v-btn>
      <v-btn to="/proyectos"  text="Proyectos">  </v-btn>
      <v-btn to="/donatarios" text="Donatarios"> </v-btn>
      <v-btn to="/donantes"   text="Donantes">   </v-btn>
      <v-btn to="/donaciones"   text="Donaciones">   </v-btn>

      <v-spacer></v-spacer>
      
      <v-btn to="/login"   text="Login">   </v-btn>

    </v-toolbar>


  <v-main>
    <RouterView></RouterView>
  </v-main>
</v-app>
  
</template>

