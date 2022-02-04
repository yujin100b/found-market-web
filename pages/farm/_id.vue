<template>
  <div class="detail">
    <Navi fixed />
    <div class="detail-body section">
      <p class="breadcrum">
        <span @click="goToMarketList">FOUND MARKET</span> > {{ product.title }}
      </p>
      <div class="shorts">
        <div class="img-wrap">
          <img :src="product.thumbnail" />
        </div>
        <div class="func-wrap">
          <div class="title-wrap">
            <h1 class="title">{{ product.title }}</h1>
            <p class="desc">{{ product.desc }}</p>
            <p class="price" :class="product.sale_price === 0 ? '' : 'sale'">
              <span v-if="product.sale_price"
                >{{ product.discount_rate }}%</span
              >
              {{
                product.sale_price === 0 ? product.price : product.sale_price
              }}원
            </p>
            <p v-if="product.sale_price" class="cancel-price">
              {{ product.price }}원
            </p>
            <div class="share-wrap mobile">
              <img class="share" src="/share.svg" />
            </div>
          </div>
          <div class="button-wrap">
            <div class="share-wrap pc">
              <img class="share" src="/share.svg" />
            </div>
            <div class="cart-button">
              <button @click="minus">
                <svg
                  width="7"
                  height="4"
                  viewBox="0 0 7 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.399414 3.03208V0.0800781H6.56741V3.03208H0.399414Z"
                    fill="black"
                  />
                </svg>
              </button>
              <input type="number" v-model="amount" />
              <button @click="plus">
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.55867 3.88H10.0587V6.02H6.55867V9.76H4.41867V6.02H0.918672V3.88H4.41867V0.0999994H6.55867V3.88Z"
                    fill="black"
                  />
                </svg>
              </button>
              <button class="addcart">장바구니에 담기</button>
            </div>
            <div class="pay-button">
              <button>
                <span class="pc">
                  <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="24" fill="white" />
                    <path
                      d="M15.4968 12.4936L10.2803 5H6V19H10.5032V11.5064L15.6752 19H20V5H15.4968V12.4936Z"
                      fill="#75CF48"
                    />
                  </svg>
                </span>
                <span class="mobile">
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="14" height="13" fill="white" />
                    <path
                      d="M8.07006 7.16202L5.8344 3H4V10.7758H5.92994V6.61373L8.1465 10.7758H10V3H8.07006V7.16202Z"
                      fill="#75CF48"
                    />
                  </svg>
                </span>
                <span>네이버 페이 구매</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="contents" v-html="product.contents"></div>
      <div class="contents-info">
        <img class="daram" src="/detail-note.png" />
        <div class="info-item" v-html="product.check"></div>
        <div class="info-item" v-html="product.note"></div>
        <div class="info-item" v-html="product.tips"></div>
        <div class="info-item" v-html="product.partner"></div>
      </div>
    </div>
    <DetailFive />
    <Review />
    <Footer />
    <div class="nav-btn pc">
      <div>상품설명</div>
      <div class="yellow">후기</div>
    </div>
  </div>
</template>

