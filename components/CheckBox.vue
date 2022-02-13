<template>
  <label>
    <input type="checkbox" v-model="checked" :value="value" />
    <span></span>
  </label>
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "change",
  },
  props: [
    'checked',
    'value',
  ],
};
</script>

<style scoped>
input[type="checkbox"] {
  display: none;
}
span {
  display: inline-block;
  border: 3px solid #000000;
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  position: relative;
  background: #fff;
}
input[type="checkbox"]:checked ~ span {
  background: #ffd228;
}
span:after {
  content: "";
  position: absolute;
  display: none;
}
input[type="checkbox"]:checked ~ span:after {
  display: block;
}
input[type="checkbox"]:checked ~ span:after {
  left: 5px;
  top: 1px;
  width: 8px;
  height: 13px;
  border: solid #000;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>