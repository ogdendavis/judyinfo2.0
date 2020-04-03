<template>
  <div id="answers" :class="{ hasAnswers: hasAnswers }">
    <div>
      <h2>{{ this.restatedQuestion }}</h2>
    </div>
    <OneAnswer v-for="answer in results" :key="answer.cacheId" :answer="answer" />
  </div>
</template>

<script>
  import OneAnswer from '@/components/OneAnswer';

  export default {
    name: 'Answers',

    components: {
      OneAnswer,
    },

    data() {
      return {
        results: [],
        hasAnswers: false,
        restatedQuestion: '',
      };
    },

    computed: {
      question: function() {
        return this.$route.params.q;
      },
    },

    methods: {
      computeRestatedQuestion: function(querySuccess = true) {
        // This is a function to set a data property, instead of a computed function, because I need to set it on a delay -- I call this function after fetching the answer, so the new question renders only after the old question has faded off the page

        // Was search successful?
        let judyKnows = querySuccess ? 'Judy knows!' : 'Judy doesn\'t know.'
        // Format user input as a question, if not already
        let q = this.question[this.question.length-1] === '?' ? this.question + ' ' + judyKnows : this.question + '? ' + judyKnows;
        // Capitalize and set the data property
        this.restatedQuestion = q.charAt(0).toUpperCase() + q.slice(1);
      },
      scrollToAnswer: function() {
        window.setTimeout(function() {
          try {
            // Need find computed top padding, since it's set in vh
            const topStyle = window.getComputedStyle(document.querySelector('#top'));
            const topPadding = Number(topStyle.paddingTop.slice(0,-2));
            // Account for padding at bottom of #top
            const offset = topPadding - 16;
            window.scrollTo({
              top: offset,
              behavior: 'smooth',
            });

            // Now add height to #top-bgfix background element, so results scroll under #top
            const topHeight = Number(topStyle.height.slice(0,-2));
            document.querySelector('#top-bgfix').style.height = `${topHeight + 32}px`;
          }
          catch {
            console.error('Couldn\'t scroll to answers');
          }
        }, 100);
      },
      getAnswer: function(question = this.question) {
        // Tossing default response here. Use in case of bad response, usually due to hitting API limit
        var defaultResponse = [
          {
            "cacheId": "Rl04uysMcy4J",
            "link": "https://en.wiktionary.org/wiki/three_sheets_to_the_wind",
            "title": "three sheets to the wind - Wiktionary",
            "snippet": "A sheet that is in the wind has come loose from its mooring and is flapping in the \nwind like a flag. A sail (normally jib sails) is said to be sheeted to the wind, when \nit ...",
            "pagemap": {}
          },
          {
            "cacheId": "MyLibgvC-SoJ",
            "link": "https://www.phrases.org.uk/meanings/three-sheets-to-the-wind.html",
            "title": "'Three sheets to the wind' - meaning and origin.",
            "snippet": "Very drunk. What's the origin of the phrase 'Three sheets to the wind'?. Our \ncolleagues at CANOE, the Committee to Ascribe a Nautical Origin ...",
            "pagemap": {}
          },
          {
            "cacheId": "i3sieDgNhvYJ",
            "link": "https://www.urbandictionary.com/define.php?term=three%20sheets%20to%20the%20wind",
            "title": "three sheets to the wind - Urban Dictionary",
            "snippet": "Three sheets to the wind: The condition a person arrives at after imbibing too \nmuch alcohol. When a person is very drunk on the verge of being out of control.",
            "pagemap": {}
          },
          {
            "cacheId": "nyt-sheets",
            "link": "https://www.nytimes.com/1994/12/19/opinion/l-what-three-sheets-to-the-wind-means-141275.html",
            "title": "Opinion | What 'Three Sheets to the Wind' Means - The New York ...",
            "snippet": "Dec 19, 1994 ... The true origin of \"three sheets to the wind\" was disclosed to me by a Nantucket \nsailor. Four sheets to the wind are O.K. because they are ...",
            "pagemap": {}
          },
          {
            "cacheId": "Ha892BmoDdIJ",
            "link": "https://www.dictionary.com/browse/three--sheets--to--the--wind",
            "title": "Three sheets to the wind",
            "snippet": "Nautical. to trim, extend, or secure by means of a sheet or sheets. QUIZZES. Can \nYou Ace This Quiz About “Compliment” vs. “Complement”?",
            "pagemap": {}
          },
          {
            "cacheId": "lIfb2Sk_V0kJ",
            "link": "http://www.worldwidewords.org/qa/qa-thr1.htm",
            "title": "Three sheets in the wind - World Wide Words",
            "snippet": "Aug 10, 2002 ... The word actually comes from an Old English term for the corner of a sail. The \nsheets were as vital in the days of three-masted square-rigged sea- ...",
            "pagemap": {}
          },
          {
            "cacheId": "51sFZqjrI4oJ",
            "link": "http://www.threesheetsyachtrock.com/",
            "title": "Three Sheets to the Wind",
            "snippet": "Three Sheets To The Wind: America's #1 Tribute To Yacht Rock is a well \nestablished, high energy party band specializing in the solid gold sounds of the \nlate ...",
            "pagemap": {}
          },
          {
            "cacheId": "bualvoSa_LwJ",
            "link": "https://www.amazon.com/Three-Sheets-Wind-Quest-Meaning/dp/0330442473",
            "title": "Three Sheets to the Wind: One Man's Quest for the Meaning of Beer ...",
            "snippet": "Three Sheets to the Wind: One Man's Quest for the Meaning of Beer [Pete Brown] \non Amazon.com. *FREE* shipping on qualifying offers. Meet Pete ...",
            "pagemap": {}
          },
          {
            "cacheId": "oGYz1IxVDo4J",
            "link": "https://www.ecenglish.com/learnenglish/lessons/why-do-we-say-three-sheets-wind",
            "title": "Why do we say 'Three Sheets to the Wind'? | Learn English",
            "snippet": "Apr 28, 2008 ... This expression is used to describe someone who is drunk to the point of being \nunable to stand up straight. The 'sheets' here refer to the sails of a ...",
            "pagemap": {}
          },
          {
            "cacheId": "HYTdbKJKZMMJ",
            "link": "https://www.hatterasrealty.com/vacation-rentals/three-sheets-wind-70-1",
            "title": "Three Sheets to the Wind #70-1 -Hatteras Rental | Hatteras Realty",
            "snippet": "THREE SHEETS TO THE WIND is a perfect place for a Hatteras Island vacation. \nTHREE SHEETS is nestled into a beautiful, natural, dune-top location on a quiet\n ...",
            "pagemap": {}
          }
        ];

        // Toggle animation class, first
        this.hasAnswers = false;

        // Using Google custom search. Dashboard at: https://cse.google.com/cse/all
        const gKey = 'AIzaSyDAE0DMvTE_-DF841Z7J7FguSH6TJmxWKk'
        const gId = '005389209397643074092:rle3rnrtyzm';
        const qString = `https://www.googleapis.com/customsearch/v1?key=${gKey}&cx=${gId}&q=${encodeURIComponent(question)}`;

        fetch(qString)
          .then((res) => {
            return res.json();
          })
          .then((j) => {
            this.results = j.items || defaultResponse;
            this.hasAnswers = true;
            this.computeRestatedQuestion();
            this.scrollToAnswer();
          })
          .catch((er) => {
            this.results = defaultResponse;
            this.hasAnswers = true;
            this.computeRestatedQuestion(false);
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
#answers {
  opacity: 0;
  transition: all .5s ease-in-out;
  display: flex;
  flex-flow: column;
  align-items: center;
}
#answers.hasAnswers {
  opacity: 1;
}

h2 {
  font-size: 2rem;
}
</style>
