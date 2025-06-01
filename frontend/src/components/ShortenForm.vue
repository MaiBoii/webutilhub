<template>
  <main>
    <h1>URL 단축</h1>
    <p>긴 URL 주소를 클릭 한 번으로 단축해보세요.</p>

    <div id="formurl">
      <form @submit.prevent="shorten">
        <div class="form-row">
          <input v-model="originalUrl" type="url" placeholder="원본 URL 입력" required />
          <button type="submit">단축하기</button>
        </div>
        <p v-if="shortUrl">
          ✅ 단축 URL: <a :href="shortUrl" target="_blank">{{ shortUrl }}</a>
        </p>
      </form>
    </div>
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

input {
  width: 100%;
  height: 50px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}

.form-row {
  display: flex;
  width: 800px;
  align-self: center;
  margin-top: 1rem;
}

.form-row input {
  flex: 1;
  height: 50px;
  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-right: none;
  border-radius: 4px 0 0 4px;
  background-color: #f8f8f8;
  box-sizing: border-box;
}

.form-row button {
  height: 50px;
  padding: 0 1rem;
  font-size: 16px;
  cursor: pointer;
  color: white;
  border: 2px solid #4f46e5;
  border-left: none;
  background-color: #4f46e5;
  border-radius: 0 4px 4px 0;
  transition: background-color 0.2s;
}

.form-row button:hover {
  background-color: #4338ca; /* hover 시 더 진한 파랑 */
}

  </style>
  