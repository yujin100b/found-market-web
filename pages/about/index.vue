<template>
  <div class="about">
    <Navi />
    <div class="about-header">
      <p class="left-text">안녕하세요~ 다람쥐 사원이에요!</p>
      <img src="/about-header.png" />
      <p class="right-text">전국 8도 로컬브랜드를 찾습니다!</p>
    </div>
    <div class="about-body">
      <div>
        <img src="/about-found-market.png"/>
        <p>
          FOUND MARKET(파운드마켓) 은 전국 8도 로컬 브랜드 큐레이션
          플랫폼입니다. ‘로컬 브랜드’를 발굴하고 경험하게 함으로써 지역별 ‘로컬
          크리에이터’의 지속가능한 성장을 돕고 이를 통해 ‘소상공인과 로컬의
          활성화’를 지원하고 있습니다. 
          <br>
          ‘혼자 가면 빨리 갈 수 있지만 함께 가면
          멀리 갈 수 있다’는 속담이 있잖아요. FOUND MARKET은 조금은 더뎌도
          세상에 좀 더 신뢰할 수 있는 먹거리, 건강한 환경을 이야기하고자 하는
          로컬 크리에이터들과 함께 성장하며 멀리 가고자 만든 플랫폼입니다.
        </p>
      </div>
      <div>
        <img src="/about-lee.png"/>
        <p>
          더로컬프로젝트는 전국 8도 로컬 브랜드 큐레이션 플랫폼 FOUND MARKET을 
          운영하는 로컬 농식품 스타트업입니다. 로컬의 자원을 발굴하고 재해석하여 로컬의 
          가치를 전달하고자 합니다.
          <br />
          더로컬프로젝트는 다양한 로컬에서의 경험과 시행착오를 바탕으로 좋은 
          생산품은 만들었지만 유통과 마케팅에서 어려움을 겪는 로컬 브랜드와의 동반성장을 
          위해 FOUND MARKET을 준비하였습니다.
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navi from "../../components/Navi.vue";
import Footer from "../../components/Footer.vue";
export default {
  components: {
    Navi,
    Footer,
  },
};
</script>


<style>
.about-header {
  position: relative;
  height: 300px;
}
.about-header img {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.about-header p {
  position: absolute;
  font-weight: bold;
  font-size: 25px;
  line-height: 20px;
}
.about-header p.left-text {
  top: 92px;
  left: 243px;
}
.about-header p.right-text {
  top: 92px;
  right: 186px;
}
</style>