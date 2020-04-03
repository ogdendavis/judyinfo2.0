<template>
  <div class="intro" v-if="ready">
    <h2>Knowledge is Power!</h2>
    <blockquote>
      <p class="quote">&ldquo;{{ quote }}&rdquo;</p>
      <footer class="author">-- {{ author }}</footer>
    </blockquote>
  </div>
  <div class="intro intro--loading" v-else>
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data() {
    return {
      ready: false,
      quote: '',
      author: '',
    };
  },
  methods: {
    getQuote: async function () {
      fetch('https://quotes.rest/qod')
        .then((r) => {
          return r.json();
        })
        .then((j) => {
          const q = j.contents.quotes[0];
          this.quote = q.quote;
          this.author = q.author;
          this.ready = true;
        })
        .catch((e) => {
          console.error(e);
          this.quote = 'I couldn\'t find a good quote today.';
          this.author = 'Judy';
          this.ready = true;
        });
    }
  },
  created() {
    this.getQuote();
  },
}
</script>

<style scoped>
.intro {
  padding: 2rem;
  margin-top: 10vh;
  background: linear-gradient(rgba(34,34,34,0.9),rgba(34,34,34,0.7));
}
h2 {
  margin: 0 0 2rem;
}
blockquote {
  color: #fff;
  max-width: 70vw;
  display: block;
  margin: 0 auto;
}
p {
  margin-top: 0;
}

/* For loading spinner */
.intro--loading {
  display: flex;
  align-items: center;
  justify-content: center;
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
