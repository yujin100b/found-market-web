<template>
  <div class="local">
    <Navi fixed/>
    <div class="section">
      <img class="header pc" src="/found-local-header.png" />
      <img class="header mobile" src="/mobile-local-header.svg" />
      <img class="balls" src="/found-local-balls.png" />
      <h1>
        전국 8도 로컬 크리에이터와 <br />
        파트너가 되고 싶습니다
      </h1>
      <p class="header-text">
        전국 8 도 로컬 크리에이터의 드래곤 볼을 하나로 모으고 싶습니다.
        혼자보다는 여럿이 함께 였을 때의 힘을 믿거든요. 파운드마켓 다람쥐 사원과
        함께 세상에 우리가 있음을 이야기할 분들을 찾고 있습니다.
        <br /><br />
        로컬 크리에이터의 영역은 정해져 있지 않습니다. 로컬을 기반으로 한 제품일
        수도 있고, 공간일 수도 있으며,서비스나 프로그램이어도 좋습니다. 제안해
        주세요.
        <br /><br />
        다람쥐 사원이 함께 고민하겠습니다.
      </p>
      <img class="form-header" src="/found-local-write.png" />

      <div class="form" v-for="(form, index) in forms" :key="index">
        <p class="question">{{ form.question }}</p>
        <textarea class="answer" v-model="forms[index].answer" />
      </div>

      <p class="closing-text">
        “다람쥐 사원에게 전달해 주신 내용은 검토 후, 순서대로 회신 드리도록
        하겠습니다"
      </p>

      <button class="normal-btn send-form-btn" @click="send">지원하기</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navi from "../components/Navi.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Navi,
    Footer,
  },
  data() {
    return {
      forms: [
        {
          attr: "content",
          question:
            "1. 파운드마켓의 다람쥐 사원에게 제안해 주실 것을 적어주세요!",
          answer: "",
        },
        {
          attr: "reason",
          question: "2. 다람쥐 사원에게 제안해주는 이유가 궁금해요!",
          answer: "",
        },
        {
          attr: "name",
          question: "3. 다람쥐 사원과 대화를 나눌 담당자 성함을 적어주세요!",
          answer: "",
        },
        {
          attr: "email",
          question:
            "4. 다람쥐 사원으로부터 답변 받을 이메일 주소를 적어주세요!",
          answer: "",
        },
        {
          attr: "phone",
          question: "5. 다람쥐 사원이 연락드릴 수 있는 전화번호를 남겨주세요!",
          answer: "",
        },
        {
          attr: "social",
          question: "6. 다람쥐 사원이 참고할 수 있는 Social media가 있을까요?",
          answer: "",
        },
      ],
    };
  },
  computed: {
    payload() {
      return this.forms.reduce(
        (prev, curr) => ({ ...prev, [curr.attr]: curr.answer }),
        {}
      );
    },
  },
  methods: {
    send() {
      console.log("send")
    },
  },
};
</script>


<style>
.local{
  padding-top: 120px;
}
.local img.header {
  margin-bottom: 137px;
}
.local img.balls {
  display: block;
  margin: 0 auto;
  margin-bottom: 18px;
  width: 596px;
}
.local .section h1 {
  font-family: IM_Hyemin-Bold;
  font-size: 40px;
  line-height: 1.52;
  text-align: center;
  margin-bottom: 27px;
}
.local p.header-text {
  font-family: "Noto Sans KR";
  font-size: 30px;
  line-height: 1.67;
  text-align: center;
  word-break: keep-all;
  margin-bottom: 117px;
}
.local .form-header {
  margin-bottom: 152px;
}
.local .form {
  margin-bottom: 33px;
}
.local .form .question {
  font-family: IM_Hyemin-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 15px;
}
.local .form textarea {
  background: rgba(255, 210, 40, 0.1);
  border: 2px solid #000000;
  box-sizing: border-box;
  resize: none;
  width: 100%;
  height: 100px;
  border-radius: 0;
  padding: 9px 11px;
  font-size: 22px;
}
.local .closing-text {
  font-family: IM_Hyemin-Bold;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 45px;
}
.local .send-form-btn {
  margin-bottom: 163px;
}
@media (max-width:980px) {
  .local img.header {
    width: 100%;
    margin-bottom: 63px;
  }
  .local .section h1{
    font-size: 22px;
    line-height: 26px;
  }
  .local p.header-text{
    font-size: 14px;
    line-height: 26px;
  }
  .local .form-header {
    margin-bottom: 39px;
  }
  .local .form .question{
    font-size: 14px;
    line-height: 17px;
  }
  .local .form textarea {
    border: 1px solid #000000;
  } 
  .local .closing-text{
    font-size: 12px;
    line-height: 18px;
  }
  .normal-btn{
    font-size: 10px;
    line-height: 12px;
    padding: 4px 14px;
  }
}
</style>
