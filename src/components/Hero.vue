<template>
  <div class="hero">
    <h1>{{ title }}</h1>
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
.hero {
  width: 100vw;
  height: 20rem;
  max-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('../assets/judy-on-camel.jpg') top/cover no-repeat;
  position: relative;
}
.hero::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,50,100,0.25);
}
h1 {
  color: white;
  padding-top: 5rem;
  z-index: 1;
}
</style>
