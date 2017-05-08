import * as types from './types'
import {Utils} from '../../src/common/util'

let utils = new Utils()
const actions = {
  getMoving(store) {
    utils.get('/movie/in_theaters', {}).then(res => {
      store.commit(types.MOVING_TITLE, res)
    })
  }
}
export default actions
