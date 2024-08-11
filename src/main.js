import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Crear y montar la aplicación Vue
createApp(App).use(store).use(router).mount('#app');

