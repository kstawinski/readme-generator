<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://meyerweb.com/eric/tools/css/reset/reset.css');
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;

    &.home {
      background-color: #27359c;
      background-image: url('assets/pattern.png');
    }
  }
  .container {
    width: 90%;
    margin: 0 auto;
  }
</style>
