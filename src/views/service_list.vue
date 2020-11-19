<template>
  <div class="servicelt">
    <NavbarMember/>
    <Serviceslist :id="id"></Serviceslist>
  </div>
</template>


<script>
import Serviceslist from "../components/all_services/services_list";
import NavbarMember from '../components/navfoot/navbar_member'
export default {
  name: 'Servicelist',
  components:{
    Serviceslist,
    NavbarMember
  },
  props:{
    id:String
  }
}
</script>