<template>
  <div class="review section">
    <div class="review-header">
      <p class="review-title">Review</p>
      <router-link to="/mypage/review">리뷰쓰기</router-link>
    </div>
    <div class="review-body">
        <div class="review-empty">
            <img src="/empty-review.png" />
        </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
      return{
          review : []
      }
  },
};
</script>

<style>
.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #000000;
  padding-bottom: 15px;
}
.review-header .review-title {
  font-family: IM_Hyemin-Bold;
  font-size: 60px;
  line-height: 1;
  margin-bottom: 0;
}
.review-header a {
  font-family: "Noto Sans KR";
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  text-decoration-line: underline;
  color: #000000;
}
.review-empty{
    padding-top: 60px;
}
.review-empty img{
    display: block;
    margin: 0 auto;
}
@media (max-width: 980px) {
  .review-header {
    padding-bottom: 7px;
  }
  .review-header .review-title {
    font-size: 22px;
    line-height: 27px;
  }
  .review-header a{
    font-size: 14px;
    line-height: 19px;
  }
}
</style>