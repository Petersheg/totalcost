import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import LoadScript from "vue-plugin-load-script";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
//import ProgressBar from 'vuejs-progress-bar';
const $ = window.$;

const app = createApp(App);
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = token
}
app.use(LoadScript);
app.use(VueSweetalert2);
//app.use(ProgressBar);

app.use(store).use(router).mount('#app');