<template>
  <div class="terminal">
    <!-- First step: reCaptcha -->
    <vue-recaptcha
      sitekey="6LftwaYZAAAAAIgSx3IYeIiwQzwksGHn52ndRt7B"
      :loadRecaptchaScript="true"
      @verify="onCaptchaVerified"
      v-if="!captchaVerified"
      class="terminal_recaptcha">
    </vue-recaptcha>

    <!-- Second step: Command -->
    <div class="terminal_step" v-if="captchaVerified">
      You're not a bot ✌️ Now, click to copy the command below and paste it into your terminal.

      <b-tooltip
        label="Click to copy command"
        position="is-bottom"
        type="is-dark"
        animated>
        <code class="terminal_code" @click="copyCommand()">$ curl -O https://api.readmegen.io/7mD2gR2Mad62sa81Mc4Ad2</code>
      </b-tooltip>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: 'DownloadTerminal',
  components: { VueRecaptcha },
  data() {
    return {
      captchaVerified: false,
    };
  },
  methods: {
    onCaptchaVerified() {
      this.captchaVerified = true;
    },
    copyCommand() {
      this.$buefy.snackbar.open({
        message: 'Command was copied to clipboard successfully!',
        position: 'is-bottom-left',
        duration: 2000,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.terminal {
  max-width: 600px;
  margin: 30px auto;
  border-top: 1px solid #f3f3f3;
  padding: 30px;
  border-radius: 3px;
  box-sizing: border-box;
  color: #4a4a4a;

    &_code {
      display: block;
      background: #f3f3f3;
      padding: 15px;
      margin-top: 15px;
      border-radius: 4px;
      border: 0;
      cursor: pointer;
      transition: 0.2s all;

        &:hover {
          background: darken(#f3f3f3, 3%);
        }
    }
    &_recaptcha {
      display: flex;
      align-items: center;
      justify-content: center;
    }
}
</style>
