<script setup>
import Router from 'router';
import AvaliarFIlme from './components/AvaliarFIlme.vue';
import MeuComponente from './components/AvaliarFIlme.vue';
import FilmesAvaliados from './components/FilmesAvaliados.vue';
</script>

<template>
  <FilmesAvaliados>
  </FilmesAvaliados>
  <AvaliarFIlme>
  </avaliarFilme>
</template>

<style scoped>
body{
  background-color: black;
  color: white;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  body{
    background-color: black;
    color: white;
  }
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
