<template>
  <div class="app-wrapper">
    <Navbar /> <!-- 상단 네비게이션 -->
    <main class="main-content">
      <RouterView />
    </main>
    <Footer /> <!-- 하단 푸터 -->
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

/* .container 클래스는 사용되지 않으므로 제거하거나 필요한 컴포넌트에 따로 사용하세요 */
</style>
