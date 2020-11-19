<template>
  <div class="about">
    <Navbar/>
    <Services></Services>
  </div>
</template>

<script>
import Services from "../components/all_services/services";
import Navbar from '../components/navfoot/navbar'
export default {
  name: 'Allservices',
  components:{
    Services,
    Navbar
  }
}
</script>