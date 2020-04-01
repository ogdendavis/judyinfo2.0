<template>
  <div id="app">
    <Hero :title="siteTitle" />
    <router-view />
  </div>
</template>

<script>
import Hero from './components/Hero.vue';

export default {
  name: 'App',
  components: {
    Hero,
  },
  data() {
    return {
      siteTitle: 'Need info? Ask Judy!',
      qotd: {
        quote: '',
        author: '',
      },
      aboutPeople: [
        {
          id: 1,
          name: 'Judy',
          hometown: 'North Haven',
          isFemale: true,
          pets: [
            {
              name: 'Sidney',
              species: 'cat',
            },
            {
              name: 'Sandy',
              species: 'husband',
            },
          ],
        },
        {
          id: 2,
          name: 'Marty',
          hometown: 'Freeport',
          isFemale: false,
          pets: [
            {
              name: 'Luna',
              species: 'dog',
            },
            {
              name: 'Hadley',
              species: 'warrior',
            },
            {
              name: 'Cora',
              species: 'princess',
            },
          ],
        },
      ],
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
