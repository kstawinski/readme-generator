<template>
  <router-link v-bind:to="link" tag="button" class="button">{{ text }}</router-link>
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
.button {
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  background: #fff;
  font-size: 14px;
  color: #26359c;
  border: 1px solid #fff;
  font-weight: 600;
  padding: 10px 30px;
  border-radius: 30px;
  box-shadow: 0 2px 5px #00000026;
  text-transform: uppercase;
  transition: .3s cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    background-color: #26359c;
    border-color: rgba(255, 255, 255, 0.6);
    color: #fff;
  }
}
</style>
