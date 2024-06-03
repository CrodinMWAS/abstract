import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUser, faCalendar, faLocationDot, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
// library.add(faUser, faCalendar, faLocationDot, faForward, faBackward)

createApp(App)
.use(router)
// .component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')