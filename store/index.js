export const state = () => ({
  counter: 345
})

export const getters = {
  getCounter(state) {
    return state.counter
  }
}
