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
    authorInfo: Boolean,
  },

  methods: {
    copyToClipboard() {
      // Save content from div with generated Markdown code
      const content = document.querySelector('#content').innerHTML;
      // It is a field used only to copying
      const input = document.querySelector('#input');

      try {
        input.setAttribute('type', 'text');
        input.value = content;
        input.select();
        document.execCommand('copy');
        input.setAttribute('type', 'hidden');

        // If copied, show snackbar
        this.showSnackbar('Content was successfully copied to clipboard.');
      } catch (e) {
        this.showSnackbar(`An error occured: ${e}`);
      }
    },
    download() {
      // Save content from div with generated Markdown code
      const content = document.querySelector('#content').innerHTML;

      try {
        fileDownload(content, 'README.md');

        // Show snackbar after 500 ms if file was downloaded
        setTimeout(() => {
          this.showSnackbar('File was successfully downloaded.');
        }, 500);
      } catch (e) {
        this.showSnackbar(`An error occured: ${e}`);
      }
    },
    backToForm() {
      this.$emit('back');
    },
    showSnackbar(message) {
      this.$buefy.snackbar.open({
        message,
        position: 'is-bottom',
        actionText: null,
        duration: 2500,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.success {
  padding: 70px 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

    &::before {
      width: 100%;
      height: 35vh;
      background: linear-gradient(to bottom, transparent 0%,#ffffff 100%);
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
    }
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
}
#input { opacity: 0; }
</style>
