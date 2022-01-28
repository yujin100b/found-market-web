<template>
  <div class="local-news">
    <div class="section">
      <h2>더 로컬 프로젝트 소식이 <br> 궁금하시다면?</h2>
      <div class="local-news-header">THE LOCAL NEWS</div>
      <div class="local-news-section">
        <div
          v-for="item in one"
          :key="item.id"
          class="local-news-item"
          @click="openInNewTab(item.link)"
        >
          <div class="img-wrap">
            <img :src="item.thumbnail" />
          </div>
          <div class="text-wrap">
            <p class="title">{{ item.title }}</p>
            <p class="short">{{ clampText(item.short) }}</p>
            <p class="post-info">
              <span>{{ item.media }}</span
              >{{ item.post_on }}
            </p>
          </div>
        </div>
      </div>
      <div class="local-news-section">
        <div
          v-for="item in two"
          :key="item.id"
          class="local-news-item"
          @click="openInNewTab(item.link)"
        >
          <div class="img-wrap">
            <img :src="item.thumbnail" />
          </div>
          <div class="text-wrap">
            <p class="title">{{ item.title }}</p>
            <p class="short">{{ clampText(item.short) }}</p>
            <p class="post-info">
              <span>{{ item.media }}</span
              >{{ item.post_on }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          id: 1,
          link: "https://platum.kr/archives/157737",
          thumbnail: "https://platum.kr/wp-content/uploads/2021/02/local.jpg",
          title: "로컬 농식품 스타트업 ‘더로컬프로젝트’, 시드 투자유치",
          post_on: "2021-02-09",
          media: "Platum",
          short:
            "로컬 농식품 스타트업 ‘더로컬프로젝트’가 임팩트투자사 엠와이소셜컴퍼니(MYSC)로부터 시드투자를 유치했다. 더로컬프로젝트는 전국 로컬 네트워킹과 인프라를 활용해 로컬제품을 대중에게 알리고 스케일업을 도모하고 있다. 회사의 첫 프로젝트인 제주 진피녹차는 시장에서 좋은 반응을 얻고 있다. 이후 하동, 영월, 밀양 등 전국 차 생산 지역의 콘텐츠를 아카이브하고 차 원료를 확보하여 건강한 마실거리를 제안하는 차 특화 라이프스타일 브랜드도 구축할 계획이다.",
        },
        {
          id: 2,
          link: "https://platum.kr/archives/157737",
          thumbnail: "https://platum.kr/wp-content/uploads/2021/02/local.jpg",
          title: "로컬 농식품 스타트업 ‘더로컬프로젝트’, 시드 투자유치",
          post_on: "2021-02-09",
          media: "Platum",
          short:
            "로컬 농식품 스타트업 ‘더로컬프로젝트’가 임팩트투자사 엠와이소셜컴퍼니(MYSC)로부터 시드투자를 유치했다. 더로컬프로젝트는 전국 로컬 네트워킹과 인프라를 활용해 로컬제품을 대중에게 알리고 스케일업을 도모하고 있다. 회사의 첫 프로젝트인 제주 진피녹차는 시장에서 좋은 반응을 얻고 있다. 이후 하동, 영월, 밀양 등 전국 차 생산 지역의 콘텐츠를 아카이브하고 차 원료를 확보하여 건강한 마실거리를 제안하는 차 특화 라이프스타일 브랜드도 구축할 계획이다.",
        },
        {
          id: 3,
          link: "https://platum.kr/archives/157737",
          thumbnail: "https://platum.kr/wp-content/uploads/2021/02/local.jpg",
          title: "로컬 농식품 스타트업 ‘더로컬프로젝트’, 시드 투자유치",
          post_on: "2021-02-09",
          media: "Platum",
          short:
            "로컬 농식품 스타트업 ‘더로컬프로젝트’가 임팩트투자사 엠와이소셜컴퍼니(MYSC)로부터 시드투자를 유치했다. 더로컬프로젝트는 전국 로컬 네트워킹과 인프라를 활용해 로컬제품을 대중에게 알리고 스케일업을 도모하고 있다. 회사의 첫 프로젝트인 제주 진피녹차는 시장에서 좋은 반응을 얻고 있다. 이후 하동, 영월, 밀양 등 전국 차 생산 지역의 콘텐츠를 아카이브하고 차 원료를 확보하여 건강한 마실거리를 제안하는 차 특화 라이프스타일 브랜드도 구축할 계획이다.",
        },
        {
          id: 4,
          link: "https://platum.kr/archives/157737",
          thumbnail: "https://platum.kr/wp-content/uploads/2021/02/local.jpg",
          title: "로컬 농식품 스타트업 ‘더로컬프로젝트’, 시드 투자유치",
          post_on: "2021-02-09",
          media: "Platum",
          short:
            "로컬 농식품 스타트업 ‘더로컬프로젝트’가 임팩트투자사 엠와이소셜컴퍼니(MYSC)로부터 시드투자를 유치했다. 더로컬프로젝트는 전국 로컬 네트워킹과 인프라를 활용해 로컬제품을 대중에게 알리고 스케일업을 도모하고 있다. 회사의 첫 프로젝트인 제주 진피녹차는 시장에서 좋은 반응을 얻고 있다. 이후 하동, 영월, 밀양 등 전국 차 생산 지역의 콘텐츠를 아카이브하고 차 원료를 확보하여 건강한 마실거리를 제안하는 차 특화 라이프스타일 브랜드도 구축할 계획이다.",
        },
      ],
    };
  },
  computed:{
    one(){
      return this.news.slice(0, 2);
    },
    two(){
      return this.news.slice(2);
    }
  },
  methods: {
    openInNewTab(url) {
      window.open(url, "_blank").focus();
    },
    clampText(text){
      if (text.length > 100){
        return text.slice(0, 100) + "..."
      }
      return text
    }
  },
};
</script>

