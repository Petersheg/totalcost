import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Allservices from '@/views/all_services.vue';
import ServiceList from '@/views/service_list.vue';
import ServicedetailsV from '@/views/servicedetails_view.vue';
import Merchant from '@/views/marchant_home.vue';
import store from '../store';


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
    component:()=> import('@/views/event_merchant/login.vue'),
    meta: { guest: true },
  },
  {
    path:'/signup',
    name:'SignUp',
    meta: { guest: true },
    component:()=> import('@/views/event_merchant/sign_up.vue'),
  },
  {
    path:'/f_password',
    name:'Fpassword',
    component:()=> import('@/views/event_merchant/f_password.vue')
  },
  {
    path:'/act_verification',
    name:'verification',
    component:()=> import('@/views/event_merchant/act_verification.vue')
  },
  {
    path:'/vendor_profile_view',
    name:'Vendorprofileview',
    component:()=> import('@/views/user/vendor_profile_view.vue'),
    meta: {requiresAuth: true},
  },
  {
    path:'/vendor_profile',
    name:'VendorProfile',
    component:()=> import('@/views/event_merchant/vendor_profile.vue'),
    meta: {requiresAuth: true},
  },
  {
    path:'/user_profile',
    name:'UserProfile',
    component:()=> import('@/views/event_merchant/user_profile.vue'),
    meta: {requiresAuth: true},
  },
  {
    path:'/edit_profile',
    name:'EditProfile',
    component:()=> import('@/views/event_merchant/edit_profile.vue'),
    meta: {requiresAuth: true},
  },
  {
    path:'/new_service_category',
    name:'NewService1',
    component:()=> import('@/views/event_merchant/new_service_category.vue'),
    meta: {requiresAuth: true},
  },
  {
    path:'/new_service_about',
    name:'NewService2',
    component:()=> import('@/views/event_merchant/new_service_about.vue'),
    meta: {requiresAuth: true},
  },
  {
    path:'/new_service_media',
    name:'NewService3',
    component:()=> import('@/views/event_merchant/new_service_media.vue'),
    meta: {requiresAuth: true},
  },
  {
    path:'/new_service_pricing',
    name:'NewService4',
    component:()=> import('@/views/event_merchant/new_service_pricing.vue'),
    meta: {requiresAuth: true},
  },
  
  {
    path:'/account_Settings',
    name:'AccountSetting',
    component:()=> import('@/views/event_merchant/account_settings.vue'),
    meta: {requiresAuth: true},
  },
  {
    path:'/mng_service',
    name:'MngService',
    component:()=> import('@/views/event_merchant/mng_service.vue'),
    meta: {requiresAuth: true},
  },
  {
    path:'/mng_gallery',
    name:'MngGallery',
    component:()=> import('@/views/event_merchant/mng_gallery.vue'),
    meta: {requiresAuth: true},
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
  mode:'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    const role = localStorage.getItem('role');
    if (store.getters.isAuthenticated && role === "User") {
      next('User_profile');
      return;
    }else if(store.getters.isAuthenticated && role === "Admin"){
      next('/vendor_profile');
      return;
    }
    next();
  } else {
    next();
  }
});

export default router
