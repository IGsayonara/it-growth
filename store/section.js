export const state = () => ({
  counter: 666,
  sections: [
    {
      id: 1,
      title: 'html'
    },
    {
      id: 2,
      title: 'css'
    },
    {
      id: 3,
      title: 'js'
    },
  ],
  posts: [
    {
      id: 1,
      title: 'W3C',
      parentId: 1
    },
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
