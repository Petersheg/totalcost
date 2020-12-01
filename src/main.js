import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import LoadScript from "vue-plugin-load-script";
const $ = window.$;

const app = createApp(App);
const token = localStorage.getItem('token')
if (token) {
    axios.defaults.headers.common['Authorization'] = token
}
app.use(LoadScript);

app.use(store).use(router).mount('#app');