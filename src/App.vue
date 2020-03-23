<template>
  <div id="app">
    <Hero :title="siteTitle" />
    <HelloWorld msg="Knowledge is Power" />
    <About
      v-for="person in aboutPeople"
      :key="person.id"
      :name="person.name"
      :hometown="person.hometown"
      :isFemale="person.isFemale"
      :pets="person.pets"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Hero,
    About,
  },
  data() {
    return {
      siteTitle: 'Need info? Ask Judy!',
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
