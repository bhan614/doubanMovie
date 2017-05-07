import * as types from './types'
const mutations = {
  [types.MOVING_TITLE] (state, data){
    state.title = data.title
  }
}
export default mutations
