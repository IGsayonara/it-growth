<template lang='pug'>
  v-row
    v-col.text-center(
      v-for='section in getSections'
      cols='12'
    )
      v-card
        v-card-title {{ section.title }}
        v-divider
        .ml-5(
          v-for='item in section.items'
        )
          v-checkbox(
            :label='item.title'
          )
          v-divider



</template>



<script>

import {mapGetters} from 'vuex'

export default {
  name: 'AppContent',
  computed: {
    ...mapGetters('section', ['getSections'])
  }
}
</script>

<style scoped lang='sass'>

</style>
