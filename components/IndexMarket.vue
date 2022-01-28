<template>
  <div class="section found-market">
    <img class="section-header-img pc" src="/market_header.png" />
     <img class="section-header-img mobile" src="/mobile_marke_header.png" />
    <!-- <p>좋은 원료만을 사용해요.</p> 
    
    -->
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="img-wrap">
          <img :src="product.img" />
          <div v-if="product.new" class="new-mark">NEW</div>
        </div>
        <div class="product-info">
          <h3 class="title">{{ product.title }}</h3>
          <p class="price" :class="product.sale_price === 0 ? '' : 'sale'">
            <span v-if="product.sale_price">{{ product.discount_rate }}%</span>
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
    <button class="more">더 보기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        },
        {
          id: 4,
          img: "/slide1.jpg",
          title: "[파운드 티] 제주가 품은 이야기, 어린잎과 만난 진피녹차 16g",
          desc: "제주산 100% 고품질 찻잎만 담았어요",
          price: 9000,
          sale_price: 0,
          discount_rate: 0,
          new: true,
        },
      ],
    };
  },
};
</script>

<style>
/* .section p {
  width: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  font-family: IM_Hyemin-Bold;
  padding: 32px 0;
} */
.section.found-market{
  padding-top: 0;
}
.found-market .products {
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 108px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 102px;
  margin-bottom: 113px;
}
.new-mark {
  position: absolute;
  width: 70px;
  height: 70px;
  left: 17px;
  top: 18px;
  background: #ffd228;
  border: 2px solid #000000;
  border-radius: 50%;
  box-sizing: border-box;
  font-family: IM_Hyemin-Bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  line-height: 20px;
}
.found-market .product .img-wrap {
  position: relative;
  width: 470px;
  height: 470px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 25px;
}
.found-market .product img {
  display: block;
  height: 100%;
  width: 140%;
  max-width: unset;
}
.found-market .product .product-info {
  padding: 0 6px;
}
.found-market .product h3.title {
  font-family: IM_Hyemin-Bold;
  font-size: 30px;
  line-height: 37px;
  margin-top: 13px;
  margin-bottom: 9px;
  word-break: keep-all;
  color: #000;
}
.found-market .product p.price {
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  margin-bottom: 9px;
}
.found-market .product p.price span {
  color: #ff0000;
  padding-right: 6px;
}
.found-market .product p.cancel-price {
  font-size: 24px;
  line-height: 33px;
  text-decoration-line: line-through;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 9px;
  font-family: "Noto Sans KR";
}
.found-market .product p.desc {
  font-family: "Noto Sans KR";
  font-size: 20px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.8);
}

@media (max-width:980px) {
  .found-market .products{
    grid-column-gap: 15px;
    grid-row-gap: 33px;
    margin-top: 50px;
    margin-bottom: 66px;
  }
  .found-market .product .img-wrap{
    width: 150px;
    height: 150px;
  }
  .new-mark {
    width: 30px;
    height: 30px;
    left: 8px;
    top: 8px;
    font-size: 10px;
    line-height: 20px;
  }
  .found-market .product h3.title {
    font-size: 14px;
    line-height: 18px;
  }
  .found-market .product p.price{
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 0px;
    display: inline-block;
  }
  .found-market .product p.cancel-price {
    font-size: 10px;
    line-height: 14px;
    display: inline-block;
  }
  .found-market .product p.desc{
    display: none;
  }
}

</style>