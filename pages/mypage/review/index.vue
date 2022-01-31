<template>
  <div class="review-wrap">
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
        <div class="review">
          <h2>리뷰 관리</h2>
          <p>
            <span :class="isActive('one')" @click="changeTab('one')"
              >작성 가능한 리뷰</span
            >
            <span :class="isActive('two')" @click="changeTab('two')"
              >내가 작성한 리뷰</span
            >
          </p>
          <div v-if="tab == 'one'">
            <ReviewItem :content="will_review" />
          </div>
          <div v-if="tab == 'two'">
            <ReviewedItem :content="reviewed" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: "one",
      user: "이희준",
      will_review: [
        {
          id: 1,
          product: {
            id: 1,
            img: "/slide1.jpg",
            title: "[파운드 티] 제주가 품은 이야기, 어린잎과 만난 진피녹차 16g",
            desc: "제주산 100% 고품질 찻잎만 담았어요",
            price: 10000,
            sale_price: 9000,
            discount_rate: 10,
            new: true,
            out: false,
            contents: `
            <p>세부 컨텐츠가 나오는 자리입니다.</p>
            `,
            check: "",
            note: "",
            tips: "",
            partner: "",
          },
          quantity: 10,
        },
        {
          id: 2,
          product: {
            id: 1,
            img: "/slide1.jpg",
            title: "[파운드 티] 제주가 품은 이야기, 어린잎과 만난 진피녹차 16g",
            desc: "제주산 100% 고품질 찻잎만 담았어요",
            price: 10000,
            sale_price: 9000,
            discount_rate: 10,
            new: true,
            out: false,
            contents: `
            <p>세부 컨텐츠가 나오는 자리입니다.</p>
            `,
            check: "",
            note: "",
            tips: "",
            partner: "",
          },
          quantity: 10,
        },
      ],
      reviewed: [
        {
          id: 1,
          product: {
            id: 1,
            img: "/slide1.jpg",
            title: "[파운드 티] 제주가 품은 이야기, 어린잎과 만난 진피녹차 16g",
            desc: "제주산 100% 고품질 찻잎만 담았어요",
            price: 10000,
            sale_price: 9000,
            discount_rate: 10,
            new: true,
            out: false,
            contents: `
            <p>세부 컨텐츠가 나오는 자리입니다.</p>
            `,
            check: "",
            note: "",
            tips: "",
            partner: "",
          },
          quantity: 10,
        },
        {
          id: 2,
          product: {
            id: 1,
            img: "/slide1.jpg",
            title: "[파운드 티] 제주가 품은 이야기, 어린잎과 만난 진피녹차 16g",
            desc: "제주산 100% 고품질 찻잎만 담았어요",
            price: 10000,
            sale_price: 9000,
            discount_rate: 10,
            new: true,
            out: false,
            contents: `
            <p>세부 컨텐츠가 나오는 자리입니다.</p>
            `,
            check: "",
            note: "",
            tips: "",
            partner: "",
          },
          quantity: 10,
        },
      ],
    };
  },
  methods: {
    changeTab(tab_name) {
      this.tab = tab_name;
    },
    isActive(tab_name) {
      return this.tab === tab_name ? "active" : "";
    },
  },
};
</script>

<style scoped>
.review-wrap {
  padding-top: 152px;
}
.review-wrap > .section {
  padding-bottom: 267px;
}
.review-wrap h1 {
  font-family: IM_Hyemin-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  margin-bottom: 74px;
}
.review-wrap .wrap {
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
.wrap .review {
  width: calc(100% - 205px);
}
.wrap .review h2 {
  padding: 18px 36px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  background: #ffd228;
  border-bottom: 3px solid #000;
}
.wrap .review p {
  padding-top: 39px;
  padding-bottom: 7px;
  border-bottom: 2px solid #000;
}
.wrap .review p span {
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 22px;
  line-height: 30px;
  cursor: pointer;
}
.wrap .review p span.active {
  font-weight: bold;
}
.wrap .review p span:first-child {
  margin-right: 38px;
}
@media (max-width: 980px) {
  .review-wrap h1 {
    font-size: 30px;
    line-height: 37px;
    margin-bottom: 5px;
  }
  .review-wrap .wrap {
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
  .wrap .review {
    width: 100%;
  }
  .wrap .review h2 {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    border-top: 3px solid #000;
  }
  .wrap .review p {
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .wrap .review p span {
    font-size: 16px;
    line-height: 22px;
    text-decoration-line: underline;
  }
}
</style>
