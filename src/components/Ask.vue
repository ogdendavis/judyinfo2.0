<template>
  <div class="ask">
    <form class="ask__question" v-on:submit.prevent="ask">
      <input type="text" />
      <button type="submit">Ask Judy</button>
    </form>
    <div class="ask__answer">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Ask',
    data() {
      return {
        results: [],
      }
    },
    methods: {
      ask: function() {
        // Using Google custom search. Dashboard at: https://cse.google.com/cse/all
        const gKey = 'AIzaSyDAE0DMvTE_-DF841Z7J7FguSH6TJmxWKk'
        const gId = '005389209397643074092:rle3rnrtyzm';
        const q =document.querySelector('.ask__question input').value
        const qString = `https://www.googleapis.com/customsearch/v1?key=${gKey}&cx=${gId}&q=${encodeURIComponent(q)}`;

        fetch(qString)
          .then((res) => {
            return res.json();
          })
          .then((j) => {
            // For now, just saves Google's top 10, and console logs a random one
            const results = j.items;
            this.results = results;
            const picked = this.results[Math.floor(Math.random() * this.results.length)];
            console.log(picked);
          })
          .catch((er) => {
            console.error(er);
          })
      },
    }
  }
</script>

<style scoped>
.ask {
  background: red;
}
</style>
