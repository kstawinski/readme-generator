<template>
  <div class="wrapper">
    <div class="main">
      <h1 class="main-title">README Generator</h1>

      <!-- eslint-disable max-len -->
      <p class="main-text">A simple and usefull README file generator.</p>
      <p class="main-text">Take care of your project. Just do it!</p>

      <Button
        text="Go and create your README file"
        link="/create"
        class="main-button"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: { Button, Footer },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }
  .main {
    text-align: center;
    color: #fff;

    &-title {
      font-weight: 300;
      font-size: 35px;
      margin-bottom: 35px;
    }

    &-text {
      line-height: 1.35;
      font-size: 18px;
      font-weight: 300;
      opacity: .6;
      padding: 0 20px;

      // iPad screen width
      @media (min-width: 768px) {
        font-size: 24px;
      }
    }

    &-button { margin-top: 35px; }
  }
</style>
