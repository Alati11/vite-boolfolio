import { createRouter, createWebHistory} from 'vue-router'
import Homepage from './pages/Homepage.vue'
import ProjectIndex from './pages/projects/Index.vue'
import Contact from './pages/projects/Contact.vue'
import ProjectShow from './pages/projects/Show.vue'
import NotFound from './pages/404.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: Homepage,
        },
        {
            path:'/portfolio',
            name:'projects.index',
            component: ProjectIndex
        },
        {
            path: '/portfolio/:slug',
			name: 'projects.show',
			component: ProjectShow,
        },
        {
			path: '/contatti',
			name: 'contacts',
			component: Contact,
		},
        {
            path:'/:pathMacth(.*)*',
            name: 'not-found',
            component: NotFound,
        },  
    ],
})

export { router}