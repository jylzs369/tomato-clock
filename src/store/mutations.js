import * as type from './mutations-type'

const mutations = {
  [type.ADDTASK] (state, data) {
    state.taskList.push(data)
  },
  [type.ADDCLOCK] (state, data) {
    state.clockList.push(data)
  },
  [type.INCREMENT] (state) {
    state.idCounter++
  },
  [type.COUNTDOWN] (state) {
    state.countdown = state.countdown > 0 ? state.countdown-- : 0
  }
}
export default mutations
