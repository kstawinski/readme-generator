<template>
  <div>
    <div class="hero">
    <div class="container hero-wrapper">
      <div class="hero-content">
        <h1 class="hero-title">README Generator</h1>
        <h2 class="hero-subtitle">Create a file</h2>
      </div>

      <Button
        text="Back to homepage"
        link="/"
        class="hero-button"
      />
    </div>
  </div>

    <div class="page-wrapper">
      <div class="page-column page-column_separator">File preview</div>
      <div class="page-column">
          <Input
            label="Name of your project"
            name="name"
            type="text"
            placeholder="vue-app"
          />
      </div>
    </div>

  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

export default {
  name: 'Create',
  components: { Button, Input },
};
</script>

<style lang="scss" scoped>
.hero {
  background-color: #27359c;
  background-image: url("https://www.transparenttextures.com/patterns/arches.png");

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

.page {
  &-wrapper {
    display: flex;
  }
  &-column {
    padding: 25px;
    width: 50%;

    &_separator {
      border-right: 1px solid lightgray;
    }
  }
}
</style>
