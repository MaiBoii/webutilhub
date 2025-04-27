<template>
  <main>
    <h1>📊 Base64 인코더 / 디코더</h1>

    <div class="mode-switch">
      <button @click="setMode('decode')" :class="{ active: mode === 'decode' }">Decoding</button>
      <button @click="setMode('encode')" :class="{ active: mode === 'encode' }">Encoding</button>

    </div>

    <textarea v-model="input" placeholder="여기에 텍스트 입력" rows="6" />

    <div class="button-group">
      <button @click="processInput">{{ mode === 'encode' ? '> Encode <' : '> Decode <' }}</button>
    </div>

    <div v-if="output" class="output">
      <textarea readonly :value="output" rows="6" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
const output = ref('')
const mode = ref<'encode' | 'decode'>('encode') // 초기값을 인코딩 모드로 설정

const setMode = (newMode: 'encode' | 'decode') => {
  mode.value = newMode
  output.value = '' // 모드 변경 시 출력 초기화
}

const processInput = () => {
  try {
    if (mode.value === 'encode') {
      output.value = btoa(unescape(encodeURIComponent(input.value)))
    } else {
      output.value = decodeURIComponent(escape(atob(input.value)))
    }
  } catch (e) {
    alert(`${mode.value === 'encode' ? '인코딩' : '디코딩'} 실패: 유효한 문자열인지 확인해주세요.`)
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

.mode-switch {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.mode-switch button {
  padding: 0.5rem 1rem;
  font-weight: bold;
  background-color: #f3f4f6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.mode-switch button.active {
  background-color: #4f46e5;
  color: white;
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
