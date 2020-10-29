<template>
  <div class="success">
    <button @click="backToForm()" class="success-back"></button>

    <div class="success-container">
      <Icon color="#27359c" class="success-image" />

      <p class="success-text has-text-grey column is-6 is-offset-3">
        Your README file has been successfully generated 🚀<br />
        Now you can download it as an <code class="has-text-primary">.md</code>
        file or copy it to your clipboard.
      </p>
    </div>

    <div class="success-container success-container_code">
      <div class="success-buttonsRow">
        <b-button
          type="is-primary"
          size="is-medium"
          inverted
          @click="download()"
        >
          Download
        </b-button>

        <b-button
          type="is-primary"
          size="is-medium"
          @click="copyToClipboard()"
        >
          Copy to clipboard
        </b-button>
      </div>

      <Preview
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
    <input type="hidden" id="input">
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';
import Preview from '@/components/Preview.vue';
import fileDownload from 'js-file-download';

export default {
  name: 'Summary',

  components: {
    Icon,
    Preview,
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
          position: 'is-bottom',
          actionText: null,
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
#input { opacity: 0; }
</style>
