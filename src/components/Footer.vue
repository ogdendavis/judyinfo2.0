<template>
  <div id="footer">
    <div>
      Judy, we love you. This is just a silly joke.
    </div>
    <div>
      © {{ year }},
      <a href="https://ogdendavis.com" target="_blank">Lucas Ogden-Davis</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    const year = new Date().getFullYear();
    return {
      year
    };
  }
};
</script>

<style scoped>
#footer {
  padding: 2rem 0 0.5rem;
  font-weight: 700;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  text-shadow: 2px 3px 10px #222;
}
@media only screen and (max-width: 560px) {
  #footer {
    justify-content: center;
  }
}
a {
  color: white;
  transition: all 0.3s ease-in-out;
}
a:hover {
  color: blue;
}
</style>
