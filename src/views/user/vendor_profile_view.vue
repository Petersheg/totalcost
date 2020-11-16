<template>
    <Vendorprofileview :id="id"></Vendorprofileview>
</template>

<script>
import Vendorprofileview from "../../components/user/vendor_profile_view";

export default {
  components:{
    Vendorprofileview
  },
  props:{
    id:String
  }
}
</script>