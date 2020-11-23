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
  },
  {
    path:'/vendor_profile',
    name:'VendorProfile',
    component:()=> import('@/views/event_merchant/vendor_profile.vue'),
    // props:(route)=>({id: route.params.id})
  },
  {
    path:'/edit_profile',
    name:'EditProfile',
    component:()=> import('@/views/event_merchant/edit_profile.vue'),
    // props:(route)=>({id: route.params.id})
  },
  {
    path:'/new_service_1',
    name:'NewService1',
    component:()=> import('@/views/event_merchant/new_service_category.vue'),
  },
  {
    path:'/new_service_2',
    name:'NewService2',
    component:()=> import('@/views/event_merchant/new_service_about.vue'),
  },
  {
    path:'/new_service_3',
    name:'NewService3',
    component:()=> import('@/views/event_merchant/new_service_media.vue'),
  },
  {
    path:'/new_service_4',
    name:'NewService4',
    component:()=> import('@/views/event_merchant/new_service_pricing.vue'),
  },
  
  {
    path:'/account_Settings',
    name:'AccountSetting',
    component:()=> import('@/views/event_merchant/account_settings.vue'),
  },
  {
    path:'/mng_service',
    name:'MngService',
    component:()=> import('@/views/event_merchant/mng_service.vue'),
  },
  {
    path:'/mng_gallery',
    name:'MngGallery',
    component:()=> import('@/views/event_merchant/mng_gallery.vue'),
  },
  {
    path:'/vendor_services',
    name:'VendorServices',
    component:()=> import('@/views/event_merchant/vendor_services.vue'),
  },
  {
    path:'/service_details',
    name:'ServiceDetails',
    component:()=> import('@/views/event_merchant/service_details.vue'),
  },
  
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //mode:'history'
});

export default router
