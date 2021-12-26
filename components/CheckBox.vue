<template>
  <label>
      <input type="checkbox" :checked="checked" :value="value">
      <span></span>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    value: String
  },
}
</script>

<style scoped>
input[type="checkbox"]
{
  background: #FFD228;
  border: 3px solid #000000;
  box-sizing: border-box;
}
</style>