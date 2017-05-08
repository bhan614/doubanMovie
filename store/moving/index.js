import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  movingData: {
    subjects: []
  },
  loadingMoving: true
}

export default {
  state,
  getters,
  actions,
  mutations
}
