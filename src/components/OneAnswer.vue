<template>
  <a :href="answer.link" class="answer">
    <div class="answer__text">
      <h3>{{ answer.title }}</h3>
      <p>{{ answer.snippet }}</p>
    </div>
      <img v-if="hasThumbnail" :src="thumbnailSrc" :alt="answer.title" class="site-thumbnail" />
      <img v-else-if="judyNum === 1" src="../assets/judyhat1.jpg" alt="Judy knows!" class="site-thumbnail judy-thumbnail"/>
      <img v-else-if="judyNum === 2" src="../assets/judyhat2.jpg" alt="Judy knows!" class="site-thumbnail judy-thumbnail"/>
      <img v-else-if="judyNum === 3" src="../assets/judyhat3.jpg" alt="Judy knows!" class="site-thumbnail judy-thumbnail"/>
      <img v-else-if="judyNum === 4" src="../assets/judyhat4.jpg" alt="Judy knows!" class="site-thumbnail judy-thumbnail"/>
      <img v-else src="../assets/judyhat5.jpg" alt="Judy knows!" class="site-thumbnail judy-thumbnail"/>
  </a>
</template>

<script>
  export default {
    name: 'OneAnswer',
    props: {
      answer: Object,
    },
    computed: {
      hasThumbnail: function() {
        return 'cse_thumbnail' in this.answer.pagemap || 'thumbnail' in this.answer.pagemap;
      },
      thumbnailSrc: function() {
        if ('cse_thumbnail' in this.answer.pagemap) {
          return this.answer.pagemap.cse_thumbnail[0].src;
        }
        else if ('thumbnail' in this.answer.pagemap) {
          return this.answer.pagemap.thumbnail[0].src;
        }
        else {
          return false;
        }
      },
      judyNum: function() {
        // Five pictures of Judy in a hat. Which to use?
        return Math.floor(Math.random() * 5);
      }
    },
  }
</script>

<style scoped>
a.answer {
  text-align: left;
  margin-bottom: 2rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(rgba(34,34,34,0.9),rgba(34,34,34,0.7));
  /* Because this container is also the link element */
  text-decoration: none;
  color: white;
  transition: all .3s ease-in-out;
}

a.answer:hover {
  background: white;
  color: #222;
}
a.answer:hover h3 {
  text-shadow: none;
}

.answer__text {
  width: 800px;
  max-width: 70vw;
  box-sizing: border-box;
  padding: 0 1rem;
}

.site-thumbnail {
  width: 200px;
  max-width: 20vw;
  box-sizing: border-box;
}

h3 {
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0.5rem;
}
</style>
