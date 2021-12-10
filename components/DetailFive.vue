<template>
  <div class="five">
    <div class="title">
      <div class="section">
      <img class="left" src="/daram-dotori-left.png" />
      <p> <span>WITH</span> FOUND MARKET</p>
      <img class="right" src="/daram-dotori-right.svg" />
      </div>
    </div>
    <div class="body">
      <div class="section">
      <p><다람쥐 파트너 선정을 위한 다섯가지 기준></p>
      <div class="five-items">
        <div class="row">
          <div class="item">
            <img src="/dotori.png" />
            <h3>로컬을 대표하는 상품</h3>
            <p>지역을 기반으로 성장하고 있는 로컬브랜드</p>
          </div>
          <div class="item">
            <img src="/dotori.png" />
            <h3>안전하게 만들어진 상품</h3>
            <p>내 아이, 내 가족이 먹을 수 있도록 제조된 로컬브랜드</p>
          </div>
          <div class="item">
            <img src="/dotori.png" />
            <h3>환경을 생각하는 상품</h3>
            <p>더 나은 환경(ESG,인권 등)을 위해 노력하는 로컬브랜드</p>
          </div>
        </div>
        <div class="row">
          <div class="item">
            <img src="/dotori.png" />
            <h3>합리적인 가격이 책정된 상품</h3>
            <p>원재료,생산자의 철학이 반영된 로컬브랜드</p>
          </div>
          <div class="item">
            <img src="/dotori.png" />
            <h3>함께 성장하는 상품</h3>
            <p>다람쥐 사원과 함께 재밌는 프로젝트가 가능한 로컬브랜드</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.five{
  background: rgba(255, 210, 40, 0.1);
  border-bottom: 2px solid #000000;
  padding-bottom: 130px;
}
.five .title{
  height: 94px;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.five .title span{
  font-size: 40px;
  line-height: 60px;
}
.five .title p{
  text-align: center;
  font-family: IM_Hyemin-Bold;
  font-size: 60px;
}
.five .title .section{
  position: relative;
  padding: 0;
}
.five .title .section img{
  position: absolute;
}
.five .title .section img.left{
  position: absolute;
  top: 50%;
  left: 0px;
  transform:translateY(-50%);
}
.five .title .section img.right{
  position: absolute;
  top: 50%;
  right: 0px;
  transform:translateY(-50%);
}
.five .body .section{
  padding: 0;
}
.five .body .section > p {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 1.54;
  text-align: center;
  letter-spacing: -0.015em;
  color: #000000;
  margin-bottom: 67px;
}
.five .five-items .row{
  display: flex;
  justify-content: center;
  margin-bottom: 43px;
}
.five .five-items .item{
  min-width: 336px;
  max-width: 336px;
  position: relative;
  background: #FFFFFF;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 29px 10px;
  margin-left: 30px;
}
.five .five-items .row .item:first-child{
  margin-left: 0;
}
.five .five-items .item img{
  position: absolute;
  width: 30px;
  left: 50%;
  transform: translateX(-50%);
  top: -15px;
}
.five .five-items .item h3{
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 26px;
  line-height: 40px;
  background-image: url("/rect.png");
  background-repeat: no-repeat;
  background-position: center;
}
.five .five-items .item p{
  font-family: "Noto Sans KR";
  text-align: center;
  font-size: 26px;
  word-break: keep-all;
  padding-left: 20px;
  padding-right: 20px;
}
</style>