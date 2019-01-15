import CountriesList from '../components/countries/CountriesList.vue'
import Home from '../components/HomePage.vue'
import VotingPage from '../components/VotingPage.vue'
import ResultsPage from '../components/ResultsPage.vue'

export const routes = [
  {
    path: '/',
    name: 'root',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/countries',
    name: 'countries',
    component: CountriesList
  },
  {
    path: '/vote/:id',
    name: 'vote',
    component: VotingPage,
    props: true
  },
  {
    path: '/results',
    name: 'results',
    component: ResultsPage,
    props: true
  },
  {
    path: '*',
    name: 'default',
    redirect: { name: 'home' }
  }
]
