<template>
  <div class="app-wrapper" :class="{ dark: isDark }">
    <Navbar :is-dark="isDark" />
    <main class="main-content">
      <RouterView v-slot="{ Component }">
        <component :is="Component" :is-dark="isDark" />
      </RouterView>
    </main>
    <Footer :is-dark="isDark" />

    <!-- 다크모드 토글 -->
    <button
      class="dark-toggle"
      @click="toggleDarkMode"
      aria-label="Toggle dark mode"
    >
      {{ isDark ? '☀️' : '🌙' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const isDark = ref<boolean>(false)
provide('isDark', isDark)

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
:global(html, body) {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: system-ui, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* 레이아웃 */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #ffffff;
  color: #000;
  transition: background 0.3s, color 0.3s;
}

.app-wrapper.dark {
  background: #1e1e2f;
  color: #fff;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

/* 모바일에선 패딩 축소 */
@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }
}

/* 다크 모드 토글 버튼 */
.dark-toggle {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  background: #fff;
  color: #000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  z-index: 1000;
}

.dark-toggle:hover {
  background: #eee;
  transform: scale(1.1);
}

.app-wrapper.dark .dark-toggle {
  background: #333;
  color: #fff;
}
</style>
