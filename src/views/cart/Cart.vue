<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center>购物车({{cartLength}})</template>
    </nav-bar>
    <cart-list/>
    <cart-bottom class="cart-bottom"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "views/cart/cartComps/CartList";
import CartBottom from "views/cart/cartComps/CartBottom";

import {mapGetters} from 'vuex'

export default {
  name: "Cart",
  components:{
    NavBar,
    CartList,
    CartBottom
  },
  computed:{
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 1000;
}

.cart-bottom {
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;

  height: 44px;
  width: 100%;
  background-color: #eee;
}
</style>
