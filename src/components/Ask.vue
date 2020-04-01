<template>
  <div class="ask">
    <form class="ask__question" v-on:submit.prevent="ask">
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
  background: red;
}
</style>
