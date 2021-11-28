<template>
<div class="found-farm-list">
  <Navi fixed/>
  <div class="section found-farm">
    <img class="section-header-img" src="/farm_header.png" />
    <div class="search-wrap">
      <input class="search" :v-model="search" />
    </div>
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <h3 class="title">{{ product.title }}</h3>
        <div class="img-wrap" :class="product.out ? 'out' : ''">
          <img :src="product.img" />
          <div v-if="product.out" class="outofstock">
              상품 준비 중 입니다.
            </div>
        </div>
        <div class="product-info">
          <h3 class="title sub">"{{ product.sub_title }}"</h3>
          <p class="desc">{{ product.desc }}</p>
          <p></p>
        </div>
      </div>
    </div>
    <button class="more">더 보기</button>
  </div>
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
          title: "가나안 농장의 ‘샤인머스캣’",
          sub_title: "눈부시게 맛있어요",
          desc: "가나안 농장은 1980년 부터 강원도 인제에서 2대째 물려오고 있는 샤인머스캣 농장으로 2019년 부터 더로컬프로젝트와 협업하여 눈부시게 맛있는 과일이라는 주제로 다양한 머스캣 테마 음료들을 준비하고 있습니다...",
          out: false
        },
        {
          id: 2,
          img: "/slide2.jpg",
          title: "가나안 농장의 ‘샤인머스캣’",
          sub_title: "눈부시게 맛있어요",
          desc: "가나안 농장은 1980년 부터 강원도 인제에서 2대째 물려오고 있는 샤인머스캣 농장으로 2019년 부터 더로컬프로젝트와 협업하여 눈부시게 맛있는 과일이라는 주제로 다양한 머스캣 테마 음료들을 준비하고 있습니다...",
          out: false
        },
        {
          id: 3,
          img: "/slide3.jpg",
          title: "가나안 농장의 ‘샤인머스캣’",
          sub_title: "눈부시게 맛있어요",
          desc: "가나안 농장은 1980년 부터 강원도 인제에서 2대째 물려오고 있는 샤인머스캣 농장으로 2019년 부터 더로컬프로젝트와 협업하여 눈부시게 맛있는 과일이라는 주제로 다양한 머스캣 테마 음료들을 준비하고 있습니다...",
          out: false
        },
        {
          id: 4,
          img: "/slide1.jpg",
          title: "가나안 농장의 ‘샤인머스캣’",
          sub_title: "눈부시게 맛있어요",
          desc: "가나안 농장은 1980년 부터 강원도 인제에서 2대째 물려오고 있는 샤인머스캣 농장으로 2019년 부터 더로컬프로젝트와 협업하여 눈부시게 맛있는 과일이라는 주제로 다양한 머스캣 테마 음료들을 준비하고 있습니다...",
          out: true
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

.found-farm-list .search-wrap{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 37px;
}
.found-farm-list .search{
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  background: url('/search.svg');
  background-position-x: 20px;
  background-position-y: center;
  background-repeat: no-repeat;
  font-family: Noto Sans KR;
  font-size: 20px;
  width: 300px;
  height: 50px;
  padding-left: 53px;
}
.found-farm-list .found-farm .products {
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 100px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 76px;
  margin-bottom: 113px;
}
.found-farm-list .found-farm .product{
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 24.5px 22px 19px;
  position: relative;
}
.found-farm-list .found-farm .product .img-wrap {
  position: relative;
  width: 250px;
  height: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 25px;
}
.found-farm-list .found-farm .product .img-wrap.out {
  background: rgba(0, 0, 0, 0.9);
}
.found-farm-list .found-farm .product .img-wrap.out img {
  opacity: 0.3;
}
.found-farm-list .found-farm .product .img-wrap.out div.outofstock {
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
  width: 80%;
}
.found-farm-list .found-farm .product img {
  display: block;
  height: 100%;
  width: 140%;
  max-width: unset;
}
.found-farm-list .found-farm .product .product-info {
  padding: 0 6px;
}
.found-farm-list .found-farm .product > h3.title {
  position: absolute;
  width: calc(100% - 70px);
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-family: IM_Hyemin-Bold;
  font-size: 15px;
  line-height: 72px;
  text-align: center;
  background-image: url('/farm_item_header.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: #000;
}
.found-farm-list .found-farm .product .sub{
  font-family: "IM_Hyemin-Regular";
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.015em;
  width: 100%;
  margin: 18px auto;
}
.found-farm-list .found-farm .product p.desc {
  font-family: "Noto Sans KR";
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  line-height: 1.6;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: -0.015em;
  text-decoration-line: underline;
}
.found-farm-list .found-farm .more {
  display: block;
  width: 100px;
  height: 40px;
  margin: 0 auto;
  background: #ffd228;
  font-family: IM_Hyemin-Bold;
  font-size: 20px;
  line-height: 24px;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
}
</style>
