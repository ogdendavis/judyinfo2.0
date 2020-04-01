<template>
  <div>
    {{ this.question }}
    {{ this.results }}
  </div>
</template>

<script>
  export default {
    name: 'Answer',

    data() {
      return {
        results: [],
      };
    },

    computed: {
      question: function() {
        return this.$route.params.q;
      },
    },

    methods: {
      getAnswer: function(question = this.question) {
        // Using Google custom search. Dashboard at: https://cse.google.com/cse/all
        const gKey = 'AIzaSyDAE0DMvTE_-DF841Z7J7FguSH6TJmxWKk'
        const gId = '005389209397643074092:rle3rnrtyzm';
        const qString = `https://www.googleapis.com/customsearch/v1?key=${gKey}&cx=${gId}&q=${encodeURIComponent(this.question)}`;

        fetch(qString)
          .then((res) => {
            return res.json();
          })
          .then((j) => {
            // For now, just saves Google's top 10, and console logs a random one
            this.results = j.items || [`Oops! Judy doesn't know the answer to '${question}'.`];
          })
          .catch((er) => {
            this.results = [`Oops! Judy doesn't know the answer to '${question}'.`];
            console.error('Error in Answer.vue:', er);
          })
      },
    },

    created() {
      this.getAnswer();
    },

    beforeRouteUpdate(to,from,next) {
      this.getAnswer(to.params.q);
      next();
    },

  }
</script>

<style scoped>

</style>
