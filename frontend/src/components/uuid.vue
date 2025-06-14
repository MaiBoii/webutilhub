<template>
    <h1>UUID 생성기</h1>
    <p>RFC4122 알고리즘을 사용해 UUID를 생성할 수 있어요.</p>
    <UnderlineHover v-model="version" :options="options" />

      <div class="uuid-container">
            <div class="controls">
    <div class="setting">
          <label v-if="version === 'v4'">
            개수:
            <input type="number" v-model.number="count" min="1" max="20" />
          </label>
      <label>
        <span class="text-sm">대소문자:</span>
        <select v-model="caseType">
          <option value="lower">소문자</option>
          <option value="upper">대문자</option>
        </select>
      </label>
      </div>

    <button @click="generate" class="generate-btn"> 생 성 </button>
  </div>

    <ul v-if="uuids.length" class="uuid-list">
        <div
        v-for="id in uuids"
        :key="id"
        class="uuid-item"
        @click="copyText(id)"
        :title="'클릭하여 복사하기'"
        >
        <p>{{ id }}</p>
        </div>
    </ul>
    </div>

</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { v4 as uuidv4, v1 as uuidv1 } from 'uuid';
import UnderlineHover from './UnderlineHover.vue'
import { useToast } from 'vue-toastification'

const toast = useToast()


const version = ref<'v1' | 'v4'>('v4');
type CaseType = 'upper' | 'lower'

const count = ref<number>(1);
const uuids = ref<string[]>([]);
const caseType = ref<CaseType>('lower')

function copyText(text: string) {
  try {
    navigator.clipboard.writeText(text);
    toast.success('클립보드에 복사되었습니다!', { timeout: 2000 })
  } catch {
    toast.error('복사에 실패했습니다.')
  }
}

const options = [
  { label: '무작위', value: 'v4', icon: 'fa-solid fa-shuffle' },
  { label: '시간기반', value: 'v1', icon: 'fa-solid fa-clock' },
]

// 버전이 v1일 경우, count를 1로 강제
watch(version, (val) => {
  if (val === 'v1') {
    count.value = 1
  }
})

function applyCase(text: string): string {
  if (caseType.value === 'upper') return text.toUpperCase()
  if (caseType.value === 'lower') return text.toLowerCase()
  return text
}


function generate() {
  const generator = version.value === 'v1' ? uuidv1 : uuidv4
  uuids.value = Array.from({ length: count.value }, () =>
    applyCase(generator())
  )
}

</script>

<style scoped>

.uuid-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: sans-serif;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem 0;
}

.controls label {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
}

.setting {
  display: flex;
  margin: 12px auto; 
  gap: 1rem;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.setting label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
  font-weight: 600;
}

label {
  font-weight: 600;
  margin-bottom: 0.2rem;
}

input[type='number'],
select {
  width: 80px;
  padding: 0.3rem;
  font-size: 1rem;
  box-sizing: border-box;
}

.generate-btn {
  width: 100%;
  padding: 0.5rem 0;
  background-color: #4f46e5;
  color: white;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
}

.generate-btn:hover {
  background-color: #4338ca; 
}
.uuid-list {
  display: flex;
  flex-direction: column;
  align-items: center; /* 가로 중앙 */
  width: 100%; /* 부모 너비 전체 사용 */
  padding: 0; /* 기본 padding 제거 */
  margin: 1.5rem 0 0 0;
  list-style-type: none; /* 불릿 제거 */
}

.uuid-item {
  width: 100%;
  box-sizing: border-box; 
  padding: 8px 20px;
  margin: 5px;
  border-radius: 6px;
  background-color: #f9f9f9;
  cursor: pointer;
  text-align: center; /* 텍스트 중앙 */
  transition: background-color 0.2s;
}

.uuid-item:hover {
  background-color: #f0f0f0;
}

.dark .uuid-item {
  background-color: #2c2c38; 
  color: #f0f0f0;       
}

.dark .uuid-item:hover {
  background-color: #3a3a4a; 
}
</style>
