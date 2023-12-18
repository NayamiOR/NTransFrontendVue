<script setup>
import AClient from './components/AClient.vue';
import BClient from './components/BClient.vue';
</script>

<template>
  <header>

    <div id="app" style="display: flex;flex-direction:column;">
      <a-client />
      <span style="height: 90px;"></span>
      <b-client />
    </div>

  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
template {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 0, 0;
}
</style>