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
  }
}
export default mutations