<script>
import DetailFive from "../../components/DetailFive.vue";
import Review from "../../components/Review.vue";
export default {
  components: { DetailFive, Review },
  data() {
    return {
      amount: 1,
      product: {
        id: 1,
        thumbnail: "/slide1.jpg",
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
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    goToFarmList() {
      this.$router.push("/farm");
    },
    plus() {
      this.amount = this.amount + 1;
    },
    minus() {
      if (this.amount - 1 < 1) {
        alert("최소 1개 이상의 상품을 구매할 수 있습니다. ");
        return;
      }
      this.amount = this.amount - 1;
    },
    get_farm_one() {
      this.$store.dispatch("get_farm_one", this.id).then((res) => {
        this.product = res.data;
      });
    },
  },
  created() {
    this.get_farm_one();
  },
};
</script>

<style>
.detail {
  padding-top: 80px;
}
.detail-body {
  padding-top: 115px;
  padding-bottom: 248px;
}
.breadcrum {
  font-family: IM_Hyemin-Bold;
  margin-bottom: 25px;
}
.breadcrum span {
  border-bottom: 1px solid #000;
}
.detail .shorts {
  display: flex;
  padding-bottom: 152px;
  border-bottom: 2px solid #000;
}
.detail .shorts .img-wrap {
  position: relative;
  min-width: 450px;
  width: 450px;
  height: 450px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 25px;
}
.detail .shorts .img-wrap img {
  display: block;
  height: 100%;
  width: 140%;
  max-width: unset;
}

.detail .shorts p.price {
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 9px;
}
.detail .shorts p.price span {
  color: #ff0000;
  padding-right: 6px;
}
.detail .shorts p.cancel-price {
  font-size: 18px;
  line-height: 25px;
  text-decoration-line: line-through;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 9px;
  font-family: "Noto Sans KR";
}
.detail .shorts p.desc {
  font-family: "Noto Sans KR";
  font-size: 18px;
  line-height: 1.39;
  color: rgba(0, 0, 0, 0.8);
}

.detail .shorts .func-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 36px;
}
.detail .shorts .share-wrap {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
  margin-right: 19px;
}
.detail .shorts .button-wrap {
  display: flex;
  flex-direction: column;
}
.detail .shorts .button-wrap .share {
  width: 44px;
  height: 40.43px;
}
.detail .shorts .cart-button {
  display: flex;
  margin-bottom: 11px;
}
.detail .shorts .cart-button button {
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 11px 22px;
  margin-right: 5px;
  font-size: 20px;
  font-weight: 600;
  font-family: "Noto Sans KR";
}
.detail .shorts .cart-button button:not(.addcart) {
  font-family: "Noto Sans KR";
  min-width: 57px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.detail .shorts .cart-button input {
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 15px;
  margin-right: 5px;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  max-width: 132px;
}
.detail .shorts .cart-button .addcart {
  width: 50%;
  background: #ffd228;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 15px;
  margin-right: 0;
  font-family: "Noto Sans KR";
  font-weight: 600;
  font-size: 20px;
}
.detail .shorts .pay-button button {
  background: #75cf48;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 15px;
  min-width: 100%;
  padding: 14px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
}
.detail .shorts .pay-button button span {
  padding-left: 0.5em;
}
.detail .contents-info {
  position: relative;
}
.detail .contents-info img.daram {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -10%;
}
.detail .contents {
  padding-top: 72px;
  padding-bottom: 266px;
  min-height: 800px;
}
.detail .contents * {
  text-align: center;
}
.detail .info-item:first-child {
  border-top: 1px solid #000;
}
.detail .info-item {
  min-height: 400px;
  border-bottom: 1px solid #000;
  background: rgba(196, 196, 196, 0.3);
}
.detail .info-item > p:first-of-type {
  font-weight: bold;
}
.nav-btn {
  position: fixed;
  top: 30%;
  right: 0;
}
.nav-btn div {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  padding: 9px;
  width: 50px;
  height: 50px;
  font-size: 14px;
  line-height: 13px;
  background: #ffffff;
  border: 2px solid #000000;
  border-bottom: 1px solid #000000;
}
.nav-btn div.yellow {
  border: 2px solid #000000;
  border-top: 1px solid #000000;
  display: flex;
  align-items: center;
  background: #ffd228;
}
@media (max-width: 980px) {
  .detail-body {
    padding-top: 0;
    padding-bottom: 170px;
    width: 100%;
  }
  .detail .title {
    padding: 20px 0;
    font-size: 20px;
    line-height: 29px;
    margin-bottom: 0;
  }
  .detail .shorts p.desc {
    display: none;
  }
  .breadcrum {
    display: none;
  }
  .detail .shorts {
    flex-direction: column;
    justify-content: center;
    width: 315px;
    margin: 0 auto;
    padding-bottom: 65px;
  }
  .detail .shorts .img-wrap {
    min-width: unset;
    width: 315px;
    height: 315px;
  }
  .detail .shorts .title-wrap {
    margin-bottom: 16px;
  }
  .detail .shorts .func-wrap {
    padding-left: 0px;
  }
  .detail .shorts p.price {
    display: inline;
    font-size: 20px;
    line-height: 27px;
    padding-right: 6px;
  }
  .detail .shorts p.cancel-price {
    display: inline;
    font-size: 20px;
    line-height: 27px;
  }
  .detail .shorts .share-wrap {
    margin-bottom: 0;
    display: inline-flex;
    margin-left: 64px;
    justify-content: unset;
  }
  .detail .shorts .share-wrap img {
    width: 23.32px;
    height: 21.43px;
  }
  .detail .shorts .cart-button button:not(.addcart) {
    max-width: 30px;
    min-width: 30px;
    width: 30px;
    height: 30px;
    padding: 0;
    border-radius: 10px;
  }
  .detail .shorts .cart-button input {
    width: 69px;
    height: 30px;
    border-radius: 10px;
  }
  .detail .shorts .cart-button .addcart {
    font-size: 12px;
    line-height: 16px;
    width: 171px;
    padding: 0;
    border-radius: 10px;
  }
  .detail .shorts .pay-button button {
    padding: 12px;
  }
  .detail .shorts .pay-button button span {
    font-size: 12px;
    line-height: 0;
  }
}
</style>
