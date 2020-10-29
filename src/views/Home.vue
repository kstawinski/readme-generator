<template>
  <Summary
    v-if="formActive == false"
    :title="steps[0].data"
    :description="steps[1].data"
    :repoURL="steps[2].data"
    :demoURL="steps[3].data"
    :imageURL="steps[4].data"
    :features="steps[5].data"
    :technologies="steps[6].data"
    :runCommand="steps[7].data"
    :buildCommand="steps[8].data"
    :license="steps[9].data"
    :authorInfo="authorInfo"
    @back="toggleForm()"
  />
  <div v-else>
    <Header title="Create a file" color="#27359c"/>

    <div class="row">
      <div class="row-column">
        <ul>
          <li
            v-for="step in steps"
            v-bind:key="step.id">
              <label class="form-label" :for="step.inputName">{{ step.title }}</label>
              <textarea class="form-input"
                v-if="step.textarea"
                :id="step.inputName"
                :key="step.id"
                v-model="step.data"
                rows="6"></textarea>
              <input class="form-input"
                v-else
                type="text"
                :id="step.inputName"
                :key="step.id"
                v-model="step.data">
              <small class="form-description">{{ step.description }}</small>
          </li>
          <label><input type="checkbox" v-model="authorInfo">
          Insert annotation about the author of the project</label>
        </ul>
      </div>
      <div class="row-column row-column_code">
        <Preview
          :markdown="true"
          :title="steps[0].data"
          :description="steps[1].data"
          :repoURL="steps[2].data"
          :demoURL="steps[3].data"
          :imageURL="steps[4].data"
          :features="steps[5].data"
          :technologies="steps[6].data"
          :runCommand="steps[7].data"
          :buildCommand="steps[8].data"
          :license="steps[9].data"
          :authorInfo="authorInfo"
        />
      </div>
    </div>

    <div v-if="formActive" class="button-row">
      <b-button
        size="is-medium"
        type="is-primary"
        expanded
        @click="toggleForm()">Generate file →</b-button>
      <!-- <small>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Soluta natus ab corporis esse cupiditate dolores, enim
        suscipit deleniti iusto sed? Unde quibusdam ratione laborum
        porro fugit laudantium, omnis facilis nostrum!</small> -->
    </div>
  </div>
</template>

<script>
// import Input from '@/components/Input.vue';
import Header from '@/components/Header.vue';
import Preview from '@/components/Preview.vue';
import Summary from '@/components/Summary.vue';

export default {
  name: 'Create',
  components: {
    Header,
    Preview,
    Summary,
  },
  methods: {
    toggleForm() {
      this.formActive = !this.formActive;
    },
  },
  data() {
    return {
      formActive: true,
      authorInfo: true,
      steps: [
        {
          id: 1,
          title: 'Project name',
          description: 'Please enter name of your project. It will be your README file title.',
          inputName: 'prName',
          data: 'readme-generator',
        }, {
          id: 2,
          title: 'Description',
          description: '',
          inputName: 'prDescription',
          data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla vulputate tortor non sodales. Sed tristique congue massa, in laoreet ipsum scelerisque eget. Sed nisl mi, imperdiet vitae pellentesque et, porta non neque. Donec tincidunt arcu porta ornare faucibus.',
          textarea: true,
        }, {
          id: 3,
          title: 'Repository link',
          description: 'Link to your project GitHub repository.',
          inputName: 'prRepo',
          data: 'https://github.com/kstawinski/readme-generator',
        }, {
          id: 4,
          title: 'Demo link',
          description: 'Link to demonstration of your project. If you have not it, please write nothing here.',
          inputName: 'prDemo',
          data: 'https://demo.com',
        }, {
          id: 5,
          title: 'Image URL',
          description: 'URL of image that present your project.',
          inputName: 'prImage',
          data: 'https://i.imgur.com/01OKzWO.png',
        }, {
          id: 6,
          title: 'Features',
          description: 'List of features that your project supports.',
          inputName: 'prFeatures',
          data: `- Customizable form
- Download as file
- Copy generated file
- (**WIP**) Download from terminal`,
          textarea: true,
        }, {
          id: 7,
          title: 'Technologies',
          description: 'List of technologies used in project.',
          inputName: 'prTechnologies',
          data: `- vue (2.6.10)
- vue-body-class (^3.0.2)
- vue-markdown (^2.2.4)
- vue-router (^3.1.3)`,
          textarea: true,
        }, {
          id: 8,
          title: 'Run section',
          description: 'Write something about running your projects. If this is neccessary, write about software requirements.',
          inputName: 'prRun',
          data: `If you want to run project, just clone this repository and run *serve* command.
[code]
git clone [link].git
cd readme-generator
npm install
npm run serve
[/code]`,
          textarea: true,
        }, {
          id: 9,
          title: 'Build section',
          description: 'Write something about building your projects. If this is neccessary, write about software requirements.',
          inputName: 'prBuild',
          data: `[code]
npm run build
[/code]`,
          textarea: true,
        }, {
          id: 10,
          title: 'License info',
          description: 'License used in your project.',
          inputName: 'prLicense',
          data: '',
          textarea: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url('../assets/github-markdown.css');
.row {
  display: flex;
  justify-content: space-between;

  &-column {
    padding: 40px;
    width: 50%;

    &_code {
      background: #f3f3f3;
    }
  }
}
.form {
  &-label {
    font-weight: 500;
  }
  &-input {
    display: block;
    width: -webkit-fill-available;
    border: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding: 10px 0;
    margin: 6px 0;
    border-bottom: 1px solid lightgray;
    color: #27359c;
    outline: 0;
    resize: vertical;

      &:focus {
        border-color: #27359c;
      }
  }
  &-description {
    display: block;
    font-size: small;
    color: gray;
    margin-bottom: 35px;
  }
}
.button {
  box-shadow: 0 0 0 #27359c;
  animation: pulse 1s infinite;

  &:hover {
    animation: none;
  }
  &-row {
    padding: 30px;
  }
}
@keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(#27359c, 0.4);
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(#27359c, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(#27359c, 0);
  }
}
</style>
