<template>
  <div class="join">
    <Navi fixed />
    <div class="section">
      <h1>회원가입</h1>
      <div class="join-form-wrap">
        <div class="username">
          <input v-model="last_name" placeholder="성" />
          <input v-model="first_name" placeholder="이름" />
        </div>
        <input v-model="email" placeholder="이메일" />
        <input v-model="password" placeholder="비밀번호" />
        <input v-model="re_password" placeholder="비밀번호 확인" />
        <button class="join-btn" @click="regist">가입</button>
      </div>
      <button class="naver-btn">네이버로 시작하기</button>
      <button class="google-btn">Google로 시작하기</button>

      <div class="links">
        <span @click="goToLogin()">이미 가입하셨다면 로그인</span>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      last_name: "",
      first_name: "",
      email: "",
      password: "",
      re_password: "",
    };
  },
  computed: {
    payload() {
      return {
        last_name: this.last_name,
        first_name: this.first_name,
        email: this.email.trim(),
        password: this.password.trim(),
        re_password: this.re_password.trim(),
      };
    },
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    regist() {
      this.$store
        .dispatch("post_user", this.payload)
        .then((_) => {
          alert("회원가입이 되었습니다.");
          this.$router.push("/");
        })
        .catch((err) => {
          if (err.response.status == 400) {
            alert(
              "비밀번호는 이메일과 비슷하지 않고, 8자 이상으로 구성해주세요."
            );
          }
        });
    },
  },
};
</script>

<style scoped>
.join {
  padding-top: 247px;
}
.join .section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  padding-bottom: 182px;
}
.join h1 {
  margin-bottom: 16px;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
}
.join-form-wrap {
  padding-bottom: 17px;
  border-bottom: 1px solid #000;
  margin-bottom: 17px;
}
.join .links {
  width: 300px;
  padding: 10px 0;
  padding-top: 23px;
  margin-bottom: 27px;
  display: flex;
  justify-content: center;
}
.join .links span {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  text-decoration-line: underline;
}
.join .username {
  display: flex;
  justify-content: center;
  align-items: center;
}
.join .username input {
  width: 148px;
  height: 40px;
}
.join .username input:first-child {
  margin-right: 4px;
}
.join input {
  display: block;
  width: 300px;
  height: 40px;
  background: #ffffff;
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
.join input::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.join input:focus {
  border: 1px solid #000;
  color: #000;
}
.join button {
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
.join button.join-btn {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  background: #ffd228;
}
.join button.naver-btn {
  margin-bottom: 5px;
  background: #75cf48;
  background-image: url("/login-naver.png");
  background-repeat: no-repeat;
  color: #ffffff;
  background-position: 18px 13px;
}
.join button.google-btn {
  background: #fff;
  background-image: url("/login-google.png");
  background-repeat: no-repeat;
  background-position: 16px 11px;
}
</style>
