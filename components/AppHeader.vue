<template lang="pug">
  v-app-bar(
    app
    color='green'
  )
    AppLogo
    v-spacer
    v-btn.mr-1(
      to='/'
      nuxt
      color='blue'
    ) Front End
    v-btn(
      to='/second'
      nuxt
      color='red'
    ) Back End

</template>

<script>
import AppLogo from '~/components/AppLogo'
export default {
  name: 'AppHeader',
  components: { AppLogo }
}
</script>

<style scoped lang='sass'>
.header


</style>
