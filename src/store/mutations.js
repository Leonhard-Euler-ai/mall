import {ADD_COUNTER, ADD_TO_CART, CHANGE_CHECKED, CHANGE_ALL_CHECKED} from './mutation-type'

const mutations = {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },

  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },

  [CHANGE_CHECKED](state, payload) {
    payload.checked = !payload.checked
  },

  [CHANGE_ALL_CHECKED](state, payload) {
    state.cartList.forEach(item => item.checked = payload)
  }
}

export default mutations
