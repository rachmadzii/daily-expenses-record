import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createIntl } from 'vue-intl';

import App from './App.vue';
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());

app.use(
  createIntl({
    locale: 'id',
    defaultLocale: 'id',
  })
);

app.mount('#app');
