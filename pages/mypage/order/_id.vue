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
        <div class="orderdetail">
          <h2>{{ orderdetail.order_name }}</h2>
          <div class="meta-wrap">
            <div class="meta">
              <p>[주문자 정보]</p>
              <p>
                <span>주문번호</span><span>{{ orderdetail.order_num }}</span>
              </p>
              <p>
                <span>주문일시</span
                ><span>{{ created_date(orderdetail.created_at) }}</span>
              </p>
              <p>
                <span>주문자명</span
                ><span>{{ user }}</span>
              </p>
              <p>
                <span>걸제현황</span><span>{{ orderdetail.status }}</span>
              </p>
            </div>
            <div class="meta">
              <p>[배송지 정보]</p>
              <p>
                <span>송장번호</span><span>{{ orderdetail.shipping_num }}</span>
              </p>
              <p>
                <span>수취인명</span><span>{{ orderdetail.receiver }}</span>
              </p>
              <p>
                <span>연락처</span><span>{{ orderdetail.phone_1 }}</span>
              </p>
              <p>
                <span>배송주소</span><span>{{ address }}</span>
              </p>
            </div>
          </div>

          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>상품정보</th>
                <th>수량</th>
                <th>처리 상태</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="cart-item"
                v-for="item in orderdetail.cart"
                :key="item.id"
              >
                <td class="cart-info">
                  <div class="img-wrap">
                    <img :src="item.product.thumbnail" />
                  </div>
                  <div class="info">
                    <p>{{ item.product.title }}</p>
                    <p>{{ item.order_price }}원</p>
                  </div>
                </td>
                <td class="quantity">
                  <p>{{ item.quantity }}</p>
                </td>
                <td class="status">
                  <p>{{ orderdetail.status }}</p>
                </td>
                <td class="review-btn-wrap">
                  <button>리뷰쓰기</button>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="summary">
            <p>
              상품 구매 금액 {{ orderdetail.total_price }}원 + 배송비
              {{ shippingPrice }}원
            </p>
            <p>{{ orderdetail.total_price + shippingPrice }}원</p>
          </div>

          <div class="transaction" v-if="isCompleted">
            <p>[결제 정보]</p>
            <p>
              <span>결제방법</span> <span>{{ isCompleted.payment_type }}</span>
            </p>
            <p>
              <span>결제일자</span>
              <span>{{ created_date(isCompleted.created_at) }}</span>
            </p>
            <p>
              <span>결제금액</span> <span>{{ isCompleted.total }}</span>
            </p>
            <p>
              <span>세부내역</span> <span>{{ isCompleted.detail }}</span>
            </p>
          </div>

          <div class="transaction" v-if="isCanceled">
            <p>[취소/환불 정보]</p>
            <p>
              <span>취소일자</span>
              <span>{{ created_date(isCanceled.created_at) }}</span>
            </p>
            <p>
              <span>차감금액</span>
              <span>{{ isCompleted.total - isCanceled.cost }}</span>
            </p>
            <p>
              <span>환불금액</span> <span>{{ isCanceled.cost }}</span>
            </p>
          </div>

          <div class="buttons">
            <button v-if="!isCanceled">주문 취소 요청</button>
            <button>주문 내역서 출력</button>
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
      user: this.$store.state.localStorage.user_name,
      orderdetail: {
        order_num: "OD20210303-190718",
        shipping_num: "대한통운 3434987920393",
        order_name:
          "[파운드 티] 제주가 품은 이야기, 어린잎과 만난 진피녹차 16g 외 1건",
        receiver: "이호진",
        address_1: "서울시 용산구 한강대로 321-1",
        address_2: "4층 옥상",
        zip_code: "03325",
        phone_1: "010-1234-4567",
        phone_2: "010-1234-4567",
        status: "입금 대기 중",
        cart: [
          {
            id: 1,
            product: {
              id: 1,
              thumbnail: "/slide1.jpg",
              title:
                "[파운드 티] 제주가 품은 이야기, 어린잎과 만난 진피녹차 16g",
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
            order_price: 9000,
            quantity: 10,
          },
          {
            id: 2,
            product: {
              id: 1,
              thumbnail: "/slide1.jpg",
              title:
                "[파운드 티] 제주가 품은 이야기, 어린잎과 만난 진피녹차 16g",
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
            order_price: 9000,
            quantity: 10,
          },
        ],
        transaction: [
          {
            payment_type: "무통장입금",
            total: 180000,
            status: "결제완료",
            detail: "입금이 확인되었습니다.",
            created_at: "2022-01-11T22:22:22.000Z",
          },
          {
            payment_type: "무통장입금",
            total: 180000,
            status: "취소완료",
            detail: "입금이 확인되었습니다.",
            created_at: "2022-01-11T22:22:22.000Z",
          },
        ],
        cancel: [
          {
            cancel_type: "취소문의",
            cost: 100000,
            reason: "사용자가 입력한 텍스트가 들어갑니다.",
            created_at: "2022-01-11T22:22:22.000Z",
          },
        ],
        created_at: "2022-01-11T22:22:22.000Z",
        updated_at: null,
        total_price: 180000,
      },
    };
  },
  computed: {
    order_num(){
      return this.$route.params.id
    },
    address() {
      const { address_1, address_2, zip_code } = this.orderdetail;
      return `${address_1} ${address_2} (${zip_code})`;
    },
    shippingPrice() {
      if (this.total_price >= 70000) {
        return 0;
      }
      return 3000;
    },
    isCanceled() {
      const cancel = this.orderdetail.transaction.filter(
        (el) => el.status == "취소완료"
      );
      if (cancel.length > 0) {
        return this.orderdetail.cancel[0];
      } else return false;
    },
    isCompleted() {
      const complete = this.orderdetail.transaction.filter(
        (el) => el.status == "결제완료"
      );
      if (complete.length > 0) return complete[0];
      else return false;
    },
  },
  methods: {
    created_date(created_at) {
      if (created_at == null) return "";
      let [date, _] = created_at.split("T");
      return date.replace(/\-/gi, ".");
    },
    goToOrerDetail(id) {
      this.$router.push(`/mypage/order/${id}`);
    },
    get_order_one(){
      this.$store.dispatch("get_order_one", this.order_num).then( res => {
          this.orderdetail = res.data[0]
        })
    },
  },
  mounted(){
    this.get_order_one()
  }
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
.wrap .orderdetail {
  width: calc(100% - 205px);
}
.wrap .orderdetail h2 {
  padding: 18px 36px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  background: #ffd228;
  border-bottom: 3px solid #000;
}
.wrap .orderdetail .th {
  display: flex;
  justify-content: space-between;
  padding: 9px 0;
  border-bottom: 3px solid #000;
}
.wrap .orderdetail .tr {
  display: flex;
  justify-content: space-between;
}
.wrap .orderdetail .th span {
  display: block;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
}
.wrap .orderdetail .tr {
  border-bottom: 1px solid #000;
  cursor: pointer;
}
.wrap .orderdetail .tr:last-child {
  border-bottom: 0;
}
.wrap .orderdetail .th span:first-child,
.wrap .orderdetail .tr div.info {
  width: 345px;
}
.wrap .orderdetail .tr div.info {
  padding-top: 18px;
  padding-left: 24px;
}
.wrap .orderdetail .tr div.info p {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 13px;
}
.wrap .orderdetail .tr div.info p:nth-child(2) {
  font-family: IM_Hyemin-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
}
.wrap .orderdetail .th span:last-child,
.wrap .orderdetail .tr div.status {
  width: 229px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrap .orderdetail .tr div.status {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
}
.orderdetail .meta-wrap {
  display: flex;
}
.orderdetail .meta-wrap .meta {
  width: 50%;
  padding: 33px 0;
}
.orderdetail .meta-wrap .meta p {
  padding-bottom: 10px;
  display: flex;
  align-items: flex-start;
}
.orderdetail .meta-wrap .meta p span {
  display: block;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 30px;
}
.orderdetail .meta-wrap .meta p span:first-child {
  width: 120px;
  min-width: 120px;
}
.orderdetail .meta-wrap .meta p span:first-child,
.orderdetail .meta-wrap .meta p:first-child {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
}
.orderdetail .table {
  border-top: 2px solid #000;
}
.orderdetail .table thead th {
  text-align: center;
  border-bottom: 1px solid #000000;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
}
.orderdetail .table tr {
  border-bottom: 1px solid #000000;
}
.orderdetail .table td {
  padding: 30px 0;
  vertical-align: middle;
  border-bottom: 0;
}
.orderdetail .table td:not(:first-child) {
  text-align: center;
}
.orderdetail .table .cart-info {
  display: flex;
  font-family: IM_Hyemin-Bold;
  font-style: normal;
  font-size: 22px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
}
.orderdetail .table .cart-info .info {
  width: 255px;
  padding-left: 19px;
}
.orderdetail .table .cart-item .img-wrap {
  position: relative;
  min-width: 100px;
  width: 100px;
  height: 100px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.orderdetail .table .cart-item .img-wrap img {
  display: block;
  height: 100%;
  width: 140%;
  max-width: unset;
}
.orderdetail .table .quantity,
.orderdetail .table .status {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
}
.orderdetail .review-btn-wrap button {
  background: #ffd228;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  padding: 11px;
}
.orderdetail .summary {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 1.5rem;
  border-bottom: 3px solid #000000;
}
.orderdetail .summary p {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
}
.orderdetail .summary p:last-child {
  padding-left: 28px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
}
.orderdetail .transaction {
  padding-top: 36px;
}
.orderdetail .transaction p {
  padding-bottom: 10px;
}
.orderdetail .transaction p:first-child {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
}
.orderdetail .transaction p:not(:first-child) {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.orderdetail .transaction p:not(:first-child) span {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
}
.orderdetail .transaction p:not(:first-child) span:first-child {
  width: 120px;
  min-width: 120px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 38px;
  border-bottom: 3px solid #000;
}
.buttons button {
  padding: 14px 22px;
  background: #ffd228;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
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
  .wrap .orderdetail {
    width: 100%;
  }
  .wrap .orderdetail h2 {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    border-top: 3px solid #000;
  }
  .orderdetail .meta-wrap {
    flex-direction: column;
  }
  .orderdetail .meta-wrap .meta {
    width: 100%;
    padding: 16.5px 0;
  }
  .orderdetail .meta-wrap .meta p span:first-child,
  .orderdetail .meta-wrap .meta p:first-child,
  .orderdetail .meta-wrap .meta p span {
    font-size: 16px;
    line-height: 22px;
  }
  .orderdetail .table .cart-info {
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
    line-height: 17px;
  }
  .orderdetail .table thead th:last-child {
    display: none;
  }
  .orderdetail .table tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .orderdetail .table td:last-child {
    display: none;
  }
  .orderdetail .table thead th {
    font-size: 12px;
    line-height: 16px;
    border-bottom: 0;
  }
  .orderdetail .table .cart-info .info {
    padding-left: 19px;
  }
  .orderdetail .table .cart-item .img-wrap {
    position: relative;
    min-width: 50px;
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
  }
  .orderdetail .table .cart-info .info {
    padding-left: 0;
    width: 75px;
  }
  .orderdetail .table td {
    padding: 11px 0;
  }
  .orderdetail .table .cart-info .info p {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 2px;
  }
  .orderdetail .table .cart-info .info p:last-child {
    font-family: "Noto Sans KR";
    font-size: 14px;
    line-height: 19px;
    font-weight: bold;
    margin-bottom: 0;
  }
  .orderdetail .summary{
    display: none;
  }
  .orderdetail .transaction p[data-v-25ba529e]:first-child {
    font-size: 16px;
    line-height: 22px;
  }
  .orderdetail .transaction p:not(:first-child) span:first-child,
  .orderdetail .transaction p:not(:first-child) span {
    font-size: 16px;
    line-height: 22px;
  }
  .buttons {
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding-top: 60px;
    border-bottom: 0;
  }
  .buttons button {
    width: 171px;
    height: 30px;
    font-size: 12px;
    line-height: 16px;
    padding: 0;
  }
}
</style>
