<template>
  <div class="login">
    <Navi fixed/>
    <div class="section">
      <h1>로그인</h1>
      <input v-model="email" placeholder="이메일을 입력하세요"/>
      <input v-model="password" type="password" placeholder="비밀번호를 입력하세요"/>
      <button class="login-btn" @click="login">로그인</button>
      <div class="links">
        <span>비밀번호 찾기</span>
        <span @click="goToRegist">회원가입</span>
      </div>
      <button @click="login_naver" class="naver-btn">네이버로 시작하기</button>
      <button class="google-btn">Google로 시작하기</button>
    </div>
     <div id="naver_id_login"></div>
    <Footer />
  </div>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },
  computed : {
    payload(){
      return {
        email: this.email,
        password: this.password
      }
    }
  },
  mounted(){
    // this.$store.commit("localStorage/remove_token")
    var _naver_id_login = new naver_id_login("JN32mHN_ITZtyK7hQ_cW", `${window.location.origin}/login_callback`);
  	var state = _naver_id_login.getUniqState();
  	_naver_id_login.setButton("white", 2,40);
  	_naver_id_login.setDomain("http://localhost:3000");
  	_naver_id_login.setState(state);
  	_naver_id_login.init_naver_id_login();
  },
  methods:{
    goToRegist() {
      this.$router.push('/regist')
    },
    login(){
      this.$store.dispatch('login', this.payload).then(
        (res) => {
          if (res.status == 200){
            this.$router.push('/')
          }
        }
      )
    },
    login_naver(){
      //document.querySelector('#naver_id_login a').click()
    }
  }
}
</script>

<style scoped>
.login{
  padding-top: 247px;
}
.login .section{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  padding-bottom: 182px;
}
.login h1{
  margin-bottom: 16px;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
}
.login .links{
  width: 300px;
  border-bottom: 1px solid #000;
  padding: 10px 0;
  margin-bottom: 27px;
  display: flex;
  justify-content: space-between;
}
.login .links span{
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  text-decoration-line: underline;
}
.login input{
  display: block;
  width: 300px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 5px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding: 11px 16px;
}
.login input::placeholder{
  color: rgba(0, 0, 0, 0.3);
}
.login input:focus{
  border: 1px solid #000;
  color: #000;
}
.login button{
  display: block;
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #000000;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
}
.login button.login-btn{
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  background: #FFD228;
}
.login button.naver-btn{
  margin-bottom: 5px;
  background: #75CF48;
  background-image: url('/login-naver.png');
  background-repeat: no-repeat;
  color: #FFFFFF;
  background-position: 18px 13px;
  
}
.login button.google-btn{
  background: #fff;
  background-image: url('/login-google.png');
  background-repeat: no-repeat;
  background-position: 16px 11px;
}

#naver_id_login{
  visibility: hidden;
}
</style>
