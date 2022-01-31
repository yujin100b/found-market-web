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
        <div class="account-form">
          <h2>회원정보 수정</h2>
          <div>
            <p>비밀번호 수정</p>
            <input v-model="current" type="password" placeholder="현재 비밀번호" />
            <input v-model="new_word" type="password" placeholder="새 비밀번호" />
            <input v-model="new_confirm" type="password" placeholder="새 비밀번호 확인" />
            <span>{{ help_text }}</span>
            <button>변경하기</button>
          </div>

          <div class="address">
              <p>기본배송지 수정</p>
              <div>
              <input
                type="text"
                id="sample6_postcode"
                placeholder="우편번호"
                class="with-button"
                v-model="postcode"
              />
              <input
                type="button"
                @click="addrSearch"
                value="우편번호 찾기"
              />
              </div>
              <input
                type="text"
                id="sample6_address"
                placeholder="주소"
                class="full-width"
                v-model="address_1"
              />
              <input
                type="text"
                id="sample6_detailAddress"
                placeholder="상세주소"
                class="full-width"
                v-model="address_2"
              />
              <span class="help-text">{{ address_help_text }}</span>
              <div class="btn-and-links">

                <button>변경하기</button>
                <div class="links">
                  <button>회원 탈퇴하기</button>
                  <button>로그아웃</button>
                </div>
              </div>
            </div>

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
      user: "이희준",
      current: null,
      new_word : null,
      new_confirm : null,
      postcode : null,
      address_1 : null,
      address_2 : null,

    }
  },
  computed:{
    help_text(){
      if(!(this.current && this.new_word && this.new_confirm)){
        return "모든 입력창을 입력해주세요"
      }
      else if (this.new_word !== this.new_confirm){
        return "새 비밀번호와 확인값이 다릅니다."
      }
      return ""
    },
    address_help_text(){
      if(!(this.postcode && this.address_1 && this.address_2)){
        return "모든 입력창을 입력해주세요"
      }
      return ""
    }
  },
  methods:{
    addrSearch() {
      new daum.Postcode({
        oncomplete: function (data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var addr = "";
          // 주소 변수
          var extraAddr = "";
          // 참고항목 변수
          //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            addr = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            addr = data.jibunAddress;
          }
          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              extraAddr += data.bname;
            } // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              extraAddr +=
                extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
            } // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (extraAddr !== "") {
              extraAddr = " (" + extraAddr + ")";
            }
            // 조합된 참고항목을 해당 필드에 넣는다.
            //document.getElementById("sample6_extraAddress").value = extraAddr;
          } else {
            //document.getElementById("sample6_extraAddress").value = "";
          } // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById("sample6_postcode").value = data.zonecode;
          document.getElementById("sample6_address").value = addr + extraAddr;
          // 커서를 상세주소 필드로 이동한다.
          document.getElementById("sample6_detailAddress").focus();
        },
      }).open();
    },
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
.wrap .account-form {
  width: calc(100% - 205px);
}
.wrap .account-form h2{
  padding: 18px 36px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  background: #FFD228;
  border-bottom: 3px solid #000;
}

.account-form > div{
  display: flex;
  flex-direction: column;
  padding: 39px 0;
}
.account-form > div > p{
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  padding-bottom: 7px;
  border-bottom: 2px solid #000000;
  margin-bottom: 39px;
}
.account-form > div input{
  width: 300px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 5px;

  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding-left: 16px;

}
.account-form > div span{
      font-family: Noto Sans KR;
    padding-top: 14px;
    margin-bottom: 28px;
    height: 17px;
    font-size: 12px;
    line-height: 17px;
    color: #FF0000;
}
.account-form > div button,
.account-form > div input[type="button"]{
  width: 79px;
  padding: 11px 0px;
  background: #FFD228;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
}
.account-form > div input[type="button"]{
  width: 92px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  padding: 11px 4px;
  background: #FFD228;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}
.account-form > div input#sample6_postcode{
  width: 203px;
}
.account-form > div input#sample6_address{
  width: 300px;
}
.account-form > div input#sample6_detailAddress{
  width: 300px;
}
.account-form > div .btn-and-links{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.account-form > div .links button{
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;

  width: 109px;
  height: 18px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-decoration-line: underline;
}
@media (max-width: 980px) {
  .account h1 {
    font-size: 30px;
    line-height: 37px;
    margin-bottom: 5px;
  }
  .account .wrap {
    flex-direction: column;
    border-top: 0;
  }
  .wrap .mypage-nav {
    width: 100%;
    padding-left: 0;
  }
  .wrap .mypage-nav h2 {
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    padding: 0;
    padding-bottom: 38px;
  }
  .wrap .mypage-nav div {
    display: flex;
    justify-content: space-between;
  }
  .wrap .mypage-nav div a {
    font-size: 14px;
    line-height: 20px;
    text-decoration: underline;
  }
  .wrap .account-form {
    width: 100%;
  }
  .wrap .account-form h2 {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    border-top: 3px solid #000;
  }
  .account-form > div .btn-and-links{
    flex-direction: column;
    align-items: flex-start;
  }
  .account-form > div .btn-and-links > button{
    margin-bottom: 20px;
  }
  .account-form > div .btn-and-links .links{
    padding-top: 16px;
    border-top: 1px solid #000000;
    width: 100%;;
    display: flex;
    justify-content: flex-end;
  }
  .account-form > div .btn-and-links .links button{
    text-align: right;
  }
}
</style>
