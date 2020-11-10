<template>
  <div class="servicelt">
    <Serviceslist :id="id"></Serviceslist>
  </div>
</template>


<script>
import Serviceslist from "../components/all_services/ServicesList";
export default {
  name: 'Servicelist',
  components:{
    Serviceslist
  },
  props:{
    id:String
  }
}
</script>