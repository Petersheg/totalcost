<template>
    <NavbarMember/>
    <EventDetailsView></EventDetailsView>
</template>

<script>
// @ is an alias to /src
import EventDetailsView from '@/components/event_merchant/event_details_view'
import NavbarMember from '@/components/navfoot/navbar_member'
export default {
  components: {
    EventDetailsView,
    NavbarMember
  }
}
</script>


