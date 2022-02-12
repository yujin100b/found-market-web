<template>
  <div class="order">
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
        <div class="orderlist">
          <h2>주문 목록</h2>
          <div class="th">
            <span>주문 상품</span>
            <span>주문 상태</span>
          </div>
          <div
            class="tr"
            @click="goToOrerDetail(orderitem.id)"
            v-for="orderitem in orderlist"
            :key="orderitem.id"
          >
            <div class="info">
              <p>주문 번호: {{ orderitem.order_num }}</p>
              <p>{{ orderitem.order_name }}</p>
              <p>{{ orderitem.total_price }}원</p>
            </div>
            <div class="status">{{ orderitem.status }}</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      user: "이희준",
      orderlist: [
        {
          id: 1,
          order_num: "OD20210303-190713",
          total_price: 177000,
          order_name: "[파운드 티] 진피녹차 16g 외 1건",
          status: "입금 대기 중",
        },
        {
          id: 2,
          order_num: "OD20210303-190713",
          total_price: 177000,
          order_name: "[파운드 티] 진피녹차 16g 외 1건",
          status: "입금 대기 중",
        },
        {
          id: 3,
          order_num: "OD20210303-190713",
          total_price: 177000,
          order_name: "[파운드 티] 진피녹차 16g 외 1건",
          status: "입금 대기 중",
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
.order {
  padding-top: 152px;
}
.order > .section {
  padding-bottom: 267px;
}
.order h1 {
  font-family: IM_Hyemin-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  margin-bottom: 74px;
}
.order .wrap {
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
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
}
.wrap .mypage-nav a {
  font-family: "Noto Sans KR";
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
.wrap .orderlist {
  width: calc(100% - 205px);
}
.wrap .orderlist h2 {
  padding: 18px 36px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  background: #ffd228;
  border-bottom: 3px solid #000;
}
.wrap .orderlist .th {
  display: flex;
  justify-content: space-between;
  padding: 9px 0;
  border-bottom: 3px solid #000;
}
.wrap .orderlist .tr {
  display: flex;
  justify-content: space-between;
}
.wrap .orderlist .th span {
  display: block;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
}
.wrap .orderlist .tr {
  border-bottom: 1px solid #000;
  cursor: pointer;
}
.wrap .orderlist .tr:last-child {
  border-bottom: 0;
}
.wrap .orderlist .th span:first-child,
.wrap .orderlist .tr div.info {
  width: 345px;
}
.wrap .orderlist .tr div.info {
  padding-top: 18px;
  padding-left: 24px;
}
.wrap .orderlist .tr div.info p {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 13px;
}
.wrap .orderlist .tr div.info p:nth-child(2) {
  font-family: IM_Hyemin-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
}
.wrap .orderlist .th span:last-child,
.wrap .orderlist .tr div.status {
  width: 229px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrap .orderlist .tr div.status {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
}
@media (max-width: 980px) {
  .order h1 {
    font-size: 30px;
    line-height: 37px;
    margin-bottom: 5px;
  }
  .order .wrap {
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
  .wrap .orderlist {
    width: 100%;
  }
  .wrap .orderlist h2 {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    border-top: 3px solid #000;
  }
  .wrap .orderlist .th {
    display: none;
  }
  .wrap .orderlist .tr div.info p,
  .wrap .orderlist .tr div.info p:nth-child(2) {
    font-size: 14px;
    line-height: 19px;
  }
  .wrap .orderlist .tr div.info {
    padding-top: 18px;
    padding-left: 9px;
    width: unset;
  }
  .wrap .orderlist .tr div.status {
    font-size: 12px;
    line-height: 14px;
  }
  .wrap .orderlist .th span:last-child, .wrap .orderlist .tr div.status{
    justify-content: flex-end;
  }
  
}
</style>
