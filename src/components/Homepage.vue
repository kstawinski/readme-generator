<template>
  <div>
    <h1>Homepage</h1>
    <Button text="Go and create your README file" link="/create" />
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Homepage',
  components: { Button },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
