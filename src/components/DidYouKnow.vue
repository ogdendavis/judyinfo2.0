<template>
  <div>
    <h3>Did You Know?</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'DidYouKnow',
  props: {
    keyword: String
  },
  data() {
    return {
      message: ''
    };
  },
  methods: {
    setMessage: function(keyword = this.keyword) {
      console.log(keyword);
      switch (keyword) {
        case 'island':
          this.message = `The official name of Rhode Island is actually The State of Rhode Island and Providence Plantations. It's commonly shortened to Rhode Island, but that name technically just refers to the island part of the state!`;
          break;
        default:
          this.message = '';
      }
    }
  },
  created() {
    this.setMessage();
  }
};
</script>

<style scoped>
div {
  background: linear-gradient(rgba(34, 34, 34, 0.9), rgba(34, 34, 34, 0.7));
  margin-bottom: 2rem;
  padding: 0 2rem;
}
p {
  text-align: left;
}
</style>
