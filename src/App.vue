<template>
  <div id="app">
    <Hero :title="siteTitle" />
    <Ask />
    <router-view />
  </div>
</template>

<script>
import Hero from './components/Hero.vue';
import Ask from '@/components/Ask';

export default {
  name: 'App',
  components: {
    Hero,
    Ask
  },
  data() {
    return {
      siteTitle: 'Need info? Ask Judy!',
    };
  },
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
