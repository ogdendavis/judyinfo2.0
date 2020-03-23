<template>
  <div class="intro">
    <h2>Knowledge is Power!</h2>
    <blockquote class="qotd">
      <p class="quote">&ldquo;{{ quote }}&rdquo;</p>
      <footer class="author">-- {{ author }}</footer>
    </blockquote>
  </div>
</template>

<script>
  export default {
    name: 'Intro',
    props: {
      quote: String,
      author: String
    }
  }
</script>

<style scoped>
  .qotd {
    background: #444;
    color: #fff;
    padding: 1rem;
  }
  p {
    margin-top: 0;
    text-align: left;
  }
</style>
