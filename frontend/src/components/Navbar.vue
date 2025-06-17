<!-- src/components/Navbar.vue -->
<template>
  <nav class="navbar" :class="{ dark: isDark }">
    <!-- 좌측(PC에선 오른쪽으로 이동) : 외부 아이콘 -->
    <div class="navbar-left">
      <a
        href="https://github.com/MaiBoii"
        class="icon-link"
        target="_blank"
        aria-label="GitHub"
      >
        <i class="fa-brands fa-github"></i>
      </a>
      <a
        href="https://velog.io/@msu2020"
        class="icon-link"
        target="_blank"
        aria-label="Blog"
      >
        <i class="fa-solid fa-blog"></i>
      </a>
    </div>

    <!-- 메뉴 링크 -->
    <transition name="slide">
      <div
        class="navbar-links"
        v-show="isOpen || isDesktop"
        @click="isOpen = false"
      >
        <RouterLink to="/qr" class="nav-link">QR 생성기</RouterLink>
        <RouterLink to="/base64" class="nav-link">Base64</RouterLink>
        <RouterLink to="/uuid" class="nav-link">UUID 생성기</RouterLink>
        <RouterLink to="/Lorem" class="nav-link">Lorem Ipsum</RouterLink>
        <RouterLink to="/IpChecker" class="nav-link">내 IP 조회</RouterLink>
      </div>
    </transition>

    <!-- 우측: 햄버거(모바일 전용) -->
    <button
      class="hamburger"
      @click="isOpen = !isOpen"
      aria-label="Toggle navigation"
    >
      <i class="fa-solid" :class="isOpen ? 'fa-xmark' : 'fa-bars'"></i>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const isDark = inject<boolean>('isDark', false)
const isOpen = ref(false)
const isDesktop = ref(window.innerWidth >= 769)

function handleResize() {
  isDesktop.value = window.innerWidth >= 769
  if (isDesktop.value) isOpen.value = false
}
onMounted(() => window.addEventListener('resize', handleResize))
onBeforeUnmount(() => window.removeEventListener('resize', handleResize))
</script>

<style scoped>
/* ---------- 기본 폰트 ---------- */
@font-face {
  font-family: 'JalnanGothic';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff')
    format('woff');
}
@font-face {
  font-family: 'S-CoreDream-3Light';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff')
    format('woff');
}

/* ---------- 네비게이션 래퍼 ---------- */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-family: 'S-CoreDream-3Light';
  position: relative;
  z-index: 100;
}
.navbar.dark {
  background: #1f2937;
  border-color: #374151;
}

/* ---------- 외부 링크 아이콘 ---------- */
.navbar-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.icon-link {
  font-size: 1.5rem;
  color: #374151;
  transition: color 0.2s;
}
.icon-link:hover {
  color: #4f46e5;
}
.navbar.dark .icon-link {
  color: #d1d5db;
}
.navbar.dark .icon-link:hover {
  color: #818cf8;
}

/* ---------- 메뉴 링크 ---------- */
.navbar-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.nav-link {
  text-decoration: none;
  font-weight: bold;
  color: #374151;
  transition: color 0.2s;
}
.nav-link.router-link-active,
.nav-link:hover {
  color: #4f46e5;
}
.navbar.dark .nav-link {
  color: #d1d5db;
}
.navbar.dark .nav-link.router-link-active,
.navbar.dark .nav-link:hover {
  color: #818cf8;
}

/* ---------- 햄버거 버튼 ---------- */
.hamburger {
  display: none;               /* PC 숨김 */
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #374151;
  transition: color 0.2s;
}
.hamburger:hover { color: #4f46e5; }
.navbar.dark .hamburger { color: #d1d5db; }
.navbar.dark .hamburger:hover { color: #818cf8; }

/* ---------- 반응형 ---------- */
@media (min-width: 769px) {
  /* PC: 아이콘을 오른쪽으로, 메뉴 가운데 정렬 */
  .navbar-left { order: 3; margin-left: auto; } /* 오른쪽 끝 */
  .navbar-links {
    flex: 1;
    justify-content: center;   /* 가운데 */
  }
}
@media (max-width: 768px) {
  .hamburger { display: block; }
  .navbar-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: inherit;
    border-bottom: 1px solid #e5e7eb;
    overflow: hidden;
    padding: 0.75rem 0;  
  }
  .navbar.dark .navbar-links { border-color: #374151; }
}

/* ---------- 슬라이드 트랜지션 ---------- */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
