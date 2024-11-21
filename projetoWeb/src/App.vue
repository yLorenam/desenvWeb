<script setup>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
</script>

<template>
  <div>
    <header>
      <h1>Letterboxd Baixa Renda</h1>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
body {
  background-color: black;
  color: black;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  body {
    background-color: black;
    color: white;
  }
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    line-height: 1.5;
    text-align: center;
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