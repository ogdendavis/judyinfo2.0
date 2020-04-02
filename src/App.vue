<template>
  <div id="app">
    <div id="top">
      <Hero :title="siteTitle" />
      <Ask />
    </div>
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
  min-height: 60vh;
  color: white;
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
  background: linear-gradient(rgba(34,34,34,0.05),rgba(34,34,34,0.95)), url('./assets/judy-on-camel.jpg') right top/cover no-repeat;
}
#top {
  position: sticky;
  top: calc((40vh - 1rem) * -1);
  padding-top: 40vh;
  padding-bottom: 2rem;
}
</style>
