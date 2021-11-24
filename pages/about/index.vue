<template>
  <div class="about">
    <Navi />
    <div class="about-header">
      <p class="left-text">안녕하세요~ 다람쥐 사원이에요!</p>
      <img src="/about-header.png" />
      <p class="right-text">전국 8도 로컬브랜드를 찾습니다!</p>
    </div>
    <div class="about-body">
      <div class="section">
        <div class="about-row">
          <img width="310" src="/about-found-market.png" />
          <p>
            FOUND MARKET(파운드마켓) 은 전국 8도 로컬 브랜드 큐레이션
            플랫폼입니다. ‘로컬 브랜드’를 발굴하고 경험하게 함으로써 지역별
            ‘로컬 크리에이터’의 지속가능한 성장을 돕고 이를 통해 ‘소상공인과
            로컬의 활성화’를 지원하고 있습니다.
            <br />
            <br />
            ‘혼자 가면 빨리 갈 수 있지만 함께 가면 멀리 갈 수 있다’는 속담이
            있잖아요. FOUND MARKET은 조금은 더뎌도 세상에 좀 더 신뢰할 수 있는
            먹거리, 건강한 환경을 이야기하고자 하는 로컬 크리에이터들과 함께
            성장하며 멀리 가고자 만든 플랫폼입니다.
          </p>
        </div>
        <div class="about-row">
          <img width="310" src="/about-lee.png" />
          <p>
            더로컬프로젝트는 전국 8도 로컬 브랜드 큐레이션 플랫폼 FOUND MARKET을
            운영하는 로컬 농식품 스타트업입니다. 로컬의 자원을 발굴하고
            재해석하여 로컬의 가치를 전달하고자 합니다.
            <br />
            <br />
            더로컬프로젝트는 다양한 로컬에서의 경험과 시행착오를 바탕으로 좋은
            생산품은 만들었지만 유통과 마케팅에서 어려움을 겪는 로컬 브랜드와의
            동반성장을 위해 FOUND MARKET을 준비하였습니다.
          </p>
        </div>
      </div>
      <div class="section">
        <div class="about-contact-header">
          <p>FOUND MARKET 관련 문의사항은</p>
          <p>아래 이메일로 연락주세요!</p>
        </div>
        <div class="about-contact-namecard">
          <img src="/about-contact.png" />
          <h1> &#60;&#60; CONTACT &#62;&#62; </h1>
          <div class="info">
            <div class="info-wrap">
              <p><span>주소</span> 제주특별자치도 제주시 관덕로 7길 39, 1층</p>
              <p><span>이메일</span> hello.foundmarket@gmail.com</p>
              <p><span>홈페이지</span> thelocalproject.imweb.me</p>
            </div>
          </div>
        </div>
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
.about-body {
  border-top: 2px solid #000;
  padding-top: 116px;
  padding-bottom: 188px;
}
.about-body .section {
  padding-top: 0;
  padding-bottom: 0;
}
.about-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 82px;
  border-bottom: 1px solid #000;
}
.about-row:last-child {
  padding-top: 82px;
}
.about-row p {
  font-family: Roboto;
  font-size: 18px;
  line-height: 30px;
  max-width: 620px;
}
.about-contact-header{
  padding-top:57px;
}
.about-contact-header p{
  font-family: IM_Hyemin-Bold;
  font-size: 30px;
  line-height: 1.33;
  text-align: center;
  color: #000000;
}
.about-contact-header p:last-of-type{
  margin-bottom: 10px;
}
.about-contact-namecard{
  max-width: 727px;
  width: 100%;
  margin: 0 auto;
  margin-top: 71px;
  background: #FFD228;
  border: 2px solid #000000;
  position: relative;
}
.about-contact-namecard img{
  position: absolute;
  top: -73px;
  left: 50%;
  transform: translateX(-50%);
}
.about-contact-namecard h1{
  font-family: IM_Hyemin-Bold;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 2px solid #000000;
}
.about-contact-namecard .info{
  padding-top: 18px;
  padding-bottom: 18px;
  font-family: "Noto Sans KR";
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info .info-wrap{

}
.info .info-wrap span{
  font-weight: bold;
  width: 70px;
  display: inline-block;
}
</style>