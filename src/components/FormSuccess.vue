<template>
  <div class="success">
    <button @click="backToForm()" class="success-back"></button>

    <div class="success-container">
      <SuccessIcon color="#27359c" class="success-image" />

      <p class="success-text has-text-grey column is-6 is-offset-3">
        Your README file has been successfully generated 🚀<br />
        Now you can download it as an <code class="has-text-primary">.md</code>
        file or copy it to your clipboard.
      </p>
    </div>

    <div class="success-container success-container_code">
      <div class="success-buttonsRow">
        <b-button type="is-primary" size="is-medium" inverted @click="download()">Download</b-button>
        <b-button type="is-primary" size="is-medium" @click="copyToClipboard()">Copy to clipboard</b-button>
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
    <!-- <div class="success-footer footer">Generated with 💚 by <a class="footer-link" target="_blank" href="https://github.com/kstawinski/readme-generator">README Generator</a></div> -->
    <input type="hidden" id="input">
  </div>
</template>

<script>
import SuccessIcon from '@/components/SuccessIcon.vue';
import GenerateContent from '@/components/GenerateContent.vue';
import fileDownload from 'js-file-download';

export default {
  name: 'FormSuccess',

  components: {
    SuccessIcon,
    GenerateContent,
  },

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
      this.terminalActive = false;
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
          message: 'Content successfully copied to clipboard.',
          position: 'is-bottom-left',
          duration: 2500,
        });
      } catch (e) {
        // console.warn(e);
      }
    },
    download() {
      const content = document.querySelector('#content').innerHTML;
      // console.log('pobieranie');
      try {
        fileDownload(content, 'README.md');
      } catch (e) {
        // console.warn(e);
      }
    },
    backToForm() {
      this.$emit('back');
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
      margin: 20px 0;
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
      margin: 30px 0;

      button:not(:last-child) {
        margin-right: 8px;
      }
    }
    &-alert {
      font-weight: 500;
      color: #62b762;
      text-transform: uppercase;
      padding-left: 10px;
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
