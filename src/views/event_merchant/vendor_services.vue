<template>
    <NavbarMember/>
    <Vendorservices></Vendorservices>
</template>

<script>
// @ is an alias to /src
import Vendorservices from '@/components/event_merchant/vendor_services'
import NavbarMember from '@/components/navfoot/navbar_member'
export default {
  components: {
    Vendorservices,
    NavbarMember
  }
}
</script>


