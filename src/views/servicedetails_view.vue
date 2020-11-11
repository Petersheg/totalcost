<template>
  <div class="about">
    <ServicedetailsV :idd="idd" :serid="serid"></ServicedetailsV>
  </div>
</template>

<script>
import ServicedetailsV from "../components/all_services/detail_view/service_detail_view";
export default {
  components:{
    ServicedetailsV
  },
  props:{
    idd: String,
    serid: String
  }
}
</script>