<template>
  <div class="header" v-bind:style="{ backgroundColor: color }">
    <div class="container header-wrapper">
      <div class="header-content">
        <h1 class="header-title">README Generator</h1>
        <h2 class="header-subtitle">{{ title }}</h2>
      </div>

      <Button
        text="Back to homepage"
        link="/"
        class="header-button"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Header',
  components: { Button },
  props: {
    title: String,
    color: String,
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-image: url('../assets/pattern.png');
  padding: 0 40px;

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-content {
    color: #fff;
    padding: 50px 0;
  }

  &-title {
    margin-bottom: 5px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &-subtitle {
    font-size: 30px;
    font-weight: 300;
  }
}
</style>
