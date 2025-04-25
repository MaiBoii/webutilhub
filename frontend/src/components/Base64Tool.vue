<template>
    <main>
      <h1>📊 Base64 인코더 / 디코더</h1>
  
      <textarea v-model="input" placeholder="여기에 텍스트 입력" rows="6" />

      <textarea v-model="input" placeholder="여기에 결과 나옴" rows="6" />
  
      <div class="button-group">
        <button @click="encode">인코딩</button>
        <button @click="decode">디코딩</button>
      </div>
  
      <div v-if="output" class="output">
        <h2>결과:</h2>
        <textarea readonly :value="output" rows="6" />
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const input = ref('')
  const output = ref('')
  
  const encode = () => {
    try {
      output.value = btoa(unescape(encodeURIComponent(input.value)))
    } catch (e) {
      alert('인코딩 실패: 유효한 문자열인지 확인해주세요.')
    }
  }
  
  const decode = () => {
    try {
      output.value = decodeURIComponent(escape(atob(input.value)))
    } catch (e) {
      alert('디코딩 실패: 유효한 Base64 문자열인지 확인해주세요.')
    }
  }
  </script>
  
  <style scoped>
  main {
    padding: 2rem;
    text-align: center;
  }
  
  textarea {
    width: 80%;
    max-width: 600px;
    margin: 1rem auto;
    padding: 0.75rem;
    font-size: 1rem;
    font-family: monospace;
  }
  
  .button-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
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
  
  .output {
    margin-top: 2rem;
  }
  </style>
  