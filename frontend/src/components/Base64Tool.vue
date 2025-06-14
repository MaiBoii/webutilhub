<template>
  <main>
    <h1>Base64 암호화/복호화</h1>
    <p>Base64 관련 작업을 할 수 있어요.</p>

    <!-- ⬇️ 새로 바뀐 부분 -->
    <UnderlineHover v-model="mode" :options="options" />

    <textarea v-model="input" placeholder="여기에 텍스트 입력" rows="6" />
    <a @click="processInput" class="btn-1" href="#">{{ mode === 'encode' ? '> Encode <' : '> Decode <' }}</a>

    <div class="output">
      <textarea readonly :value="output" placeholder="여기에 결과물 출력" rows="6" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UnderlineHover from './UnderlineHover.vue'

const input = ref('')
const output = ref('')
const mode = ref<'encode' | 'decode'>('encode') // 초기값을 인코딩 모드로 설정

const options = [
  { label: 'Encoding', value: 'encode', icon: 'fa-solid fa-lock' },
  { label: 'Decoding', value: 'decode', icon: 'fa-solid fa-unlock' },
]

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


.center {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
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
  gap: 0.25 rem;
  margin-bottom: 1rem;
}

.mode-switch label {
  cursor: pointer;
}

.mode-switch button {
  padding: 0.5rem 1rem;
  font-weight: bold;
  background-color: #f3f4f6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}

button {
  margin: 10px;
}

.btn-1 {
  color: #4f46e5; /* 밝은 색 예시 */
  position: relative;
  display: block;
  overflow: hidden;
  max-width: 150px;
  height: 40px;
  margin: 1rem auto;
  text-transform: uppercase;
  border: 1px solid currentColor;
}

.btn-1:before {
  content: '';
  position: absolute;
  top: 0;
  right: -50px;
  bottom: 0;
  left: 0;
  border-right: 50px solid transparent;
  border-bottom: 80px solid #3399cc; /* 어두운 색 예시 */
  transform: translateX(-100%);
  z-index: -1;
  transition: 0.5s ease-in-out;
}

.btn-1:hover {
  color: #99ddff; /* hover 시 더 밝은 색 */
}

.btn-1:hover:before {
  transform: translateX(0);
}

.frame {
  width: 90%;
  margin: 40px auto;
  text-align: center;
}

.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
}

.output {
  margin-top: 2rem;
}

a {
  text-decoration: none;
  line-height: 40px;
}

</style>
