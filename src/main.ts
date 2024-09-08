import { createApp } from 'vue'
import '@/styles/style.scss'
import router from "./router";
import App from './App.vue'

const app = createApp(App);
app.use(router).mount("#app");