<template>
    <main>
      <h1>📱 QR 코드 생성기</h1>
  
      <div class="form">
        <input v-model="text" placeholder="QR로 만들 텍스트나 URL 입력" />
      </div>
  
      <div class="dashboard" ref="dashboardRef" v-if="text">
        <qrcode-vue :value="text" :size="150" />
        <p class="gray-text">{{ text }}</p>
      </div>
  
      <div v-if="text" style="margin-top: 1rem">
        <button @click="downloadDashboard">이미지 다운로드</button>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import QrcodeVue from 'qrcode.vue'
  import html2canvas from 'html2canvas'
  
  const text = ref('')
  const dashboardRef = ref<HTMLElement | null>(null)
  
  const generate = () => {
    if (!text.value.trim()) {
      alert('텍스트를 입력해주세요!')
    }
  }
  
  const downloadDashboard = async () => {
    if (dashboardRef.value) {
      const canvas = await html2canvas(dashboardRef.value)
      const link = document.createElement('a')
      link.download = 'dashboard.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    }
  }
  </script>
  
  <style scoped>
  main {
    padding: 2rem;
    text-align: center;
  }
  
  .form {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  input {
    padding: 0.5rem;
    width: 300px;
    font-size: 1rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-weight: bold;
    background-color: #4f46e5;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .dashboard {
    width: 250px;
    height: 250px;
    margin: 0 auto;
    padding: 1rem;
    border: 2px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .gray-text {
    color: #666;
    font-style: italic;
    margin-top: 0.5rem;
    text-align: center;
    word-wrap: break-word;
  }
  </style>
  