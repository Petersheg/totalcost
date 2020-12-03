<template>
    <NavbarMember/>
    <AccountSettings></AccountSettings>
</template>

<script>
// @ is an alias to /src
import AccountSettings from '@/components/event_merchant/account_settings'
import NavbarMember from '@/components/navfoot/navbar_member'
export default {
  components: {
    AccountSettings,
    NavbarMember
  }
}
</script>


