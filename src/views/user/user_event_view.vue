<template>
    <NavbarMember />
    <UserEventView></UserEventView>
</template>

<script>
import UserEventView from "../../components/user/user_event_view";
import NavbarMember from "../../components/navfoot/navbar_member"

export default {
  components:{
    UserEventView,
    NavbarMember
  },
}
</script>