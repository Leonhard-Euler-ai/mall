<template>
  <div class="bottom-menu">
    <div class="select-all">
      <check-button :is-checked="isSelectAll" @click.native="changeSelectAll" class="eddcheck"></check-button>
      <span>全选</span>
    </div>
    <span class="total-price">合计: ¥{{ totalPrice }}</span>
    <span class="buy-product">去计算({{ endCount }})</span>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  name: 'CartBottom',
  components: {
    CheckButton
  },
  computed:{
    totalPrice(){
      return this.$store.state.cartList.filter(item=>item.checked).
        reduce((preValue,item)=>{
          return preValue+item.price*item.count
      },0)
    },
    endCount() {
      return this.$store.state.cartList.filter(item=>item.checked).length
    },
    isSelectAll(){
      if(this.endCount===0) return false
      return this.$store.state.cartList.length===this.endCount
    }
  },
  methods:{
    changeSelectAll(){
      this.$store.dispatch('changeSelectAll',!this.isSelectAll)
    }
  }
}
</script>

<style scoped>
.bottom-menu {
  font-size: 14px;
  color: #888;
  line-height: 44px;
  display: flex;
}

.bottom-menu .select-all {
  line-height: 0;
  width: 80px;
}

.eddcheck {
  position: relative;
  top: 30%;
  left: 30%;
}

.select-all span {
  position: relative;
  left: 55%;
  top: 5px;
}

.bottom-menu .total-price {
  margin-left: 15px;
  flex: 1;
  font-size: 16px;
  color: #666;
}

.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>
