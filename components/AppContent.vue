<template lang='pug'>
  v-row(v-masonry)
    v-col.text-center(
      v-for='section in getSections'
      cols='6'
    )
      v-card
        v-card-title {{ section.title }}
        v-divider
        div(
          v-for='(item, index) in section.items'
          :key='item.title'
        )
          SectionTechnologies(
            :title='item.title'
            :items='item.items'
            :isLast='!(section.items.length - index - 1)'
            :isActive='item.active'
          )



</template>



<script>

import {mapGetters} from 'vuex'
import SectionTechnologies from '~/components/SectionTechnologies'

export default {
  name: 'AppContent',
  components: { SectionTechnologies },
  computed: {
    ...mapGetters('section', ['getSections']),
  }
}
</script>

<style scoped lang='sass'>

</style>
