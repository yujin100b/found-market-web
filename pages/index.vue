<template>
  <div class="main">
    <img class="main-header-img" src="/welcometo.png" />
    <div class="navi">
      <div class="link-wrap">
        <router-link to="/">HOME</router-link>
        <router-link to="/">ABOUT</router-link>
        <router-link to="/">FOUND MARKET</router-link>
        <router-link to="/">FOUND FARM</router-link>
        <router-link to="/">FOUND LOCAL</router-link>
        <div class="another-link-wrap notosanskr">
          <router-link to="/">LOGIN</router-link>
          <router-link to="/">CART</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main {
  width: 100%;
}
.main-header-img {
  width: 100%;
  margin: 0 auto;
}
.navi {
  height: 80px;
  background: #ffd228;
  border-bottom: #000 solid 3px;
  border-top: #000 solid 3px;
}
.navi .link-wrap {
  width: 980px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navi .link-wrap > a {
  font-style: normal;
  font-weight: 900;
  font-family: IM_Hyemin-Bold;
  font-size: 22px;
  line-height: 20px;
  color: #000;
  padding: 9px;
}
.navi .link-wrap > a:hover {
  background: #ffffff;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
}
.navi .another-link-wrap a{
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  text-decoration-line: underline;
  font-family: 'Noto Sans KR';
  color: #000;
  padding: 9px;
}
</style>