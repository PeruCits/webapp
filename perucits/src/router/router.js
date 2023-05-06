import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchPlaces from '../components/SearchPlaces.vue'
import Favourites from '../components/Favourites.vue'
Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'SearchPlaces', component: SearchPlaces},
    {path: '/search', name: 'SearchPlaces', component: SearchPlaces},
    {path: '/favourites', name: 'FavPlaces', component: Favourites},
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router