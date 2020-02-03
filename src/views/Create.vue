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
      <div class="page-column page-column_separator page-preview">
        <vue-markdown>i am a ~~tast~~ **test**.</vue-markdown>
      </div>
      <div class="page-column">
          <div class="step">Step {{ step }} / {{ lastStep }}</div>

          <Input
            label="Name of your project"
            name="project_name"
            type="text"
            v-if="step === 1"
          />

          <Input
            label="Description"
            name="project_description"
            type="text"
            v-if="step === 2"
          />

          <Input
            label="Repository link"
            name="project_link"
            type="text"
            v-if="step === 3"
          />

          <div v-if="step === 4">All fields completed.</div>

          <button
            class="navButton navButton-secondary"
            v-on:click="previousStep()"
            v-if="step !== 1">Previous step</button>

            <button
              class="navButton"
              v-on:click="nextStep()"
              v-if="step !== lastStep">Next step</button>
      </div>
    </div>

  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Create',
  components: { Button, Input, VueMarkdown },
  data() {
    return {
      step: 1,
      lastStep: 4,
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
    display: flex;
  }
  &-column {
    padding: 25px;
    width: 50%;

    &_separator {
      border-right: 1px solid lightgray;
    }
  }
  // &-preview > div > p {
  //   strong { font-weight: bold; }
  // }
}

.step {
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
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
</style>
