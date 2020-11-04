import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import axios from 'axios'

// props={
//   id:String
// }

// function getParams(){

//   const baseURL = 'http://totalcost.ng';
//   const serviceURL = '/api/v1/services';
//   const url = baseURL+serviceURL;
//     axios.get(url)
//     .then(res => this.id = res.data.data.id)
//     .catch(err => console.log(err));
// }

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
    component: () => import('../views/Allservices.vue')
  },
  {
    path: '/service_listings/:id/vendors',
    name: 'Serviceslist',
    component: () => import( '../views/Servicelist.vue'),
    props: (route)=>({id : route.params.id})
  },
  {
    path: '/merchant_home',
    name: 'Marchant',
    component: () => import('../views/marchanthome.vue')
  },
  {
    path: '/service_details_view/:idd/service/:serid',
    name: 'ServicedetailsV',
    component: () => import('../views/servicedetail-view.vue'),
    props: (route)=>({idd: route.params.idd , serid: route.params.serid})
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode:'history'
})

export default router
