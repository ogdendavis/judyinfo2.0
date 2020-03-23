<template>
  <div id="app" v-if="loaded">
    <Hero :title="siteTitle" />
    <Intro quote="I think, therefore I am" author="Spongebob" />
    <About
      v-for="person in aboutPeople"
      :key="person.id"
      :name="person.name"
      :hometown="person.hometown"
      :isFemale="person.isFemale"
      :pets="person.pets"
    />
  </div>
  <div class="app app--loading" v-else>
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>
import Hero from './components/Hero.vue';
import Intro from './components/Intro.vue';
import About from './components/About.vue';

export default {
  name: 'App',
  components: {
    Hero,
    Intro,
    About,
  },
  data() {
    return {
      siteTitle: 'Need info? Ask Judy!',
      loaded: true,
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

/* For loading spinner */
.app--loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #555;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #555 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
