<template>
    <nav class="navbar">
      <div class="navbar-logo">
        <span class="site-name">공구함</span>
      </div>
      <div class="navbar-links">
        <RouterLink to="/" class="nav-link"> URL 단축</RouterLink>
        <RouterLink to="/qr" class="nav-link"> QR 생성기</RouterLink>
        <RouterLink to="/base64" class="nav-link"> Base64</RouterLink>
        <RouterLink to="/webhook" class="nav-link"> WebHook</RouterLink>
        <RouterLink to="/images" class="nav-link"> 이미지 편집</RouterLink>
        <RouterLink to="/stats" class="nav-link"> 통계</RouterLink>
        
      </div>

      <div class="navbar-icons">
        <a href="https://github.com/MaiBoii" target="_blank" class="icon-link" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://velog.io/@msu2020" target="_blank" class="icon-link" aria-label="Blog">
          <i class="fa-solid fa-blog"></i>
        </a>
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
 
  .navbar-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

.nav-link.router-link-active {
  color: #4f46e5;
}

.site-name {
  font-weight: bold;
  font-size: 24px; 
  color: black;
  font-family: 'JalnanGothic';
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: center; 
  flex-grow: 1;
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

.navbar-icons {
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
  </style>
  