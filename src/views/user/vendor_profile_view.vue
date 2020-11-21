<template>
    <NavbarMember />
    <Vendorprofileview :id="id"></Vendorprofileview>
</template>

<script>
import Vendorprofileview from "../../components/user/vendor_profile_view";
import NavbarMember from "../../components/navfoot/navbar_member"

export default {
  components:{
    Vendorprofileview,
    NavbarMember
  },
  props:{
    id:String
  }
}
</script>