<!-- Please remove this file from your project -->
<template>
  <div class="navi">
      <div class="link-wrap">
        <router-link to="/"><h1>HOME</h1></router-link>
        <router-link to="/about"><h1>ABOUT</h1></router-link>
        <router-link to="/market"><h1>FOUND MARKET</h1></router-link>
        <router-link to="/farm"><h1>FOUND FARM</h1></router-link>
        <router-link to="/local"><h1>FOUND LOCAL</h1></router-link>
        <div class="another-link-wrap notosanskr">
          <router-link to="/login">LOGIN</router-link>
          <router-link to="/cart">CART</router-link>
        </div>
      </div>
    </div>
</template>


<style>
.navi {
  height: 80px;
  background: #ffd228;
  border-bottom: #000 solid 2px;
  border-top: #000 solid 2px;
}
.navi .link-wrap {
  width: 980px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navi .link-wrap > a > h1 {
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
.navi .another-link-wrap a {
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  text-decoration-line: underline;
  font-family: "Noto Sans KR";
  color: #000;
  padding: 9px;
}
</style>
