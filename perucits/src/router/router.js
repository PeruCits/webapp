import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchPlaces from '../components/SearchPlaces.vue'
import Favourites from '../components/Favourites.vue'
import Login from '../components/Login.vue'
import PlaceView from '../components/Place.vue'
import EditProfile from '../components/EditProfile.vue'
Vue.use(VueRouter)

const routes = [
    {path: '/login', name: 'LoginView', component: Login},
    {path: '/search', name: 'SearchPlaces', component: SearchPlaces},
    {path: '/favourites', name: 'FavPlaces', component: Favourites},
    {path: '/place', name: 'PlaceView', component: PlaceView},
    {path: '/edit', name: 'EditProfile', component: EditProfile},
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router