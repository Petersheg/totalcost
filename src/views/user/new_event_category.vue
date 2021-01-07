<template>
    <NavbarMember />
    <EventCategory></EventCategory>
</template>

<script>
import EventCategory from "../../components/user/new_event_category";
import NavbarMember from "../../components/navfoot/navbar_member"

export default {
  components:{
    EventCategory,
    NavbarMember
  },
}
</script>