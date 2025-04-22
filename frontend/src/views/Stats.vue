<!-- src/views/Stats.vue -->
<template>
    <div>
      <h2>📊 Stats Page</h2>
      <StatsChart />
    </div>
  </template>
  
  <script setup lang="ts">
  import StatsChart from '../components/ClickChart.vue'
  </script>

<style scoped>
main {
  padding: 2rem;
}
</style>
  