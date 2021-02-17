<template>
<div class="cart-list">
  <scroll class="content" ref="scroll">
    <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"></cart-list-item>
  </scroll>
</div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "views/cart/cartComps/CartListItem";

import {mapGetters} from 'vuex'

export default {
  name: "CartList",
  components:{
    Scroll,
    CartListItem
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  }
}
</script>

<style scoped>
.cart-list{
  height: 100vh;
}

.content {
  overflow-y: hidden;
  position: absolute;
  top: 44px;
  bottom: 93px;
  left: 0;
  right: 0;
}
</style>
