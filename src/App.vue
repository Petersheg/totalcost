<template>
  <div >
    <Navbar />
      <router-view :key="$route.fullPath"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/navfoot/footer';
import Navbar from './components/navfoot/navbar';
export default {

  components:{
    Footer,
    Navbar
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
