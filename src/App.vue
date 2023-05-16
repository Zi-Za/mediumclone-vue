<template>
  <div>
    <mcv-topBar/>

    <RouterView></RouterView>
  </div>
</template>
 
<script>
import McvTopBar from '@/components/TopBar'
import { actionTypes } from '@/store/modules/auth'

export default {
  name: 'McvApp',
  components: {
    McvTopBar
  },
  mounted() {
    console.log('hello, app')
    this.$store.dispatch(actionTypes.getCurrentUser)
  }
}
</script>