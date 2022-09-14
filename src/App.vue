<script setup>
import HeaderComp from "@/components/template/HeaderComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";
</script>

<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
  <FooterComp />
</template>

<style>
@import "@/assets/base.css";
#app {
  max-width: auto;
  margin: 0 auto;
  /* padding: 2rem; */
  height: 100vh;

  font-weight: normal;
}
main {
  min-height: 80%;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
