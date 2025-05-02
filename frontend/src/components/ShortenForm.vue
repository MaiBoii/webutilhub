<template>
  <main>
    <!-- <h1>🔗 URL 단축 🔗</h1> -->
    <form @submit.prevent="shorten">
      <input v-model="originalUrl" type="url" placeholder="원본 URL 입력" required />
      <button type="submit">단축하기</button>
      <p v-if="shortUrl">
        ✅ 단축 URL: <a :href="shortUrl" target="_blank">{{ shortUrl }}</a>
      </p>
    </form>
  </main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const originalUrl = ref('')
  const shortUrl = ref('')
  
  const shorten = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/shorten', {
        originalUrl,
      })
      shortUrl.value = res.data.shortUrl
    } catch (err) {
      console.error('단축 실패:', err)
    }
  }
  </script>
  
  <style scoped>
    main {
    padding: 2rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input {
    padding: 0.5rem;
    font-size: 1rem;
  }
  button {
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  </style>
  