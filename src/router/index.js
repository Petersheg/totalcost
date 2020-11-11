import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/homee.vue';
import Allservices from '../views/all_services.vue';
import ServiceList from '../views/service_list.vue';
import ServicedetailsV from '../views/servicedetails_view.vue';
import Merchant from '../views/marchant_home.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/all_services',
    name: 'Services',
    component: Allservices
  },
  {
    path: '/service_listings/:id/vendors',
    name: 'Serviceslist',
    component: ServiceList,
    props: (route)=>({id : route.params.id})
  },
  {
    path: '/merchant_home',
    name: 'Marchant',
    component: Merchant
  },
  {
    path: '/service_details_view/:idd/service/:serid',
    name: 'ServicedetailsV',
    component: ServicedetailsV,
    props: (route)=>({idd: route.params.idd , serid: route.params.serid})
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode:'history'
})

export default router
