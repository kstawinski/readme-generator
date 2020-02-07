<template>
  <div class="success">
    <div class="success-container">
      <SuccessIcon color="#62b762" class="success-image" />
      <p class="success-title">We got it!</p>
      <!-- eslint-disable max-len -->
      <p class="success-text">Your README.md file was generated successfully. Click the button below and download your file.</p>
    </div>
  </div>
</template>

<script>
import SuccessIcon from '@/components/SuccessIcon.vue';

export default {
  name: 'FormSuccess',
  components: { SuccessIcon },
};
</script>

<style lang="scss" scoped>
.success {
  &-container {
    text-align: center;
    margin: 100px auto;
    max-width: 600px;
  }
  &-image {
    max-width: 70px;
  }
  &-title {
    margin: 20px 0;
    color: #62b762;
    font-size: 35px;
    font-weight: 300;
  }
  &-text {
    line-height: 1.5;
    color: #464646;
  }
}
</style>
