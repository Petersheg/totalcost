<template>
    <NavbarMember/>
    <ServiceDetails></ServiceDetails>
</template>

<script>
// @ is an alias to /src
import ServiceDetails from '@/components/event_merchant/service_details'
import NavbarMember from '@/components/navfoot/navbar_member'
export default {
  components: {
    ServiceDetails,
    NavbarMember
  }
}
</script>


