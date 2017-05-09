import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  movingData: {
    subjects: []
  },
  loadingMoving: true,
  upcoming: {},
  city: '北京',
  ranking250: {},
  start: 0,
  id:'',
  movieDetail: {},
  searchText: '',
  searchList: {},
  searchLoading: true
}

export default {
  state,
  getters,
  actions,
  mutations
}
