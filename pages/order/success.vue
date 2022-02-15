<template>
  <div class="success">
    <Navi fixed />
    <div class="section">
      <div class="img-wrapper">
        <img src="/order-complete.png" />
      </div>
      <h1 class="success-title">"주문이 완료되었습니다."</h1>
      <p class="success-account">
        무통장 입금 계좌번호 <br> 국민 009901-04-162032 더로컬프로젝트(주)
      </p>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>주문 상품</th>
            <th>결제 금액</th>
            <th>주문 상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="info">
              <p>{{ order.order_name }}</p>
              <p>
                주문 번호 : <span>{{ order.order_num }}</span>
              </p>
              <p class="mobile">{{ order.total_price }}원</p>
            </td>
            <td>
              <p class="pc">{{ order.total_price }}원</p>
            </td>
            <td>
              <p>{{ order.status }}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="button-wrap">
        <button @click="goToOrderDetail">주문 내역 보기</button>
        <button @click="goToMarket">다른 상품 보기</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        total_price: 177000,
        order_name: "[파운드 티] 진피녹차 16g 외 1건",
        order_num: "OD20210303-190718",
        status: "입금 대기 중",
      },
    };
  },
  computed:{
    order_num(){
      return this.$route.query.id
    }
  },
  methods:{
    get_order_success(){
      this.$store.dispatch("get_order_one", this.order_num).then( res => {
          this.order = res.data[0]
        })
    },
    goToMarket(){
      this.$router.push("/market")
    },
    goToOrderDetail(){
      this.$router.push(`/mypage/order/${this.order_num}`)
    }
  },
  mounted(){
    this.get_order_success()
  }
};
</script>

<style scoped>
.success {
  padding-top: calc(253px - 90px);
}
.success .section{
    padding-bottom: 189px;
}
.img-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 35.72px;
}
.section .success-title {
  font-family: IM_Hyemin-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 49px;
  text-align: center;
  margin-bottom: 62px;
}
.success-account {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  margin-bottom: calc(44px + 49px);
}
.success thead {
  background: #ffd228;
  border: 0;
  border-bottom: 2px solid #000;
  border-top: 2px solid #000;
}
table.is-fullwidth {
  width: 100%;
  border-bottom: 2px solid #000000;
  margin-bottom: 103px;
}
table thead th {
  border: 0;
  text-align: center;
  color: #000000;
  font-weight: 500;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
}
.success th {
  text-align: center;
  vertical-align: middle;
  border: 0;
  border-bottom: 1px solid #000;
}
.success td {
  height: 109px;
  vertical-align: middle;
  text-align: center;
  border: 0;
  border-bottom: 1px solid #000;
}
.success td p {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
}
.success td.info p {
  font-family: "Noto Sans KR";
}
.success td.info p:last-child span {
  font-family: "Noto Sans KR";
  font-weight: 500;
}
.success .info p:first-child {
  font-family: IM_Hyemin-Bold;
}
.button-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-wrap button {
  width: 284px;
  height: 50px;
  background: #ffd228;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0 16.5px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
}
@media (max-width:980px) {
  .success{
    padding-top:83px;
  }
  .success .section[data-v-403efcce] {
      padding-bottom: 62px;
  }
  .success .img-wrapper img{
    width: 113.7px;
  }
  .section .success-title {
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 13px;
  }
  .success-account{
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 13px;
  }
  .success thead{
    display: none;
  }
  table.is-fullwidth{
    border-bottom: 1px solid #000000;
    margin-bottom: 40px;
  }
  .table tbody{
    border-top: 1px solid #000000;
  }
  .success td:nth-child(2){
    display: none;
  }
   .success td.info p,
  .success td.info{
    text-align: left;
  }
  .success td p{
    font-size: 12px;
    line-height: 14px;
  }
  .button-wrap{
    flex-direction: column;
  }
  .button-wrap button{
    width: 171px;
    height: 30px;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 7px;
  }
}
</style>