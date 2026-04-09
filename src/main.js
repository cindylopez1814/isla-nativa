import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/tokens.css'

import HomeView    from './views/HomeView.vue'
import ContactView from './views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',         component: HomeView },
    { path: '/reservar', component: ContactView },
  ],
})

createApp(App).use(router).mount('#app')
