<template>
  <div class="account">
    <Navi fixed/>
    <div class="section">
      <h1>MY PAGE</h1>
      <div class="wrap">
        <div class="mypage-nav">
          <h2>{{ user }}님</h2>
          <div>
            <router-link to="/mypage/order">주문목록</router-link>
            <router-link to="/mypage/review">리뷰관리</router-link>
            <router-link to="/mypage/account">회원정보 수정</router-link>
            <router-link to="/mypage/notice">공지사항</router-link>
          </div>
        </div>
        <div class="review">
          <h2>리뷰 관리</h2>
          
          
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data(){
    return{
      user: "이희준"
    }
  },
  methods:{
   
  }
}
</script>

<style scoped>
.account{
  padding-top: 152px;
}
.account > .section{
  padding-bottom: 267px;
}
.account h1{
  font-family: IM_Hyemin-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  margin-bottom: 74px;
}
.account .wrap{
  display: flex;
  border-top: 3px solid #000000;
}
.wrap .mypage-nav{
  padding-left: 36px;
  width: 205px
}
.wrap .mypage-nav h2{
  padding: 18px 36px;
  padding-left: 0;
  padding-bottom: 50px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
}
.wrap .mypage-nav a{
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 22px;
  line-height: 32px;
  display: block;
  margin-bottom: 16px;
  color: #000;
}

.wrap .mypage-nav a.nuxt-link-active{
  font-weight: bold;
}
.wrap .review {
  width: calc(100% - 205px);
}
.wrap .review h2{
  padding: 18px 36px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  background: #FFD228;
  border-bottom: 3px solid #000;
}

</style>
