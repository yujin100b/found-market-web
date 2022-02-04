<template>
  <div class="order">
    <Navi fixed />
    <div class="section">
      <h1>배송정보</h1>
      <div class="order-body">
        <div class="inputs">
          <div class="shipping">
            <label>
              <span>수령인*</span>
              <input class="full-width" />
            </label>
            <label class="address">
              <span>배송지</span>
              <input
                type="text"
                id="sample6_postcode"
                placeholder="우편번호"
                class="with-button"
              />
              <input
                type="button"
                @click="addrSearch"
                value="우편번호 찾기"
              /><br />
              <input
                type="text"
                id="sample6_address"
                placeholder="주소"
                class="full-width"
              /><br />
              <input
                type="text"
                id="sample6_detailAddress"
                placeholder="상세주소"
                class="full-width"
              />
            </label>
            <label class="phone">
              <span>연락처</span>
              <input /> - <input /> - <input />
            </label>
            <label class="phone">
              <span>연락처2</span>
              <input /> - <input /> - <input />
            </label>
            <label>
              <span>배송메모</span>
              <select v-model="message">
                <option disabled value="">배송메모를 남겨주세요.</option>
                <option>배송 전 연락바랍니다.</option>
                <option>부재시 경비실에 맡겨 주세요</option>
                <option>부재시 전화 주시거나 문자 남겨 주세요.</option>
              </select>
            </label>
            <label class="base-shipping">
            <check-box /> <span>이 배송지를 기본 배송지로 저장합니다.</span>
            </label>
          </div>
          <div class="transaction pc">
            <h1>결제 방법</h1>
            <p>무통장 입금: 국민 009901-04-162032 더로컬프로젝트(주)</p>
          </div>
        </div>
        <div class="summary">
          <div class="summary-header">
            <span>주문상품 정보</span>
            <span>수량</span>
            <span>주문 금액</span>
          </div>
          <div class="summary-body">
            <div v-for="item in cart" :key="item.id" class="summary-item">
              <span>
                <div class="img-wrap">
                  <img :src="item.product.img" />
                </div>
                <p class="item-title">{{ item.product.title }}</p>
                <p class="item-price">{{ getPrice(item) }}원</p>
              </span>
              <span class="quantity">
                {{ item.quantity }}
              </span>
              <span>{{ getPrice(item) * item.quantity }}원</span>
            </div>
          </div>
          <div class="summary-footer">
            <div>
              <p class="label">총 주문금액</p>
              <p class="price">{{ totalOrderPrice }}원</p>
            </div>
            <div>
              <p class="label">배송비</p>
              <p class="price">{{ shipping ? shipping + "원" : "무료" }}</p>
            </div>
            <div>
              <p class="label">총 결제금액</p>
              <p class="price">{{ totalPrice }}원</p>
            </div>
          </div>
          <div class="confirm-wrap pc">
            <check-box ref="confirmDoc" />
            <div>
              <p>
                상품 및 구매 조건을 확인하였으며, 결제 대행 서비스에
                동의합니다.(필수)
              </p>
              <p>개인정보 수집/이용 동의 (필수) <span>보기</span></p>
              <p>개인정보 제3자 제공 동의 (필수) <span>보기</span></p>
            </div>
          </div>
          <div class="button-wrap pc">
            <button @click="goToSuccess()">결제하기</button>
          </div>
        </div>
      </div>
      <div class="transaction mobile">
        <h1>결제 방법</h1>
        <p>무통장 입금: 국민 009901-04-162032 더로컬프로젝트(주)</p>
      </div>
      <div class="confirm-wrap mobile">
            <check-box ref="confirmDoc" />
            <div>
              <p>
                상품 및 구매 조건을 확인하였으며, 결제 대행 서비스에
                동의합니다.(필수)
              </p>
              <p>개인정보 수집/이용 동의 (필수) <span>보기</span></p>
              <p>개인정보 제3자 제공 동의 (필수) <span>보기</span></p>
            </div>
          </div>
          <div class="button-wrap mobile">
            <button @click="goToSuccess()">결제하기</button>
          </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CheckBox from "../../components/CheckBox.vue";
