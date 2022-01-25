<template>
  <div class="notice">
    <Navi fixed />
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
        <div class="noticelist">
          <h2>공지사항</h2>
          <p class="accordion-header">공지사항</p>
          <dl class="accordion" role="presentation">
            <AccodianItem :content="content" />
          </dl>
          
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import AccodianItem from "../../../components/AccodianItem.vue";

export default {
  components:{AccodianItem},
  mounted() {
    this.groupId = this.$el.id;
  },
  data() {
    return {
      user: "이희준",
      multiple: true,
      groupId: '',
      content: [
        {
          id: 1,
          title: "이용약관 변경사항 안내",
          details: "이용약관 변경사항 안내",
          create_at: "2021.03.01"
        },
        {
          id: 2,
          title: "이용약관 변경사항 안내",
          details: "이용약관 변경사항 안내",
          create_at: "2021.03.01"
        },
        {
          id: 3,
          title: "이용약관 변경사항 안내",
          details: "이용약관 변경사항 안내",
          create_at: "2021.03.01"
        },
      ],
    };
  },
  methods: {
    goToOrerDetail(id) {
      this.$router.push(`/mypage/order/${id}`);
    },
  },
};
</script>

<style scoped>
.notice {
  padding-top: 152px;
}
.notice > .section {
  padding-bottom: 267px;
}
.notice h1 {
  font-family: IM_Hyemin-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  margin-bottom: 74px;
}
.notice .wrap {
  display: flex;
  border-top: 3px solid #000000;
}
.wrap .mypage-nav {
  padding-left: 36px;
  width: 205px;
}
.wrap .mypage-nav h2 {
  padding: 18px 36px;
  padding-left: 0;
  padding-bottom: 50px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
}
.wrap .mypage-nav a {
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 22px;
  line-height: 32px;
  display: block;
  margin-bottom: 16px;
  color: #000;
}

.wrap .mypage-nav a.nuxt-link-active {
  font-weight: bold;
}
.wrap .noticelist {
  width: calc(100% - 205px);
}
.wrap .noticelist h2 {
  padding: 18px 36px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  background: #ffd228;
  border-bottom: 3px solid #000;
}
.accordion-header{
  padding-top: 39px;
  padding-bottom: 7px;
  border-bottom: 2px solid #000000;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  /* identical to box height */
  color: #000000;
}



</style>
