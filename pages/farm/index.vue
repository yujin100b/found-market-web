<template>
  <div class="found-farm-list">
    <Navi fixed />
    <div class="section found-farm">
      <img class="section-header-img pc" src="/farm_header.png" />
      <img class="section-header-img mobile" src="/mobile_farm_header.svg" />
      <div class="search-wrap">
        <p>“전국 8도 로컬브랜드를 수집합니다!”</p>
        <input class="search" v-model="search" />
      </div>
      <div class="products" v-if="filtered.length > 0">
        <div
          class="product"
          v-for="product in filtered"
          :key="product.id"
          @click="goToFarmDetail(product)"
        >
          <h3 class="title">{{ product.title }}</h3>
          <div class="img-wrap" :class="product.out ? 'out' : ''">
            <img :src="product.thumbnail" />
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
      <div v-else class="products">
        <p>"{{ this.search }}" 에 대한 상품 결과가 없습니다.</p>
      </div>
      <button class="more">더 보기</button>
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
          thumbnail: "/slide1.jpg",
          title: "가나안 농장의 ‘샤인머스캣’",
          sub_title: "눈부시게 맛있어요",
          desc: "가나안 농장은 1980년 부터 강원도 인제에서 2대째 물려오고 있는 샤인머스캣 농장으로 2019년 부터 더로컬프로젝트와 협업하여 눈부시게 맛있는 과일이라는 주제로 다양한 머스캣 테마 음료들을 준비하고 있습니다...",
          out: false,
        },
        {
          id: 2,
          thumbnail: "/slide2.jpg",
          title: "가나안 농장의 ‘샤인머스캣’",
          sub_title: "눈부시게 맛있어요",
          desc: "가나안 농장은 1980년 부터 강원도 인제에서 2대째 물려오고 있는 샤인머스캣 농장으로 2019년 부터 더로컬프로젝트와 협업하여 눈부시게 맛있는 과일이라는 주제로 다양한 머스캣 테마 음료들을 준비하고 있습니다...",
          out: false,
        },
        {
          id: 3,
          thumbnail: "/slide3.jpg",
          title: "가나안 농장의 ‘샤인머스캣’",
          sub_title: "눈부시게 맛있어요",
          desc: "가나안 농장은 1980년 부터 강원도 인제에서 2대째 물려오고 있는 샤인머스캣 농장으로 2019년 부터 더로컬프로젝트와 협업하여 눈부시게 맛있는 과일이라는 주제로 다양한 머스캣 테마 음료들을 준비하고 있습니다...",
          out: false,
        },
        {
          id: 4,
          thumbnail: "/slide1.jpg",
          title: "가나안 농장의 ‘샤인머스캣’",
          sub_title: "눈부시게 맛있어요",
          desc: "가나안 농장은 1980년 부터 강원도 인제에서 2대째 물려오고 있는 샤인머스캣 농장으로 2019년 부터 더로컬프로젝트와 협업하여 눈부시게 맛있는 과일이라는 주제로 다양한 머스캣 테마 음료들을 준비하고 있습니다...",
          out: true,
        },
      ],
    };
  },
  computed:{
    filtered(){
      if (this.search.length){
        return this.products.filter(({title}) => title.indexOf(this.search) !== -1 )
      }
      return this.products
    }
  },
  methods: {
    getFarm() {
      this.$store.dispatch("get_farm").then((res) => {
        if (res.data.length) {
          this.products = res.data;
        }
      });
    },
    goToFarmDetail(product) {
      if (product.out) {
        alert("상품 준비 중 입니다. 조금만 기다려주세요!")
        return;
      }
      this.$router.push(`/farm/${product.id}`);
    },
  },
  mounted(){
    this.getFarm()
  }
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
.found-farm {
  padding-top: 120px;
}
.found-farm-list {
  padding-top: 80px;
}
.found-farm-list .search-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 37px;
  position: relative;
}
.found-farm-list .search-wrap p {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: IM_Hyemin-Bold;
  font-size: 20px;
}

.found-farm-list .search {
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
.found-farm-list .found-farm .products {
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 100px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 76px;
  margin-bottom: 113px;
}
.found-farm-list .found-farm .product {
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
  background-image: url("/farm_item_header.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: #000;
}
.found-farm-list .found-farm .product .sub {
  font-family: "IM_Hyemin-Bold";
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.015em;
  width: 100%;
  margin: 18px auto;
  margin-bottom: 8px;
}
.found-farm-list .found-farm .product p.desc {
  font-family: "Noto Sans KR";
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  line-height: 1.6;
  display: flex;
  align-items: center;
  text-align: center;
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
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
}
@media (max-width: 980px) {
  .section-header-img {
    margin: 0 auto;
    display: block;
  }
  .found-farm-list .search-wrap {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
  .found-farm-list .search-wrap p {
    position: relative;
    font-size: 14px;
    text-align: center;
    left: unset;
    top: unset;
    transform: unset;
    padding: 20px 0;
  }
  .found-farm-list .search {
    width: 226px;
    height: 34px;
    background-size: 15.59px;
  }

  .found-farm-list .found-farm .products {
    grid-row-gap: 80px;
    grid-template-columns: 1fr;
    margin-bottom: 16px;
  }
  .found-farm-list .found-farm .product .img-wrap {
    width: 270px;
    height: 270px;
    border-radius: 10px;
  }
  .found-farm-list .found-farm .more {
    width: 60px;
    height: 20px;
    font-size: 10px;
    line-height: 12px;
  }
}
</style>
