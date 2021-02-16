<template>
  <div id="home-swiper">
    <el-carousel height="160px">
      <el-carousel-item v-for="(item,id) in banners" :key="id">
        <img :src="item.image" alt="" @load="carouselImageLoad">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "HomeCarousel",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    carouselImageLoad() {
      if (!this.isLoad) {
        this.$emit('carouselImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style>
#home-swiper {
  overflow: hidden;
  position: relative;
}

.el-carousel__item img {
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
