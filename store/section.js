export const state = () => ({
  counter: 666,
  sections: [
    {
      title: 'html',
      items: [
        {
          title: 'Basic tags',
          items: [
            {
              title: 'Basic tags',
            }
          ]
        },

        {
          title: 'Html5 tags'
        },
        {
          title: 'Structure'
        },
        {
          title: 'Attributes'
        },
        {
          title: 'Selectors'
        },
        {
          title: 'W3C'
        },
        {
          title: 'Cross Browsers'
        }
      ]
    },
    { title: 'css' },
    { title: 'js' }
  ]
})

export const getters = {
  getCounter(state) {
    return state.counter
  },
  getSections(state) {
    return state.sections
  }
}
