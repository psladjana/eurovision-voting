import CountriesList from '../components/countries/CountriesList.vue'
import Home from '../components/HomePage.vue'

export const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Root',
    component: Home
  },
  {
    path: '/countries',
    name: 'CountriesList',
    component: CountriesList
  }
]
