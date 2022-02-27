<template>
  <label>
    <input
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
    />
    <span></span>
  </label>
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "change",
  },
  props: ["checked", "value"],
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    isMaster: { default: false },
    value: { type: String | Number },
    modelValue: { default: "" },
    trueValue: { default: true },
    falseValue: { default: false },
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue;
    },
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (isChecked) {
          if (this.isMaster) {
            newValue = this.value;
          } else {
            newValue.push(this.value);
          }
        } else {
          if (this.isMaster) {
            newValue = [];
          } else {
            newValue.splice(newValue.indexOf(this.value), 1);
          }
        }
        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
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