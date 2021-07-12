<template lang='pug'>
  .mt-4
    .ml-3.mr-3(v-if="isItems")
      v-expansion-panels
        v-expansion-panel
          v-expansion-panel-header {{ title }}
          v-expansion-panel-content
            SectionTechnologies(
              v-for="(item, index) in items"
              :key='item.title'
              :items='item.items'
              :title='item.title'
              :isLast='!(items.length - index - 1)'
              :isActive='item.active'
            )
    .ml-3.mr-3(v-else)
      v-checkbox(
        :label='title'
        v-model='isActive'
      )
    v-divider.ml-3.mr-3(v-if='!isLast')


</template>

<script>
export default {
  name: 'SectionTechnologies',
  props: {
    title: String,
    items: Array,
    isLast: Boolean,
    isActive: Boolean,
  },
  computed: {
    isItems(){
      return !!(this.items && this.items.length)
    },
    knowlagePercent(){

    }
  }
}
</script>

<style scoped lang='sass'>

</style>
