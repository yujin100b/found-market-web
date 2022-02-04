<template>
  <div class="found-market-list">
    <Navi fixed />
    <div class="section found-market">
      <img class="section-header-img pc" src="/market_header.png" />
      <img class="section-header-img mobile" src="/mobile_marke_header.svg" />
      <div class="search-wrap">
        <p>“전국 8도 로컬브랜드를 수집합니다!”</p>
        <input class="search" :v-model="search" />
      </div>
      <div class="products">
        <div
          class="product"
          v-for="product in products"
          :key="product.id"
          @click="goToDetail(product)"
        >
          <div class="img-wrap" :class="product.out ? 'out' : ''">
            <img :src="product.img" />
            <div v-if="product.new" class="new-mark">NEW</div>
            <div v-if="product.out" class="outofstock">
              상품 준비 중 입니다.
            </div>
          </div>
          <div class="product-info">
            <h3 class="title">{{ product.title }}</h3>
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
            <p class="desc">{{ product.desc }}</p>
            <p></p>
          </div>
        </div>
      </div>
      <button class="normal-btn">더 보기</button>

    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      products: [
        {
          id: 1,
          img: "/slide1.jpg",
          title: "[파운드 티] 제주가 품은 이야기, 어린잎과 만난 진피녹차 16g",
          desc: "제주산 100% 고품질 찻잎만 담았어요",
          price: 10000,
          sale_price: 9000,
          discount_rate: 10,
          new: true,
          out: false,
        },
        {
          id: 2,
          img: "/slide2.jpg",
          title: "[파운드 티] 제주가 품은 이야기, 어린잎과 만난 진피녹차 16g",
          desc: "제주산 100% 고품질 찻잎만 담았어요",
          price: 9000,
          sale_price: 0,
          discount_rate: 0,
          new: true,
          out: false,
        },
        {
          id: 3,
          img: "/slide3.jpg",
          title: "[파운드 티] 제주가 품은 이야기, 어린잎과 만난 진피녹차 16g",
          desc: "제주산 100% 고품질 찻잎만 담았어요",
          price: 9000,
          sale_price: 0,
          discount_rate: 0,
          new: true,
          out: false,
        },
        {
          id: 4,
          img: "/slide1.jpg",
          title: "[파운드 티] 제주가 품은 이야기, 어린잎과 만난 진피녹차 16g",
          desc: "제주산 100% 고품질 찻잎만 담았어요",
          price: 9000,
          sale_price: 0,
          discount_rate: 0,
          new: false,
          out: true,
        },
      ],
    };
  },
  methods: {
    goToDetail(product) {
      if (product.out) {
        alert("상품 준비 중 입니다. 조금만 기다려주세요!")
        return;
      }
      this.$router.push(`/market/${product.id}`);
    },
  },
};
</script>

<style>
.found-market-list {
  padding-top: 80px;
}
/* .section p {
  width: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  font-family: IM_Hyemin-Bold;
  padding: 32px 0;
} */
.found-market-list .search-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 37px;
  position: relative;
}
.found-market-list .search-wrap p{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: IM_Hyemin-Bold;
  font-size: 20px;
}
.found-market-list .search {
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  background: url("/search.svg");
  background-position-x: 20px;
  background-position-y: center;
  background-repeat: no-repeat;
  font-family: "Noto Sans KR";
  font-size: 20px;
  width: 300px;
  height: 50px;
  padding-left: 53px;
}
.found-market-list .found-market .products {
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 108px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 33px;
  margin-bottom: 113px;
}
.found-market-list .new-mark {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 13px;
  top: 13px;
  background: #ffd228;
  border: 2px solid #000000;
  border-radius: 50%;
  box-sizing: border-box;
  font-family: IM_Hyemin-Bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  line-height: 1.33;
}
.found-market-list .found-market .product .img-wrap {
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 25px;
}
.found-market-list .found-market .product .img-wrap.out {
  background: rgba(0, 0, 0, 0.9);
}
.found-market-list .found-market .product img {
  display: block;
  height: 100%;
  width: 140%;
  max-width: unset;
}
.found-market-list .found-market .product .img-wrap.out img {
  opacity: 0.3;
}
.found-market-list .found-market .product .img-wrap.out div.outofstock {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  color: white;
  font-family: IM_Hyemin-Bold;
  transform: translate(-50%, -50%);
  font-size: 1.7rem;
  text-align: center;

  word-break: keep-all;
}
.found-market-list .found-market .product .product-info {
  padding: 0 6px;
}
.found-market-list .found-market .product h3.title {
  font-family: IM_Hyemin-Bold;
  font-size: 20px;
  line-height: 24px;
  margin-top: 13px;
  margin-bottom: 9px;
  word-break: keep-all;
  color: #000;
}
.found-market-list .found-market .product p.price {
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 9px;
}
.found-market-list .found-market .product p.price span {
  color: #ff0000;
  padding-right: 6px;
}
.found-market-list .found-market .product p.cancel-price {
  font-size: 18px;
  line-height: 25px;
  text-decoration-line: line-through;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 9px;
  font-family: "Noto Sans KR";
}
.found-market-list .found-market .product p.desc {
  font-family: "Noto Sans KR";
  font-size: 18px;
  line-height: 1.39;
  color: rgba(0, 0, 0, 0.8);
}
@media (max-width:980px) {
  .section-header-img {
    width: 100%;
  }
  .found-market-list .found-market .products {
    grid-column-gap: 15px;
    grid-row-gap: 32px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 42px;
  }
  .found-market-list .search-wrap {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
  .found-market-list .search-wrap p{
    position: relative;
    font-size: 14px;
    text-align: center;
    left: unset;
    top: unset;
    transform: unset;
    padding: 20px 0;
  }
  .found-market-list .found-market .product .img-wrap {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
  .found-market-list .search{
    width: 226px;
    height: 34px;
    background-size: 15.59px;
  }
  .found-market-list .found-market .product h3.title {
    font-size: 14px;
    line-height: 18px;
    margin-top: 9px;
    margin-bottom: 2px;
  }
  .found-market-list .found-market .product p.price{
    display: inline-block;
    font-size: 14px;
    line-height: 19px;
  }
  .found-market-list .found-market .product p.cancel-price{
    font-size: 10px;
    line-height: 14px;
    display: inline-block;
    padding-left: 6px;
  }
  .found-market-list .found-market .product .img-wrap.out div.outofstock{
    font-size: 22px;
    line-height: 27px;
  }
  .found-market-list .new-mark{
    width: 30px;
    height: 30px;
    font-size: 10px;
    line-height: 20px;
  }
  .normal-btn{
    font-size: 10px;
    line-height: 12px;
    padding: 4px 14px;
  }
}
</style>