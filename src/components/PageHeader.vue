<template>
  <div class="hero">
    <div class="container hero-wrapper">
      <div class="hero-content">
        <h1 class="hero-title">README Generator</h1>
        <h2 class="hero-subtitle">{{ title }}</h2>
      </div>

      <Button
        text="Back to homepage"
        link="/"
        class="hero-button"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'PageHeader',
  components: { Button },
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background-color: #27359c;
  background-image: url('../assets/pattern.png');

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
