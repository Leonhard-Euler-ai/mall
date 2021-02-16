<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <tab-control ref="tabControl1" :titles="titles" @tabClick="tabClick"
                 class="tab-control" v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-carousel :banners="banners" @carouselImageLoad="carouselImageLoad"></home-carousel>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature/>
      <tab-control ref="tabControl2" :titles="titles" @tabClick="tabClick"></tab-control>
      <goods-list :goodsList="showGoods"/>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeCarousel from "views/home/childComps/HomeCarousel";
import HomeRecommend from "views/home/childComps/HomeRecommend";
import HomeFeature from "views/home/childComps/HomeFeature";

import {getHomeMultidata, getHomeGoods} from "network/home";

import {debounce} from "common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeCarousel,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    // 1.图片加载完的事件监听
    // const refresh = debounce(this.$refs.scroll.scroll.fresh, 50)
    // this.$bus.$on('itemImageLoad', () => {
    //   refresh()
    // })
  },
  // activated() {
  //   this.$refs.scroll.scrollTo(0,this.saveY,0);
  //   this.$refs.scroll.scroll.refresh();
  // },
  // deactivated() {
  //   this.saveY = this.$refs.scroll.scroll.y
  // },
  methods: {
    /**
     * 事件相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000)
    },
    contentScroll(pos) {
      //判断backTop是否显示
      this.isShowBackTop = -pos.y > 1000

      //决定tabControl是否吸顶
      this.isTabFixed = -pos.y > this.tabOffsetTop
      this.isTabFixed = !(-pos.y <= this.tabOffsetTop)
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    carouselImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },


    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;
        this.$refs.scroll.finishPullUp();
        //this.$refs.scroll.scroll.refresh();
      })
    }
  }
}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*z-index: 9;*/
}

.content {
  overflow-y: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control {
  position: relative;
  z-index: 9;
}
</style>
