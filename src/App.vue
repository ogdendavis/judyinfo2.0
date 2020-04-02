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
#app {
  text-align: center;
  position: relative;
  min-height: 100vh;
  color: white;
  padding-top: 40vh;
}
#app:after {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  display: block;
  background: linear-gradient(rgba(34,34,34,0.1),rgba(34,34,34,0.6)), url('./assets/judy-on-camel.jpg') right top/cover no-repeat;
}
</style>
