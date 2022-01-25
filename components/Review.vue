<template>
  <div class="review section">
      <div class="review-header">
          <p class="title">Review</p>
          <router-link to="/">리뷰쓰기</router-link>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        
    }
}
</script>

<style>
.review-header{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.review-header .title{
  font-size: 60px;
  line-height: 73px;
  margin-bottom: 0;
}
.review-header a{
    font-family: "Noto Sans KR";
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    text-decoration-line: underline;
    color: #000000;
}
</style>