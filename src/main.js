import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@/config/router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './style.css';
// import '../mock/index.js';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(Antd);
app.use(pinia);

app.mount('#app');
