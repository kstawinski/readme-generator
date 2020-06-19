<template>
  <div class="success">
    <!-- <div class="success-close">
      <span class="far fa-times-circle" aria-label="Close modal"></span>
    </div> -->

    <button @click="backToForm()" class="success-back">Back to form</button>
    <div class="success-container">
      <SuccessIcon color="#62b762" class="success-image" />
      <p class="success-title">We got it!</p>
      <!-- eslint-disable max-len -->
      <p class="success-text">Your README.md file was generated successfully.</p>
      <p class="success-text">Click the button below and download your file.</p>
    </div>
    <div class="success-container success-container_code">
      <div class="success-buttonsRow">
        <button class="button" @click="download()">Download</button>
        <button class="button button-secondary" @click="copyToClipboard()">I want to copy</button>
      </div>
      <GenerateContent
        :markdown="false"
        :title="title"
        :description="description"
        :repoURL="repoURL"
        :demoURL="demoURL"
        :imageURL="imageURL"
        :features="features"
        :technologies="technologies"
        :runCommand="runCommand"
        :buildCommand="buildCommand"
        :license="license"
        :authorInfo="authorInfo"
      />
    </div>
    <div class="success-footer footer">Generated with 💚 by <a class="footer-link" target="_blank" href="https://github.com/kstawinski/readme-generator">README Generator</a></div>
    <input type="hidden" id="input">
  </div>
</template>

<script>
import SuccessIcon from '@/components/SuccessIcon.vue';
import GenerateContent from '@/components/GenerateContent.vue';
import fileDownload from 'js-file-download';

export default {
  name: 'FormSuccess',
  components: { SuccessIcon, GenerateContent },
  props: {
    title: String,
    description: String,
    repoURL: String,
    demoURL: String,
    imageURL: String,
    features: String,
    technologies: String,
    runCommand: String,
    buildCommand: String,
    license: String,
    authorInfo: String,
  },
  methods: {
    copyToClipboard() {
      const content = document.querySelector('#content').innerHTML;
      const input = document.querySelector('#input');
      try {
        input.setAttribute('type', 'text');
        input.value = content;
        input.select();
        document.execCommand('copy');
        input.setAttribute('type', 'hidden');

        // If copied, show snackbar
        this.$buefy.snackbar.open({
          message: 'File content copied to your clipboard.',
          position: 'is-bottom-left',
          duration: 2000,
        });
      } catch (e) {
        console.warn(e);
      }
    },
    download() {
      const content = document.querySelector('#content').innerHTML;
      // console.log('pobieranie');
      try {
        fileDownload(content, 'README.md');
      } catch (e) {
        console.warn(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.success {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  padding: 70px 0;

    &-container {
      text-align: center;
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
      color: #565656;
    }
    // &-code {
    //   white-space: pre-wrap;
    //   max-width: 600px;
    //   margin: 0 auto 30px auto;
    //   line-height: 1.65;
    //   background: #f3f3f3;
    //   padding: 30px;
    //   border-radius: 3px;
    //   box-sizing: border-box;
    //   color: #4a4a4a;
    //   font-family: monospace;
    //   font-size: 14px;
    //   text-align: left;
    // }
    &-buttonsRow {
      margin: 30px auto;
    }
    &-alert {
      font-weight: 500;
      color: #62b762;
      text-transform: uppercase;
      padding-left: 10px;
    }
}
.button {
  background: #62b762;
  border: 1px solid #62b762;
  color: #fff;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  padding: 10px 18px;
  border-radius: 3px;
  transition: .3s all;
  cursor: pointer;

    &:not(:last-child) {
      margin-right: 10px;
    }
    &:hover {
      background: #fff;
      color: #62b762;
    }
    &-secondary {
      background: #fff;
      color: #62b762;

        &:hover {
          background: #62b762;
          color: #fff;
        }
    }
    &-icon {
      margin-right: 8px;
    }
}
.footer {
  text-align: center;
  font-size: small;
  color: gray;
  margin: 50px 0;

    &-link {
      color: #62b762;
    }
    &-icon {
      margin-right: 3px;
    }
}
#input { opacity: 0; }
</style>
