<template>
  <div class="app-wrapper" :class="{ dark: isDark }">
    <Navbar /> 
    <main class="main-content">
      <RouterView />
    </main>
  <Footer :is-dark="isDark" />
        <button class="dark-toggle" @click="toggleDarkMode">
      {{ isDark ? '☀️' : '🌙' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') isDark.value = true
})

function toggleDarkMode() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<style scoped>
:global(body) {
  margin: 0;
  background-color: #4f46e5;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
  color: #000000;
  transition: background-color 0.3s, color 0.3s;
}

.app-wrapper.dark {
  background-color: #1e1e2f;
  color: #ffffff;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.dark-toggle {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #ffffff;
  color: #000;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  width: 48px;
  height: 48px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  z-index: 1000;
}

.dark-toggle:hover {
  background-color: #eeeeee;
  transform: scale(1.1);
}

.app-wrapper.dark .dark-toggle {
  background-color: #333;
  color: #fff;
}

</style>
