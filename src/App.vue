<template>
  <div id="app">
    <Hero title="Welcome to JudyInfo.com!" />
    <HelloWorld msg="Knowledge is Power" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Hero from './components/Hero.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Hero
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
