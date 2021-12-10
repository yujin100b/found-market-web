<template>
  <div class="review section">
      <div class="reivew-header">
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
.reivew-header{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.reivew-header .title{
  font-size: 60px;
  line-height: 73px;
  margin-bottom: 0;
}
.reivew-header a{
    font-family: "Noto Sans KR";
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    text-decoration-line: underline;
    color: #000000;
}
</style>