
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'




     // Vuetify
     import '@mdi/font/css/materialdesignicons.css'
     import { createVuetify } from 'vuetify'
     import * as components from 'vuetify/components'
     import * as directives from 'vuetify/directives'
     import 'vuetify/styles'

     import '@mdi/font/css/materialdesignicons.css'

     import colors from 'vuetify/util/colors'


      const vuetify = createVuetify({
       components,
       directives,
     }) 

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

