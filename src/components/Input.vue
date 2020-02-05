<template>
  <div class="input">
    <!-- <label class="input-label" v-bind:for="name">{{ label }}</label> -->
    <input class="input-field"
      v-bind:type="type"
      v-bind:name="this.data[this.currentStep].inputName"
      v-bind:id="this.data[this.currentStep].inputName">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    // label: String,
    name: String,
    type: String,
    placeholder: String,
    currentStep: Number,
    data: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.input {
  &-field {
    width: 100%;
    margin: 7px 0;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding: 10px 5px;
    color: #2f2f2f;
    outline: 0;
    text-align: center;

    &:focus {
      border-bottom-color: #27359c;
    }
  }
}
</style>
