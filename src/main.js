import { createApp } from 'vue/dist/vue.esm-bundler'
// import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import MainPage from './components/MainPage.vue'

const Portfolio = { template: '<div>Portfolio will go here</div>' }

const routes = [
  { path: '/', component: MainPage },
  { path: '/portfolio', component: Portfolio },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp({})

app.use(router)

app.mount('#app')