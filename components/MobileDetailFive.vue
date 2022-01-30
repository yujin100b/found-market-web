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
        </div>
        <div class="row">
          <div class="item">
            <img src="/dotori.png" />
            <h3>환경을 생각하는 상품</h3>
            <p>더 나은 환경(ESG,인권 등)을 위해 노력하는 로컬브랜드</p>
          </div>
          <div class="item">
            <img src="/dotori.png" />
            <h3>합리적인 가격이 책정된 상품</h3>
            <p>원재료,생산자의 철학이 반영된 로컬브랜드</p>
          </div>
        </div>
        <div>
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
@media (max-width:980px) {
  .five{
    display: block;
    padding-bottom: 76px;
  }
  .five .title{
    height: 44px;
  }
  .five .title span{
    font-size: 14px;
    line-height: 40px;
  }
  .five .title p{
    font-size: 22px;
    line-height: 40px;
  }
  .five .title .section{
    position: relative;
    padding: 0;
  }
  .five .title .section img{
    position: absolute;
  }
  .five .title .section img.left{
    top: 0;
    width: 50px;
    height: 50.53px;
  }
  .five .title .section img.right{
    top: 0;
    width: 50px;
    height: 50.53px;
  }
  .five .body .section{
    padding: 0;
  }
  .five .body .section > p {
    font-size: 14px;
    line-height: 40px;
    margin-bottom: 25px;
  }
  .five .five-items .row{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .five .five-items .item{
    min-width: 154px;
    max-width: 154px;
    height: 100px;
    margin: 0 auto;
    padding: 9px;
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
    width: 18px;
    height: 19.97px;
  }
  .five .five-items .item h3{
    font-size: 11px;
    line-height: 21px;
    background-size: 114px;
    margin-bottom: 13px;
  }
  .five .five-items .item p{
    font-family: "Noto Sans KR";
    text-align: center;
    font-size: 12px;
    line-height: 1.2;
    word-break: keep-all;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>