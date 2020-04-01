<template>
  <div>
    {{ this.results }}
  </div>
</template>

<script>
  export default {
    name: 'Answer',
    props: {
      results: Array,
    },
  }
</script>

<style scoped>

</style>
