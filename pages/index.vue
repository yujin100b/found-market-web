<template>
  <div class="main">
    <img class="main-header-img" src="/welcometo.png" />
    <Navi :fixed="fixed" ref="navi" />
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
  data() {
    return {
      scrollY: 0,
      timer: null
    }
  },
  computed : {
    fixed(){
      return this.scrollY > 282
    }
  },
  beforeMount: function () {
    // 핸들러 등록하기
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy: function () {
    // 핸들러 제거하기(컴포넌트 또는 SPA의 경우 절대 잊지 말아 주세요!)
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 위화감을 느끼지 않을 200ms 간격으로 scroll 데이터를 변경하는 예
    handleScroll: function () {
      if (this.timer === null) {
        this.timer = setTimeout(function () {
          this.scrollY = window.scrollY
          clearTimeout(this.timer)
          this.timer = null
        }.bind(this), 200)
      }
    }
  }
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

@media (max-width: 980px){
  .main-header-img{
    display: none;
  }
  .section .more{
    width: 60px;
    height: 20px;
    font-size: 10px;
    line-height: 12px;
    border: 2px solid #000000;
  }
}
</style>