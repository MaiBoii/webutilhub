<template>
  <nav class="navbar" :class="{ dark: isDark }">
    <div class="navbar-left">

    <a href="https://github.com/MaiBoii" class="icon-link" target="_blank" aria-label="GitHub">
      <i class="fa-brands fa-github"></i>
    </a>
    <a href="https://velog.io/@msu2020" class="icon-link" target="_blank" aria-label="Blog">
      <i class="fa-solid fa-blog"></i>
    </a>
    </div>

    <!-- 링크 넣을 곳 -->
    <div
      class="navbar-links"
      :class="{ open: isOpen }"
      @click="isOpen = false"
    >
      <RouterLink to="/qr" class="nav-link">QR 생성기</RouterLink>
      <RouterLink to="/base64" class="nav-link">Base64</RouterLink>
      <RouterLink to="/uuid" class="nav-link">UUID 생성기</RouterLink>
      <RouterLink to="/Lorem" class="nav-link">Lorem Ipsum</RouterLink>
      <RouterLink to="/IpChecker" class="nav-link">내 IP 조회</RouterLink>
    </div>
          <!-- 모바일용 햄버거 아이콘 -->
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
import { ref, inject, watch } from 'vue'
import { RouterLink } from 'vue-router'

const isDark = inject<boolean>('isDark', false)
const isOpen = ref<boolean>(false)

/* 화면 크기 바뀌면 자동 접기 */
function handleResize() {
  if (window.innerWidth > 768 && isOpen.value) isOpen.value = false
}
window.addEventListener('resize', handleResize)

</script>

<style scoped>

.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  /* 아이콘 색상 ‑ 기본(라이트) */
  color: #374151;
  transition: color 0.2s;
}
.hamburger:hover {
  color: #4f46e5;        /* 라이트 모드에서 호버 */
}


@font-face {
  font-family: 'JalnanGothic';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff') format('woff');
}
@font-face {
  font-family: 'S-CoreDream-3Light';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
}

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

.site-name {
  font-family: 'JalnanGothic';
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
}
.navbar.dark .site-name {
  color: #d1d5db;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* 햄버거 버튼 (모바일만 표시) */
.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
}

/* 링크들 */
.navbar-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  transition: height 0.3s ease;
}

/* 모바일 접힘 상태 */
@media (max-width: 768px) {
  .navbar-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: inherit;
    border-bottom: 1px solid #e5e7eb;
    overflow: hidden;
    max-height: 0;
  }
  .navbar-links.open {
    max-height: 500px; /* 충분히 큰 값 */
  }
}

/* 개별 링크 */
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

/* 아이콘 */
.navbar-icons {
  display: flex;
  align-items: center;
  gap: 1rem;
}
@media (max-width: 768px) {
  /* 아이콘도 링크 밑으로 내려가도록 */
  .navbar-icons {
    display: none;
  }
  .navbar-links.open + .navbar-icons {
    display: flex;
    flex-direction: row;
    padding: 0.5rem 0 1rem;
  }
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
</style>
