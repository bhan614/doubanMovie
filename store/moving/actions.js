import * as types from './types'
import {Utils} from '../../src/common/util'

let utils = new Utils()
const actions = {
  getMoving(store) {
    utils.get('/movie/in_theaters', {}).then(res => {
      store.commit(types.MOVING_LIST, res)
      store.commit(types.MOVING_LOADING, res)
    })
  },
  getUpcoming(store) {
    utils.get('/movie/coming_soon', {}).then(res => {
      store.commit(types.MOVING_COMING, res)
      store.commit(types.MOVING_LOADING, res)
    })
  }
}
export default actions
