<template lang="pug">
  v-app
    AppHeader
    v-container#main-content
      Nuxt
</template>

<script>
import AppHeader from '~/components/AppHeader'
export default {
  components: { AppHeader },
  data () {
    return {

    }
  }
}
</script>

<style>
  #main-content{
    margin-top: 80px;
  }
</style>
