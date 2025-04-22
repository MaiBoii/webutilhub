<template>
    <nav class="navbar">
      <RouterLink to="/" class="nav-link">🔗 URL 단축</RouterLink>
      <RouterLink to="/qr" class="nav-link">📱 QR 생성기</RouterLink>
      <RouterLink to="/stats" class="nav-link">📊 통계</RouterLink>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router'
  </script>
  
  <style scoped>

    @font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 2rem;
    background-color: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
    font-family: 'S-CoreDream-3Light';
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
  