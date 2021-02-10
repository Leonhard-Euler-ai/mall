<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-carousel :banners="banners"></home-carousel>
    <div>推荐内容</div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeCarousel from "views/home/childComps/HomeCarousel";
import {getHomeMultidata} from "network/home";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeCarousel
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
