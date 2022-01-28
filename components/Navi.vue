<!-- Please remove this file from your project -->
<template>
  <div class="navi" :class="fixed ? 'fixed' :  '' ">
      <div class="link-wrap pc">
        <router-link to="/"><h1>HOME</h1></router-link>
        <router-link to="/about"><h1>ABOUT</h1></router-link>
        <router-link to="/market"><h1>FOUND MARKET</h1></router-link>
        <router-link to="/farm"><h1>FOUND FARM</h1></router-link>
        <router-link to="/local"><h1>FOUND LOCAL</h1></router-link>
        <div class="another-link-wrap notosanskr">
          <router-link v-if="token" to="/mypage/order">MYPAGE</router-link>
          <router-link v-else to="/login">LOGIN</router-link>
          <router-link to="/cart">CART</router-link>
        </div>
      </div>
      <div class="link-wrap mobile">
        <button @click="toggle = !toggle">MENU</button> 
        <router-link v-if="token" to="/mypage/order"><h1>MYPAGE</h1></router-link>
        <router-link v-else to="/login"><h1>LOGIN</h1></router-link>
        <div class="menu" :class="toggle ? 'active' : '' ">
          <router-link to="/"><h1>HOME</h1></router-link>
          <router-link to="/about"><h1>ABOUT</h1></router-link>
          <router-link to="/market"><h1>FOUND MARKET</h1></router-link>
          <router-link to="/farm"><h1>FOUND FARM</h1></router-link>
          <router-link to="/local"><h1>FOUND LOCAL</h1></router-link>
          <router-link to="/cart"><h1>CART</h1></router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean
    }
  },
  data(){
    return {
      toggle: false,
      token : this.$store.state.token
    }
  }
  

}
</script>

<style>
.navi {
  height: 80px;
  background: #ffd228;
  border-bottom: #000 solid 2px;
  border-top: #000 solid 2px;
}
.navi.fixed {
  width: 100%;
  position: fixed;
  top: 0;
  display: block;
  visibility: visible;
  z-index: 998;
}
.navi .link-wrap {
  width: 980px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navi .link-wrap a > h1 {
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

@media (max-width:980px) {
  .navi {
    height: 40px;
    width: 100%;
    position: fixed;
    top: 0;
    display: block;
    visibility: visible;
    z-index: 998;
  }
  .navi .link-wrap {
    width: 100%;
    height: 100%;
    padding: 0 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
  .navi .link-wrap button,
  .navi .link-wrap > a h1{
    background: none;
    border: none;
    font-size: 12px;
    line-height: 15px;
  }
  .menu{
    display: none;
  }
  .menu.active{
    display: block;
    position: absolute;
    top: 67px;
    left: 0;
    background: #FFD228;
    border-top: 2px solid #000;
  }
  .navi .link-wrap .menu.active a > h1{
    width:280px;
    padding: 33px 26px;
    border-bottom: 2px solid #000;
  }
  .navi .link-wrap .menu.active a > h1:hover{
    background: #fff;
  }
}
</style>
