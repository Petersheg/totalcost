import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Allservices from '@/views/all_services.vue';
import ServiceList from '@/views/service_list.vue';
import ServicedetailsV from '@/views/servicedetails_view.vue';
import Merchant from '@/views/marchant_home.vue';


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
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
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
    props: (route)=>({idd: route.params.idd , serid: route.params.serid}),
    // children:[
    //   {
    //     path: '',
    //     name: 'About',
    //     component:()=> import('../components/all_services/detail_view/about_view.vue')
    //   },
    //   {
    //     path: '',
    //     name: 'Pricing',
    //     component:()=> import('../components/all_services/detail_view/pricing.vue')
    //   },
    //   {
    //     path: '',
    //     name: 'Review',
    //     component:()=> import('../components/all_services/detail_view/Review.vue')
    //   },
    //   {
    //     path: '',
    //     name: 'Question',
    //     component:()=> import('../components/all_services/detail_view/questions.vue')
    //   },
    // ]
  },
  {
    path:'/login',
    name:'Login',
    component:()=> import('@/views/event_merchant/login.vue')
  },
  {
    path:'/signup',
    name:'SignUp',
    component:()=> import('@/views/event_merchant/sign_up.vue')
  },
  {
    path:'/f_password',
    name:'Fpassword',
    component:()=> import('@/views/event_merchant/f_password.vue')
  },
  {
    path:'/vendor_profile_view',
    name:'Vendorprofileview',
    component:()=> import('@/views/user/vendor_profile_view.vue'),
    // props:(route)=>({id: route.params.id})
  }
  
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //mode:'history'
});

export default router
