<template>
    <main>
      <h1>📱 QR 코드 생성기</h1>
  
      <div class="form">
        <input v-model="text" placeholder="QR로 만들 텍스트나 URL 입력" />
        <button @click="generate">생성</button>
      </div>
  
      <div class="qr-preview" v-if="text">
        <qrcode-vue :value="text" :size="200" />
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import QrcodeVue from 'qrcode.vue'
  
  const text = ref('')
  
  const generate = () => {
    if (!text.value.trim()) {
      alert('텍스트를 입력해주세요!')
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
  
  .qr-preview {
    margin-top: 1rem;
  }
  </style>
  