<style>
.local-news{
  background: rgba(255, 210, 40, 0.2);
}
.local-news div.section{
    padding: 50px 0;
    padding-bottom: 162px;
}
.local-news h2{
    font-family: IM_Hyemin-Bold;
    font-size: 30px;
    color: #000;
    text-align: center;
    margin-bottom: 50px;
}
.local-news-header{
    font-size: 60px;
    font-family: IM_Hyemin-Bold;
    text-align: center;
    border-top: 6px solid #000;
    border-bottom: 6px solid #000;
    margin-bottom: 50px;
}
.local-news-section{
   display: flex;
   padding-bottom: 21px;
   border-bottom: 1px solid #000;
}
.local-news-section:last-child{
  padding-top: 21px;
}
.local-news-item{
  display: flex;
}
.local-news-item .img-wrap{
  width: 200px;
  height: 200px;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  overflow: hidden;
}
.local-news-item .img-wrap img{
  height: 100%;
  width: 120%;
  max-width: unset
}
.local-news-item .text-wrap{
  width: 300px;
  padding: 8px 19px;
}
.local-news-item .text-wrap .title{
  font-family: "Noto Sans KR";
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 8px;
}
.local-news-item:hover .text-wrap .title{
  text-decoration: underline;
}
.local-news-item .text-wrap .short{
  font-family: "Noto Sans KR";
  font-size: 15px;
  line-height: 20px;
  padding-bottom: 1em;
}
.local-news-item .text-wrap .post-info{
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.015em;
  color: rgba(0, 0, 0, 0.3);
}
.local-news-item .text-wrap .post-info span{
  color: rgba(0, 0, 0, 0.7);
  padding-right: 8px;
}
@media (max-width: 980px) {
  .local-news-section{
    flex-direction: column;
  }
  .local-news div.section{
    padding-top:10px;
    padding-bottom: 32px;
  }
  .local-news h2{
    font-size: 8px;
    margin-bottom: 10px;
  }
  .local-news-header{
    font-size: 22px;
    padding: 12px 0;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
    border-radius: 1px;
    margin-bottom: 11px;
  }
  .local-news-section:last-child{
    padding-top: 11px;
  }
  .local-news-section{
    padding-bottom: 11px;
  }
  .local-news-section .local-news-item:first-child{
    border-bottom: 1px solid #000000;
    padding-bottom: 11px;
  }
  .local-news-section .local-news-item:last-child {
    padding-top: 11px;
}
  .local-news-item .img-wrap {
    width: 100px;
    height: 100px;
  }
  .local-news-item .text-wrap{
    width: 208px;
    padding-right: 0;
    padding-bottom: 0;
    padding-top:0;
  }
  .local-news-item .text-wrap .title {
    font-size: 10px;
    line-height: 14px;
  }
  .local-news-item .text-wrap .short{
    font-size: 10px;
  line-height: 14px;
  } 
}
</style>