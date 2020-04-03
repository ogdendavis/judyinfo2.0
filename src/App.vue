<template>
  <div id="app">
    <div id="top">
      <Hero :title="siteTitle" />
      <Ask />
      <div id="top-bgfix"></div>
    </div>
    <div id="main-container">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Hero from './components/Hero.vue';
import Ask from '@/components/Ask';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Hero,
    Ask,
    Footer
  },
  data() {
    return {
      siteTitle: 'Need info? Ask Judy!',
    };
  },
}

</script>

<style scoped>
#app {
  text-align: center;
  position: relative;
  min-height: 101vh; /* Over to force scrollbar on initial load */
  color: white;
  max-width: 1000px;
  margin: auto;
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
  background: url('./assets/judy-on-camel.jpg') right top/cover no-repeat;
}

#top {
  position: sticky;
  top: calc((40vh - 1rem) * -1);
  padding-top: 40vh;
  padding-bottom: 2rem;
  background: inherit;
  z-index: 1;
}
@media only screen and (max-width: 768px) {
  #top {
    padding-top: 20vh;
    top: calc((20vh - 1rem) * -1);
  }
}


#top-bgfix {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  display: block;
  background: url('./assets/judy-on-camel.jpg') right top/cover no-repeat;
}

@media only screen and (max-width: 800px) {
  #top-bgfix, #app:after {
    background-size: auto 100vh;
  }
}

#main-container {
  position: relative;
  max-width: 90vw;
  margin: auto;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-in-out;
}
</style>
