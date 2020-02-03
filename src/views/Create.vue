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
      <ul class="steps">
        <li class="steps-item steps-item_active">1</li>
        <li class="steps-item">2</li>
        <li class="steps-item">3</li>
        <li class="steps-item">4</li>
        <li class="steps-item">5</li>
      </ul>

      <div class="form">
        <div class="form-title">Project name</div>

        <!-- eslint-disable max-len -->
        <p class="form-description">Please enter name of your projects. It will be your README's file title.</p>

        <Input />

        <button class="navButton">Next step</button>
      </div>
    </div>

  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
// import VueMarkdown from 'vue-markdown';

export default {
  name: 'Create',
  components: { Button, Input },
  data() {
    return {
      step: 1,
      lastStep: 4,
      form: {
        name: '',
        description: '',
        link: '',
      },
    };
  },
  methods: {
    nextStep() {
      console.log(`Current step ${this.step}. Going to ${this.step + 1} step.`);
      this.step += 1;
    },
    previousStep() {
      console.log(`Current step ${this.step}. Going to ${this.step - 1} step.`);
      this.step -= 1;
    },
  },
};
</script>

<style lang="scss" scoped>
strong { font-weight: bold; }
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
    // display: flex;
  }
}

.steps {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 40px 0;

  &-item {
    width: 50px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    background: #eaeaea;
    margin: 0 20px;
    font-weight: 600;
    color: #7b7b7b;
    position: relative;

    &:not(:last-child):after {
      height: 2px;
      width: 24px;
      content: '';
      position: absolute;
      background: #f5f5f5;
      z-index: -1;
      top: 50%;
      right: -32px;
    }

    &_active {
      background: #26359c;
      color: #fff;
    }
  }
}
.navButton {
  font-family: 'Roboto';
  font-size: 16px;
  margin: 20px 5px 0 0;
  background: #26359c;
  border: 0;
  border-radius: 3px;
  padding: 15px 35px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  outline: 0;

  &-secondary {
    background: #e2e2e2;
    color: #656565;
  }

  &:hover {
    box-shadow: 0 3px 1px #0000000a;
  }
}

.form {
  text-align: center;
  width: 40%;
  margin: 0 auto;

  &-title {
    margin: 20px 0 10px 0;
    font-size: 26px;
    font-weight: 300;
  }

  &-description {
    margin-bottom: 40px;
  }
}
</style>
