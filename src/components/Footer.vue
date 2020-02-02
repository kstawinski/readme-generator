<template>
  <ul class="footer">

    <li class="footer-item">
      <span v-if="version < 1" class="footer-badge">Beta version ({{ version }})</span>
      <span v-else>Version: {{ version }}</span>
    </li>
    <!-- eslint-disable max-len -->
    <li class="footer-item"><a :href="repositoryLink" class="footer-link" target="_blank">Check code on GitHub</a></li>
  </ul>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      version: 0.1,
      repositoryLink: 'https://github.com/kstawinski/readme-generator',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .footer {
    position: absolute;
    display: flex;
    bottom: 30px;
    width: 100%;
    left: 0;
    justify-content: center;
    color: rgba(255, 255, 255, 0.6);

    &-item {
      &:not(:last-child):after {
        content: '/';
        margin: 0 10px;
        opacity: 0.2;
      }
    }

    &-badge {
      color: #ffffffd9;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      border: 1px solid #ffffff45;
      padding: 3px 6px;
      border-radius: 4px;
    }

    &-link {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      border-bottom: 1px solid #ffffff45;
      font-weight: 500;
      transition: .3s ease-in-out;

      &:hover {
        color: #fff;
        border-color: #fff;
      }
    }
  }
</style>
