<template>
<div class="cart">
  <Navi fixed/>
  <div class="section">
    <h1 class="cart-title">CART <span>장바구니</span></h1>
    <div v-if="cart.length > 0" class="cart-list">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th></th>
          <th>상품정보</th>
          <th>수량</th>
          <th>주문금액</th>
        </tr>
      </thead>
      <tbody >
        <tr class="cart-item" v-for="item, index in cart" :key="item.id" >
          <th><input type="checkbox" /></th>
          <td>
            <div class="img-wrap">
            <img :src="item.product.img" />
            </div>
          </td>
          <td class="info">
            <p>{{ item.product.title }}</p>
            <p>{{ getPrice(item) }}원</p>
          </td>
          <td>
            <div class="cart-button">
            <button>-</button>
            <input type="number" v-model="cart[index].quantity" />
            <button>+</button>
            </div>
          </td>
          <td class="cart-amount"> {{ getPrice(item) * item.quantity }}원 </td>
        </tr>
      </tbody>
    </table>
    <div class="remove-buttons">
      <button>선택상품 삭제</button>
      <button>전체상품 삭제</button>
    </div>
    <div class="summary columns">
      <div class="column flex-box">
        <div>
          <p class="label">총 주문금액</p>
          <p class="price">{{ totalOrderPrice }}원</p>
        </div>
        <div>
          <p class="label">배송비</p>
          <p class="price">{{ shipping ? shipping + "원" : '무료' }}</p>
        </div>
      </div>
      <div class="column is-one-fifth">
        <p class="label">총 결제금액</p>
        <p class="price">{{ totalPrice }}원</p>
      </div>
    </div>
    <div class="to-order-buttons">
      <button @click="goBack">계속 쇼핑하기</button>
      <button @click="goOrder">주문하기</button>
    </div>
    </div>
    <div v-else class="cart-list">
      <table class="table is-fullwidth">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th></th>
          <th>상품정보</th>
          <th>수량</th>
          <th>주문금액</th>
        </tr>
      </thead>
      </table>
      <div class="cart-empty">
        <img src="/cart-empty.png" />
      </div>
      <div class="cart-empty-buttons">
      <button @click="goBack">계속 쇼핑하기</button>
    </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
import Navi from '../components/Navi.vue'

export default {
  components: {Navi},
  data(){
     return {
       _cart: [],
       cart: [
         {
           id : 1,
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
          quantity: 10
         },
         {
           id : 2,
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
          quantity: 10
         },
       ]
     }
  },
  computed: {
    totalOrderPrice() {
      const prices = this.cart.map(item => this.getPrice(item) * item.quantity)
      const total = prices.reduce((acc, cur) => acc + cur )
      return total
    },
    shipping() {
      if (this.totalOrderPrice > 70000 ) return 0
      return 3000
    },
    totalPrice() {
      return this.totalOrderPrice + this.shipping
    }
  },
  methods:{
    // TODO: comma plugin 추가 
    getPrice(cartitem){
      if (cartitem.product.sale_price) {
        return cartitem.product.sale_price
      }
      return cartitem.product.price
    },
    goBack(){
      this.$router.go(-1)
    },
    goOrder(){
      this.$router.push("/order")
    }
    },
}
</script>

<style scoped>
.cart{
  padding-top: 290px;
}
.cart-empty{
  padding-top: 7px;
  padding-bottom: 50px;
  display:flex;
  justify-content: center;
  border-bottom: 2px solid #000;
}
.summary{
  padding: 16px 0;
  border-bottom: 2px solid #000;
}
.flex-box{
  display: flex;
  justify-content: center;
}
.flex-box div:first-child{
  padding-right: 113px;
}
.flex-box div:last-child{
  padding-left: 113px;
}
.summary p.label {
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  color: #000000;
}
.summary p.price {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  text-align: center;
}
.cart .cart-title {
  font-family: IM_Hyemin-Bold;
  font-size: 64px;
  line-height: 78px;
}
.cart .cart-title span{
  font-size: 34px;
}
.cart .table{
  border-bottom: 1px solid #000;
  margin-bottom: 0;
}
.cart .table thead th{
  border: 0;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
  font-weight: 500;
}
.cart .table thead{
  background: #FFD228;
  border: 0;
  border-bottom: 2px solid #000;
  border-top: 2px solid #000;
}
.cart-item th{
  text-align: center;
  vertical-align: middle;
  border: 0;
  border-bottom: 1px solid #000;
}
.cart-item td{
  height: 248px;
  vertical-align: middle;
  border: 0;
  border-bottom: 1px solid #000;
}
.cart-item .img-wrap {
  position: relative;
  min-width: 150px;
  width: 150px;
  height: 150px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart-item .img-wrap img {
  display: block;
  height: 100%;
  width: 140%;
  max-width: unset;
}
.cart-item td.info p{
  width: 243px;
}
.cart-item td.info p:first-child{
  font-family: IM_Hyemin-Bold;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  padding-bottom: .2em;
}
.cart-item td.info p:last-child{
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
}

.cart-item .cart-button {
  display: flex;
  margin-bottom: 11px;;
}
.cart-item .cart-button button{
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 11px 22px;
  margin-right: 5px;
  font-size: 20px;
  font-weight: 600;
}
.cart-item .cart-button button:not(.addcart){
  min-width: 57px;
  height: 58px;
}
.cart-item .cart-button input {
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 15px;
  margin-right: 5px;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  max-width: 132px;
}
.cart-item .cart-amount{
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  text-align: right;
}
.cart .remove-buttons{
  padding: 20px 0;
  border-bottom: 2px solid #000;
}
.cart .remove-buttons button{
  margin-left: 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-decoration-line: underline;
  color: #000000;
  background-color: transparent;
  border: 0;
}
.to-order-buttons,
.cart-empty-buttons{
  padding: 80px 0;
  display: flex;
  justify-content: center;
}
.cart-empty-buttons button,
.to-order-buttons button{
  width: 279px;
  height: 50px;

  background: #FFD228;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;

  color: #000000;
}
.to-order-buttons button{
  margin: 0 7.5px
}
</style>