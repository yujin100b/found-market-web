<template>
  <div class="main">
    <img class="main-header-img" src="/welcometo.png" />
    <Navi />
    <Carousel />
    <IndexMarket />
    <img class="main-banner-img" src="/main_banner.png" />
    <IndexFarm />
    <IndexLocalNews />
    <Footer />
  </div>
</template>

<script>
import Navi from '../components/Navi.vue'
import Carousel from '../components/Carousel.vue'
import IndexMarket from '../components/IndexMarket.vue';
import IndexFarm from '../components/IndexFarm.vue';
import IndexLocalNews from '../components/IndexLocalNews.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { 
    Navi,
    Carousel,
    IndexMarket,
    IndexFarm,
    IndexLocalNews,
    Footer
  },
};
</script>

<style>
.main {
  width: 100%;
}
.main-header-img {
  width: 100%;
  margin: -7px auto;
}
.main-banner-img{
  width: 100%;
  margin: -7px auto;
}
.section {
  width: 980px;
  margin: 0 auto;
  padding: 89px 0
}
.section .section-header-img {
  margin: 0 auto;
  width: 100%;
  margin-top: 50px;
}
.section .more{
  display: block;
  width: 100px;
  height: 40px;
  margin: 0 auto;
  background: #FFD228;
  font-family: IM_Hyemin-Bold;
  font-size: 20px;
  line-height: 24px;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
}
</style>