export default {
  components: { CheckBox },
  data() {
    return {
      message: "",
      cart: [
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
      order: {},
    };
  },
  computed: {
    totalOrderPrice() {
      const prices = this.cart.map(
        (item) => this.getPrice(item) * item.quantity
      );
      const total = prices.reduce((acc, cur) => acc + cur);
      return total;
    },
    shipping() {
      if (this.totalOrderPrice > 70000) return 0;
      return 3000;
    },
    totalPrice() {
      return this.totalOrderPrice + this.shipping;
    },
    confirmDocs() {
      return this.$refs.CheckBox.$props;
    },
  },
  methods: {
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
    getPrice(cartitem) {
      if (cartitem.product.sale_price) {
        return cartitem.product.sale_price;
      }
      return cartitem.product.price;
    },
    goToSuccess() {
      /* TODO: 주분 정보 저장하는 코드 넣기 */
      this.$router.push("/order/success");
    },
  },
};
</script>

<style scoped>
.order {
  padding-top: 270px;
}
.order h1 {
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  padding-bottom: 34px;
}
.order .transaction h1{
  padding-top: 50px;
}
.order-body {
  display: flex;
}
.order-body > div.inputs {
  width: 55%;
  padding-right: 85px;
}
.order-body > div.summary {
  width: 45%;
  padding: 11px 29px;
  background: rgba(5, 5, 5, 0.05);
  border: 1px solid #000000;
  box-sizing: border-box;
}
.order-body .shipping label {
  display: block;
  margin-bottom: 40px;
}
.order-body .shipping label span {
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  width: 70px;
  display: inline-block;
}
.order-body .shipping label input,
.order-body .shipping label select {
  background: #ffffff;
  border: 1px solid #000000;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-left: 0;
  display: inline-block;
}
.order-body .shipping label.address input:not(:last-child) {
  margin-bottom: 5px;
}
.order-body .shipping label input.full-width {
  width: calc(100% - 75px);
}
.order-body .shipping label input.with-button {
  width: calc(100% - 180px);
}
.order-body .shipping label input[type="button"] {
  background: #FFD228;
  width: 100px;
}
.order-body .shipping label select {
  height: 40px;
  width: calc(100% - 75px);
  appearance: none;
  background: url("/selectbox-arrow.svg");
  background-size: 16px 14px;
  background-repeat: no-repeat;
  background-position: center;
  background-position-x: calc(100% - 10px);
}
#sample6_address,
#sample6_detailAddress {
  margin-left: 75px;
}
.order-body .shipping label.phone input {
  width: 115px;
}
.order-body .shipping label {
    display: block;
    margin-bottom: 10px;
}
.transaction p {
  font-family: "Noto Sans KR";
}
.order-body .summary-header {
  display: flex;
  justify-content: space-between;
  font-family: Noto Sans;
}
.order-body .summary-header > span {
  width: 33.33%;
}
.order-body .summary-header > span:not(:first-child) {
  text-align: center;
}
.order-body .summary-header > span:last-child {
  text-align: right;
}
.order-body .summary-body {
  max-height: 491px;
  overflow: scroll;
}
.order-body .summary-item {
  display: flex;
  justify-content: space-between;
  padding: 19px 0;
  border-bottom: 1px solid #000;
}
.order-body .summary-item:last-child {
  border-bottom: 0;
}
.order-body .summary-item > span {
  width: 33.33%;
}
.order-body .summary-item > span:not(:first-child) {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.order-body .summary-item > span:nth-child(2),
.order-body .summary-item > span:last-child {
  font-family: Noto Sans KR;
  font-weight: bold;
}
.order-body .summary-item > span:last-child {
  text-align: right;
  justify-content: flex-end;
}
.summary-item .img-wrap {
  position: relative;
  min-width: 100px;
  width: 100px;
  height: 100px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.summary-item .img-wrap img {
  display: block;
  height: 100%;
  width: 140%;
  max-width: unset;
}
.order-body .summary-item p {
  font-size: 14px;
}
.order-body .summary-item p.item-title {
  font-size: 10px;
  font-family: IM_Hyemin-Bold;
  word-break: keep-all;
  padding-top: 9px;
}
.order-body .summary-item p.item-price {
  font-family: Noto Sans;
  font-weight: bold;
}
.order-body .summary-footer {
  border-top: 2px solid #000;
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  margin-bottom: 65px;
}
.order-body .summary-footer p {
  font-family: Noto Sans;
  text-align: center;
}
.order-body .summary-footer p.label {
  margin-bottom: 8px;
  font-weight: 500;
}
.order-body .summary-footer p.price {
  font-weight: bold;
}
.confirm-wrap {
  display: flex;
  align-items: flex-start;
  margin-bottom: 42px;
}
.confirm-wrap p {
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 9px;
  padding-left: 8px;
  padding-top: 8px;
}
.confirm-wrap p:not(:first-child) {
  color: #666666;
}
.confirm-wrap p span {
  text-decoration: underline;
}
.button-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 69px;
}
.button-wrap button {
  width: 279px;
  height: 50px;
  background: #ffd228;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
}
label.base-shipping{
  min-width: 319px;
  display: flex !important;
  margin-left: 75px;
}
label.base-shipping > label > span{
  margin-right: 10px;
  display: block;
  width: 319px;
}
@media (max-width: 980px) {
  .order{
    padding-top: 53px;
  }
  .order h1 {
    width: 315px;
    margin: 0 auto;
  }
  .order .section > h1{
    border-bottom:2px solid #000000;
    padding-bottom: 1px;
    margin-bottom: 18px;
  }
  .order-body {
    flex-direction: column;
  }
  .order-body > div.inputs {
    width: 315px;
    margin: 0 auto;
    padding-right: 0;
    padding-bottom: 30px;
  }
  .order-body .shipping label input.full-width{
    width: calc(100% - 59px);
}
  .order-body .shipping label span {
    width: 54px;
  }
  .order-body .shipping label input.with-button {
    width: calc(100% - 163px);
  }
  #sample6_address, #sample6_detailAddress {
    margin-left: 59px;
  }
  .order-body .shipping label.phone input{
    width: 74px;
  }
  .order-body .shipping label select{
    width: calc(100% - 59px);
  }
  .order-body > div.summary {
    width: 100%;
    border: 0;
  }
  .order-body .summary-header {
    font-size: 12px;
    line-height: 16px;
    padding-top: 2px;
    border-top: 2px solid #000000;
  }
  .transaction.mobile,
  .confirm-wrap.mobile{
    display: block;
    width: 315px;
    margin: 0 auto
  }
  .transaction.mobile{
    padding: 36px 0;
  }
  .confirm-wrap.mobile{
    display: flex;
    margin-bottom: 60px;
  }
  .transaction.mobile h1{
    font-size: 22px;
    line-height: 30px;
  }
}
</style>
