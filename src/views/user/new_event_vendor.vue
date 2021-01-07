<template>
    <NavbarMember />
    <EventVendor></EventVendor>
</template>

<script>
import EventVendor from "../../components/user/new_event_vendor";
import NavbarMember from "../../components/navfoot/navbar_member"

export default {
  components:{
    EventVendor,
    NavbarMember
  },
}
</script>