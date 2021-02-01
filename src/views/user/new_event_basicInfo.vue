<template>
    <NavbarMember />
    <EventBasicInfo></EventBasicInfo>
</template>

<script>
import EventBasicInfo from "../../components/user/new_event_basicInfo";
import NavbarMember from "../../components/navfoot/navbar_member"

export default {
  components:{
    EventBasicInfo,
    NavbarMember
  },
}
</script>