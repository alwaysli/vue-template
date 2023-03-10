import { createApp } from 'vue'
import App from './App.vue'
import router from '@/config/router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './style.css'


const app = createApp(App);

app.use(router);
app.use(Antd);
app.mount('#app')
