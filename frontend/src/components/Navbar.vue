<template>
    <nav class="navbar">
      <div class="navbar-left">
        <img src="/logo.svg" alt="로고" class="logo" />
        <span class="site-name">공구함</span>
      </div>
      <div class="navbar-links">
        <RouterLink to="/" class="nav-link"> URL 단축</RouterLink>
        <RouterLink to="/qr" class="nav-link"> QR 생성기</RouterLink>
        <RouterLink to="/base64" class="nav-link"> Base64</RouterLink>
        <RouterLink to="/webhook" class="nav-link"> WebHook</RouterLink>
        <RouterLink to="/stats" class="nav-link"> 통계</RouterLink>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router'
  </script>
  
  <style scoped>

@font-face {
    font-family: 'JalnanGothic';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

    @font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        padding: 1rem 2rem;
        background-color: #f9fafb;
        border-bottom: 1px solid #e5e7eb;
        font-family: 'S-CoreDream-3Light';
        }
 
      .navbar-left {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      }

.logo {
  height: 32px;
  width: 32px;
}

.site-name {
  font-weight: bold;
  font-size: 28px; /* 조금 작게 해서 로고와 높이 맞춤 */
  line-height: 30px; /* 로고 높이에 맞춤 */
  color: black;
  font-family: 'JalnanGothic';
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  font-weight: bold;
  color: #374151;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #4f46e5;
}
  </style>
  