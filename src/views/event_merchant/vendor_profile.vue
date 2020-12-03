<template>
    <NavbarMember/>
    <VendorProfile></VendorProfile>
</template>

<script>
// @ is an alias to /src
import VendorProfile from '@/components/event_merchant/vendor_profile'
import NavbarMember from '@/components/navfoot/navbar_member'
export default {
  components: {
    VendorProfile,
    NavbarMember
  }
}
</script>


