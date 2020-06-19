<template>
  <div class="warning">
    <!-- eslint-disable max-len -->
      <p class="warning-text">
        <span class="warning-text_bold">Project is in beta version. </span>
        <span>If you see any bugs, please report it by using <a class="warning-link" href="https://github.com/kstawinski/readme-generator/issues" target="_blank">GitHub issues</a>.</span>
      </p>
  </div>
</template>

<style lang="scss" scoped>
.warning {
  background: rgba(38, 85, 156, 0.28);
  padding: 25px 40px;
  color: #26449c;
  text-align: center;

  &-text {
    &_bold {
      font-weight: 600;
    }
  }
  &-link {
    color: #26449c;
    text-decoration: underline;
  }
}
</style>
