import * as types from './types'
const mutations = {
  [types.MOVING_LIST] (state, data){
    state.movingData = data
  },
  [types.MOVING_LOADING] (state, data){
    state.loadingMoving = data.loading
  },
  [types.MOVING_COMING] (state, data){
    state.upcoming = data
  },
  [types.MOVIE_CITY] (state, data) {
    state.city = data.city
  },
  [types.MOVIE_TOP_250] (state, data) {
    state.ranking250 = data
  },
  [types.PAGE_START] (state, data) {
    state.start = data.start
  },
}
export default mutations
