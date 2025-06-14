<template>
  <div class="flex flex-col items-center gap-4 max-w-md mx-auto p-4">
    <h1>UUID 생성기</h1>
    <p>RFC4122 알고리즘을 사용해 UUID를 생성할 수 있어요.</p>

    <UnderlineHover v-model="version" :options="options" />

      <div class="uuid-container">
            <div class="controls">
    <div class="w-full flex gap-2 items-end">
          <label v-if="version === 'v4'">
            개수 (최대 20개):
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
    </div>

    <button @click="generate" class="generate-btn"> 생성 </button>
  </div>

    <ul v-if="uuids.length" class="uuid-list">
      <li v-for="id in uuids" :key="id" class="uuid-item">
        <span>{{ id }}</span>
        <button @click="copy(id)">복사</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { v4 as uuidv4, v1 as uuidv1 } from 'uuid';
import UnderlineHover from './UnderlineHover.vue'

const version = ref<'v1' | 'v4'>('v4');
type CaseType = 'upper' | 'lower'

const count = ref<number>(1);
const uuids = ref<string[]>([]);
const caseType = ref<CaseType>('lower')

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

async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    alert('클립보드에 복사되었습니다!')
  } catch (e) {
    alert('복사에 실패했습니다.')
  }
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
  background: #f9f9f9;
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

.generate-btn {
  width: 100%;
  padding: 0.5rem 0;
  background-color: #4f46e5;
  color: white;
  font-weight: 600;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
}

.generate-btn:hover {
  background-color: #4338ca; 
}

.uuid-item button {
  background: none;
  border: none;
  color: #007bff;
  font-size: 0.9rem;
  cursor: pointer;
}

.uuid-item button:hover {
  text-decoration: underline;
}

.uuid-list {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}

</style>
