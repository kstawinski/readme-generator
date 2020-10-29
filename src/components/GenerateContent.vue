<template>
  <div>
    <vue-markdown v-if="markdown" class="markdown-body" :source="generateMarkdown()"></vue-markdown>
    <pre v-else class="code" id="content">{{ generateMarkdown() }}</pre>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'GenerateContent',
  components: { VueMarkdown },
  props: {
    markdown: Boolean,
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
    generateMarkdown() {
      return `
# ${this.title}
> ${this.description}

[🚀 **Demo link**](${this.demoURL})
<img src="${this.imageURL}" alt="" width="100%"/>

## Features
${this.features}

## Technologies
${this.technologies}

## Commands
### Run
${this.parse(this.runCommand)}

### Build
${this.parse(this.buildCommand)}

## License
${this.license}
${this.authorText(this.authorInfo)}
      `;
    },
    parse(value) {
      return value
        .replace('[code]', '```')
        .replace('[/code]', '```')
        .replace('[link]', this.repoURL);
    },
    authorText(boolean) {
      const text = 'Generated with 💙 by [README Generator](https://github.com/kstawinski/readme-generator)';

      if (boolean) {
        return text;
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
.code {
  white-space: pre-wrap;
  max-width: 600px;
  margin: 0 auto 30px auto;
  line-height: 1.65;
  background: #f3f3f3;
  padding: 30px;
  border-radius: 3px;
  box-sizing: border-box;
  color: #4a4a4a;
  font-family: monospace;
  font-size: 14px;
  text-align: left;
}
</style>
