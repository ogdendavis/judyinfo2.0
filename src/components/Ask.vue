<template>
  <div class="ask">
    <form v-on:submit.prevent="ask">
      <input type="text" v-model="question"/>
      <button type="submit">Ask Judy</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Ask',
    data() {
      return {
        question: '',
      }
    },
    methods: {
      ask: function() {
        this.$router.push(`/ask/${encodeURIComponent(this.question)}`);
      },
    }
  }
</script>

<style scoped>
.ask {
  min-width: 15rem;
  margin: 0 auto;
}

form {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

input {
  font-size: 18px;
  padding: 0.5rem 1rem;
  width: 25rem;
  max-width: 90vw;
  box-sizing: border-box;
}

button {
  font-size: 18px;
  font-weight: 700;
  padding: .5rem 1rem;
  margin: 0 2rem;
  transition: all .3s ease-in-out;
  color: blue;
  background: white;
  border: 2px solid blue;
}
button:hover {
  background: blue;
  color: white;
  border: 2px solid white;
  cursor: pointer;
}

@media only screen and (max-width: 575px) {
  button {
    margin-top: 1rem;
  }
}
</style>
