import { createRoute, createWebHistory} from 'vue-router'
import Homepage from './pages/Homepage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            components: Homepage,
        }
    ]
})

export { router}