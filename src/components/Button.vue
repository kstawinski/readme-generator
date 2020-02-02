<template>
  <router-link v-bind:to="link" tag="button">{{ text }}</router-link>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    link: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
