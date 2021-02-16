<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick"/>
    <scroll class="content" ref="scroll" :probe-type="3">
      <detail-carousel ref="detailCarousel" :topImages="topImages" @carouselImageLoad="carouselImageLoad"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"/>
      <detail-param-info ref="detailParamInfo" :param-info="paramInfo"/>
      <detail-comment-info ref="detailCommentInfo" :comment-info="commentInfo"/>
      <goods-list ref="detailRecommend" :goodsList="recommends"/>
    </scroll>
    <detail-bottom-bar/>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/detailComps/DetailNavBar";
import DetailCarousel from "views/detail/detailComps/DetailCarousel";
import DetailBaseInfo from "views/detail/detailComps/DetailBaseInfo";
import DetailShopInfo from "views/detail/detailComps/DetailShopInfo";
import DetailGoodsInfo from "views/detail/detailComps/DetailGoodsInfo";
import DetailParamInfo from "views/detail/detailComps/DetailParamInfo";
import DetailCommentInfo from "views/detail/detailComps/DetailCommentInfo";
import DetailBottomBar from "views/detail/detailComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import {getDetailData, getRecommendData, Goods, Shop, GoodsParam} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    Scroll,
    GoodsList,

    DetailCarousel,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: []
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetailData(this.iid).then(res => {
      const data = res.result;
      // 获取轮播图数据
      this.topImages = data.itemInfo.topImages;
      // 获取商品基本信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo)
      // 获取商品详细信息
      this.detailInfo = data.detailInfo
      // 获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 获取评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
      // 获取推荐信息
      getRecommendData().then(res => {
        this.recommends = res.data.list
      })
    })
  },
  methods: {
    carouselImageLoad() {
      this.$refs.scroll.scroll.refresh()
    },
    titleClick(index) {
      switch (index) {
        case 0:
          this.$refs.scroll.scroll.scrollToElement(this.$refs.detailCarousel.$el)
          break;
        case 1:
          this.$refs.scroll.scroll.scrollToElement(this.$refs.detailParamInfo.$el);
          break;
        case 2:
          this.$refs.scroll.scroll.scrollToElement(this.$refs.detailCommentInfo.$el);
          break;
        case 3:
          this.$refs.scroll.scroll.scrollToElement(this.$refs.detailRecommend.$el);
          break;
      }
    }
  }
}
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  overflow-y: hidden;
  /*height: calc(100%- 44px);*/
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
