import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import EpisodeCardList from "./components/cards/episodeCardList.vue"
import AddForm from './components/other/addForm.vue'
import "tailwindcss/tailwind.css"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/list", component: EpisodeCardList},
        {path: "/add", component: AddForm}
    ]
});

createApp(App).use(router).mount('#app')
