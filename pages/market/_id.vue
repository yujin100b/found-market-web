<template>
  <div class="detail">
    <Navi fixed />
    <div class="detail-body section">
      <p class="breadcrum">
        <span @click="goToMarketList">FOUND MARKET</span> > {{ product.title }}
      </p>
      <div class="shorts">
        <div class="img-wrap">
            <img :src="product.img" />
        </div>
        <div>
          <h1 class="title">{{product.title}}</h1>
          <p class="desc">{{product.desc}}</p>
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
          <div>
            <button>+</button>
            <input type="number" v-model="amount" />
            <button>+</button>
            <button>장바구니에 담기</button>
          </div>
          <button>네이버 페이 구매</button>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount : 1,
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
        contents:`
        <p>세부 컨텐츠가 나오는 자리입니다.</p>
        `,
        check: '',
        note: '',
        tips: '',
        partner: '',
      },
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    goToMarketList() {
      this.$router.push("/market");
    },
  },
};
</script>

<style>
.detail {
  padding-top: 80px;
}
.detail-body {
  padding-top: 115px;
}
.breadcrum {
  font-family: IM_Hyemin-Bold;
}
.breadcrum span {
  border-bottom: 1px solid #000;
}
.detail .shorts{
  display: flex;
}
.detail .shorts .img-wrap {
  position: relative;
  width: 450px;
  height: 450px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 25px;
}
.detail .contents-info{
  position: relative;
}
.detail .contents-info img.daram{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -10%;
}
.detail .contents {
  border-top: 2px solid #000;
  padding-top: 72px;
  padding-bottom: 266px;
  min-height: 800px;
}
.detail .contents *{
  text-align: center;
}
.detail .info-item:first-child{
  border-top: 1px solid #000;
}
.detail .info-item{
  min-height: 400px;
  border-bottom: 1px solid #000;
  background: rgba(196, 196, 196, 0.3);
}
.detail .info-item > p:first-of-type{
  font-weight: bold;
}
</style>
