import { createApp } from 'vue'
import App from './App.vue'

// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

// import the fontawesome icon component
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { arrow-right-long  } from '@fortawesome/free-solid-svg-icons';


import { router } from './router'

// library.add(arrow)

createApp(App).use(router).mount('#app')
