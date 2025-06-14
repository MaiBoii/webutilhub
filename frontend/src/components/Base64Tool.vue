<template>
  <main>
    <h1>Base64 암호화/복호화</h1>
    <p>Base64 관련 작업을 할 수 있어요.</p>

    <UnderlineHover v-model="mode" :options="options" />

    <textarea v-model="input" placeholder="여기에 텍스트 입력" rows="6" />
    <div class="button-wrapper">
      <a @click="processInput" class="btn" href="#">
        {{ mode === 'encode' ? '> Encode <' : '> Decode <' }}
      </a>
    </div>

    <div class="output">
      <textarea readonly :value="output" placeholder="여기에 결과물 출력" rows="6" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import UnderlineHover from './UnderlineHover.vue'

const input = ref('')
const output = ref('')
const mode = ref<'encode' | 'decode'>('encode') // 초기값을 인코딩 모드로 설정

watch(mode, () => {
  input.value = ''
  output.value = ''
})

const options = [
  { label: '암호화', value: 'encode', icon: 'fa-solid fa-lock' },
  { label: '복호화', value: 'decode', icon: 'fa-solid fa-unlock' },
]

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

/* 전체 레이아웃용 – 필요한 최소만 남김 */
main { text-align: center; }

/* 입력·출력 박스 */
textarea {
  width: 80%;
  max-width: 600px;
  margin: 1rem auto;
  padding: 0.75rem;
  font-size: 1rem;
  font-family: monospace;
  border: 2px solid #ccc;
  border-radius: 4px;
  resize: none;
  box-sizing: border-box;
}

/* 인코딩/디코딩 토글 */
.mode-switch {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.mode-switch label { cursor: pointer; }

/* 결과 영역 간격 */
.output { margin-top: 2rem; }

/* style scoped에 추가 */
.button-wrapper {
  text-align: center;
  margin-top: 1rem;
}

/* ======== 버튼 (.btn-3) ======== */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid #4f46e5;
  background: transparent;
  color: #4f46e5;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease;
}

.btn:hover {
  background: #4f46e5;
  color: #fff;
}
</style>
