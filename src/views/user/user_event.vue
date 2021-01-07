<template>
    <NavbarMember />
    <UserEvent></UserEvent>
</template>

<script>
import UserEvent from "../../components/user/user_event";
import NavbarMember from "../../components/navfoot/navbar_member"

export default {
  components:{
    UserEvent,
    NavbarMember
  },
}
</script>