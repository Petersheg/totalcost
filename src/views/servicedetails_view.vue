<template>
  <div class="about">
    <NavbarMember/>
    <ServicedetailsV :idd="idd" :serid="serid"></ServicedetailsV>
  </div>
</template>

<script>
import ServicedetailsV from "@/components/all_services/detail_view/service_detail_view";
import NavbarMember from '@/components/navfoot/navbar_member'
export default {
  components:{
    ServicedetailsV,
    NavbarMember
  },
  props:{
    idd: String,
    serid: String
  }
}
</script>