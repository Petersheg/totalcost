<template>
    <NavbarMember/>
    <UserProfile></UserProfile>
</template>

<script>
// @ is an alias to /src
import UserProfile from '@/components/event_merchant/user_profile'
import NavbarMember from '@/components/navfoot/navbar_member'
export default {
  components: {
    UserProfile,
    NavbarMember
  }
}
</script>


