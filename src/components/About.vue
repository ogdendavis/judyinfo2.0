<template>
  <div class="about">
    <h2>About {{ name }}</h2>
    <p>
      {{ name }} lives in {{ hometown }} with {{ isFemale ? 'her' : 'his' }} pet{{ pets.length > 1 ? 's' : '' }}:
      <span class="pet" v-for="(pet, index) in pets" :key="pet.name">{{ pet.name }} the {{ pet.species }}{{ index + 1 === pets.length ? '.' : index + 2 === pets.length ? ', and ' : ', '}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'About',
    props: {
      name: String,
      hometown: String,
      isFemale: Boolean,
      pets: Array,
    },
  }
</script>

<style scoped>
  .about {
    text-align: left;
    padding: 1rem 3rem 0;
  }
</style>
