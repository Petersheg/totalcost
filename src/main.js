import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadScript from "vue-plugin-load-script";
import $ from 'jquery';

const app = createApp(App);
app.use(store).use(router).mount('#app');