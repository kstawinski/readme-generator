<template>
  <FormSuccess
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
  />
  <div v-else>
    <PageHeader title="Create a file" color="#27359c"/>

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
        <GenerateContent
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
      <button class="button" @click="disableForm">Get my file</button>
    </div>
  </div>
</template>

<script>
// import Input from '@/components/Input.vue';
import PageHeader from '@/components/PageHeader.vue';
import GenerateContent from '@/components/GenerateContent.vue';
import FormSuccess from '@/components/FormSuccess.vue';

export default {
  name: 'Create',
  components: {
    PageHeader,
    GenerateContent,
    FormSuccess,
  },
  methods: {
    disableForm() {
      this.formActive = false;
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
  cursor: pointer;
  background: #36d28b;
  position: fixed;
  bottom: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #fff;
  padding: 10px;
  width: 30%;
  min-width: 200px;
  font-size: 16px;
  border: 0;
  border-radius: 3px;
  border: 2px solid #36d28b;
    &-row {
      display: flex;
      justify-content: center;
    }
}
.button {
  box-shadow: 0 0 0 #36d28b;
  animation: pulse 1s infinite;
  text-shadow: 0 1px 2px #0000003b;

  &:hover {
    animation: none;
    color: #36d28b;
    text-shadow: none;
    background: #fff;
  }
}
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(54, 210, 139, 0.4);
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(54, 210, 139, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(54, 210, 139, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(54, 210, 139, 0.4);
    box-shadow: 0 0 0 0 rgba(54, 210, 139, 0.4);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(54, 210, 139, 0);
    box-shadow: 0 0 0 10px rgba(54, 210, 139, 0.0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0  rgba(54, 210, 139, 0);
    box-shadow: 0 0 0 0  rgba(54, 210, 139, 0);
  }
}
</style>
