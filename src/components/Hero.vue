<template>
  <div>
    <router-link to="/"><h1 id="site-title">{{ title }}</h1></router-link>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
  },
}
</script>

<style scoped>
div {
  margin-bottom: 1rem;
}
h1 {
  color: white;
  z-index: 1;
  margin: 0;
}
a {
  text-decoration: none;
}
</style>
