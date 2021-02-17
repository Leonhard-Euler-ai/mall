import {ADD_COUNTER, ADD_TO_CART, CHANGE_CHECKED, CHANGE_ALL_CHECKED} from './mutation-type'

const actions = {
  addCart(context, payload) {
    return new Promise((resolve,reject) => {
      // 查找购物车中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('该商品数量+1')
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('已添加到购物车！')
      }
    })
  },

  changeChecked(context, payload) {
    context.commit(CHANGE_CHECKED, payload)
  },

  changeSelectAll(context,payload){
    context.commit(CHANGE_ALL_CHECKED, payload)
  }
}

export default actions
