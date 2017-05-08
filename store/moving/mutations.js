import * as types from './types'
const mutations = {
  [types.MOVING_TITLE] (state, data){
    state.movingData = data
  }
}
export default mutations
