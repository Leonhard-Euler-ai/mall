<template>
  <div id="detail-carousel">
    <el-carousel height="300px">
      <el-carousel-item v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="" @load="carouselImageLoad">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "DetailCarousel",
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      },
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

<style scoped>

</style>
