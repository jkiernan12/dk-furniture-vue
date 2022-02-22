import { createApp } from 'vue/dist/vue.esm-bundler'
// import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import MainPage from './components/MainPage.vue'
import PortfolioPage from './components/PortfolioPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/portfolio', component: PortfolioPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp({})

app.use(router)

app.mount('#app')