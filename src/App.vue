<template>
  <div >
      <router-view :key="$route.fullPath"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/navfoot/footer';
import axios from 'axios';
//import Navbar from './components/navfoot/navbar';
export default {

  components:{
    Footer,
  },
  methods:{
      getImg(src){
          return require('../../assets'+ src);
      },
      loadaScript(src){
          const script = document.createElement("script");
          script.setAttribute('src', src);
          script.async=true;
          document.body.appendChild(script)
      },
  },
  created(){
    axios.interceptors.response.use(undefined, function (error) {
    if (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
    
          originalRequest._retry = true;
          store.dispatch('LogOut')
          return router.push('/login')
      }
    }
  })
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  @import url('./assets/css/base.min.css');
  @import url('https://unpkg.com/aos@next/dist/aos.css');
  @import url('./assets/css/slick.css');
  @import url('./assets/css/style.css');
  @import url('./assets/css/font-awesome.css');
</style>
