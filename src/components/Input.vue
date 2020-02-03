<template>
  <div class="input">
    <label class="input-label" v-bind:for="name">{{ label }}</label>
    <input class="input-field" v-bind:type="type" v-bind:name="name" v-bind:id="name">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: String,
    name: String,
    type: String,
    placeholder: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
