import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  movingData: {
    subjects: []
  },
  loadingMoving: true,
  upcoming: {},
  city: '杭州',
  ranking250: {},
  start: 0
}

export default {
  state,
  getters,
  actions,
  mutations
}
