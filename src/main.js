import { createApp } from 'vue'
import App from './App.vue'

//import router
import router from './router'

// import bootstrap, popper dan jQuery
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.bundle'

// createApp(App).mount('#app')
const app = createApp(App)

//use vue router
app.use(router)

app.mount('#app')