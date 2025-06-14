<template>
  <div class="flex flex-col items-center gap-4 max-w-md mx-auto p-4">
    <h1>UUID 생성기</h1>
    <p>UUID를 쉽게 만들어보세요.</p>

    <UnderlineHover v-model="version" :options="options" />

    <div class="w-full flex gap-2">

      <label class="w-24">
        <span class="text-sm">Count</span>
        <input
          type="number"
          v-model.number="count"
          min="1"
          max="20"
          class="w-full border rounded p-2 text-center dark:bg-slate-800 dark:border-slate-700"
        />
      </label>
    </div>

    <!-- Generate button -->
    <button
      @click="generate"
      class="w-full py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
    >
      Generate
    </button>

    <!-- Results list -->
    <ul v-if="uuids.length" class="w-full space-y-2">
      <li
        v-for="id in uuids"
        :key="id"
        class="flex items-center justify-between bg-gray-100 dark:bg-slate-800 rounded p-2"
      >
        <span class="font-mono break-all select-text">{{ id }}</span>
        <button @click="copy(id)" class="text-sm text-blue-600 hover:underline dark:text-blue-400">Copy</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { v4 as uuidv4, v1 as uuidv1 } from 'uuid';
import UnderlineHover from './UnderlineHover.vue'

const version = ref<'v1' | 'v4'>('v4');
const count = ref<number>(1);
const uuids = ref<string[]>([]);

const options = [
  { label: '무작위', value: 'v4', icon: 'fa-solid fa-shuffle' },
  { label: '시간기반', value: 'v1', icon: 'fa-solid fa-clock' },
]



function generate() {
  const fn = version.value === 'v1' ? uuidv1 : uuidv4;
  uuids.value = Array.from({ length: count.value }, () => fn());
}

async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    // Replace with a nicer toast/notification if your project has one
    alert('Copied to clipboard!');
  } catch (err) {
    alert('Failed to copy');
  }
}
</script>

<style scoped>
/* Light/dark adaptive card shadow */
:deep(.dark &) {
  --card-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}
:deep(&) {
  --card-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>
