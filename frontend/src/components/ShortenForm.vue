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

    <!-- 모달 -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2>단축 URL 생성 완료!</h2>
        <p>
          ✅ 단축 URL: 
          <a :href="shortUrl" target="_blank" rel="noopener">{{ shortUrl }}</a>
        </p>
        <button @click="closeModal">닫기</button>
      </div>
    </div>

  </main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const originalUrl = ref('')
  const shortUrl = ref('')
  const showModal = ref(false)

  
  const shorten = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/shorten', {
        originalUrl: originalUrl.value,
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


.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex; justify-content: center; align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  text-align: center;
}

.modal-content a {
  color: #007acc;
  word-break: break-all;
}

.modal-content button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #007acc;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

  </style>
  