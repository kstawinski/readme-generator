<template>
  <div>
    <h1>Homepage</h1>
    <Button text="Go and create your README file" link="/create" />
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'home',
  components: { Button },
};
</script>
