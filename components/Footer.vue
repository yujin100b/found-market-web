<template>
  <div class="footer">
    <div class="section">
      <div class="info">
        <img src="/footer_logo.svg" />
        <p>
          (주) 더로컬프로젝트 | 대표:이희준 
        </p>
        <p>
          사업자등록번호: 408-87-02014 | 통신판매신고번호:제 2020-제주삼도이-0009호 
        </p>
        <p>
          제주특별 자치도 제주시 관덕로7길39, 1층 
        </p>
        <p class="policy">
          <a>이용약관</a> | <a>개인정보처리방침</a> 
        </p>
        <p>
          ⓒ THE LOCAL PROJECT Co.,Ltd. 2018-2020.
        </p>
      </div>
      <div class="sns">
          <img src="/insta.png" @click="instagram">
          <img src="/meta.png" @click="meta">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        instagram(){

        },
        meta(){

        }
    }
};
</script>

<style>
.footer {
  background: rgba(255, 210, 40, 0.1);
  border-top: 2px solid #000;
  padding: 0;
}
.footer .section {
  padding-top: 57px;
  padding-bottom: 49px;
  font-family: "Noto Sans KR";
  display: flex;
  justify-content: space-between;
}
.footer .info img{
    margin-bottom: 26px;
}
.footer .info p.policy{
    margin-bottom: 1em;
}
.footer .info a{
    color: #000;
    font-weight: bold;
}
.footer .sns img:last-child{
    margin-left: 13px;
}
</style>