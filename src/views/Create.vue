<template>
  <div>
    <PageHeader title="Create a file" />

    <div v-if="formActive == false">
      <FormSuccess />
    </div>

    <div class="page-wrapper">
      <div v-if="formActive == true">
        <ul class="steps">
          <li
            v-for="step in steps"
            v-bind:key="step.id"
            :class="[
              { 'steps-item_active': currentStep == step.stepId },
              'steps-item'
            ]">{{ step.id }}
          </li>
        </ul>

        <div class="form">
          <div>
            <div class="form-title">{{ steps[currentStep].title }}</div>
            <p class="form-description">{{ steps[currentStep].description }}</p>
            <Input :data="steps" v-bind:currentStep="currentStep" />

            <button
              class="navButton"
              :class="[{ 'navButton-success': isLastStep() }, 'navButton']"
              @click="nextStep()">
                <div v-if="isLastStep()" class="navButton-flex">
                  <SuccessIcon color="#fff" class="navButton-icon"/>
                  <div>Download file</div>
                </div>
                <div v-else>Next step</div>
            </button>
            <button
              v-if="currentStep !== 0"
              class="navButton navButton-secondary"
              @click="previousStep()">Previous step</button>
            </div>
        </div>
      </div>
      <!-- <div v-else class="success">
        <FormSuccess />
      </div> -->
    </div>

  </div>
</template>

<script>
import Input from '@/components/Input.vue';
import PageHeader from '@/components/PageHeader.vue';
import FormSuccess from '@/components/FormSuccess.vue';
import SuccessIcon from '@/components/SuccessIcon.vue';
// import VueMarkdown from 'vue-markdown';

export default {
  name: 'Create',
  components: {
    PageHeader, Input, FormSuccess, SuccessIcon,
  },
  data() {
    return {
      currentStep: 0,
      formActive: false,
      steps: [
        {
          id: 1,
          stepId: 0,
          title: 'Project name',
          description: 'Please enter name of your project. It will be your README file title.',
          inputName: 'prName',
          placeholder: 'readme-generator',
        }, {
          id: 2,
          stepId: 1,
          title: 'Repository link',
          description: 'Link to your project GitHub repository.',
          inputName: 'prRepo',
          placeholder: 'https://github.com/kstawinski/readme-generator',
        },
      ],
    };
  },
  methods: {
    nextStep() {
      // If form is actually active
      if (this.formActive) {
        if (this.isCompleted() === false) {
          // Go to the next step
          this.currentStep += 1;
        }
      }
    },
    previousStep() {
      // Go to the previous step
      this.currentStep -= 1;

      // Check: is form completed
      this.isCompleted();
    },
    isCompleted() {
      // If form was completed
      if ((this.currentStep + 1) !== this.steps.length) return false;

      // If not, set form activity to false and return true (form completed)
      this.formActive = false;
      return true;
    },
    isLastStep() {
      if ((this.currentStep + 1) === this.steps.length) return true;
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
strong { font-weight: bold; }
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
.navButton {
  font-family: 'Roboto';
  font-size: 16px;
  margin: 20px auto 0 auto;
  background: #26359c;
  border: 0;
  border-radius: 3px;
  padding: 15px 35px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  outline: 0;
  display: block;

  &-secondary {
    background: #eaeaea;
    color: #737373;
    font-weight: 500;
    font-size: 14px;
    padding: 10px 20px;
    margin: 10px auto;
    opacity: .7;
    transition: opacity .15s;
    transition-timing-function: linear;

      &:hover {
        opacity: 1;
      }
  }

  &-success {
    background: #62b762;
    display: flex;
    padding: 15px 25px;
  }
  &-flex {
    display: flex;
  }
  &-icon {
    width: 20px;
    margin-right: 10px;
    // opacity: .5;
  }

  &:hover {
    box-shadow: 0 3px 1px #0000000a;
  }
}
</style>
