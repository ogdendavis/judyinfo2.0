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
      qotd: Object,
    },
    computed: {
      quote: function() {
        return this.qotd.quote;
      },
      author: function() {
        return this.qotd.author;
      },
    },
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
