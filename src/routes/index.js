import Home from '../pages/Home.vue'
import Sobre from '../pages/Sobre.vue'
import Vulcoes from '../pages/Vulcoes.vue'

const routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'sobre', path: '/sobre', component: Sobre },
    { name: 'vulcoes', path: '/vulcoes', component: Vulcoes }
]

export default routes;