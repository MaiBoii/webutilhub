<template>
    <h1>Lorem Ipsum 생성기</h1>
    <p>문장 수, 단어 수, 문장 길이 등을 조절할 수 있어 <br>원하는 텍스트 스타일을 자유롭게 설정할 수 있습니다.</p>

  <section class="lorem-ipsum">
    <div class="controls">
      <label for="paragraphCount">단락 수:</label>
      <input
        id="paragraphCount"
        type="number"
        min="1"
        max="10"
        v-model.number="paragraphCount"
      />

      <label for="wordsPerParagraph">단락 당 단어 수:</label>
      <input
        id="wordsPerParagraph"
        type="number"
        min="10"
        max="300"
        v-model.number="wordsPerParagraph"
      />

      <button @click="generateLorem">생성</button>
    </div>

    <div class="output" v-if="generatedText.length">
        <div
        v-for="(para, idx) in generatedText"
        :key="idx"
        class="paragraph"
        @click="copyText(para)"
        :title="'클릭하여 복사하기'"
        >
        <p>{{ para }}</p>
        </div>
    </div>

    <p v-if="copySuccess" class="copy-success">Copied to clipboard! ✅</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const paragraphCount = ref(3)
const wordsPerParagraph = ref(100)
const generatedText = ref<string[]>([])
const copySuccess = ref(false)

const sentencesPool = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
  "Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.",
  "Fusce luctus vestibulum augue ut aliquet.",
  "Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.",
  "In at libero sed nunc venenatis imperdiet sed ornare turpis."
]

// 한 문장의 단어 수를 계산해서, 요청된 단어 수만큼 문장 조합해서 문단 생성
function generateParagraph(wordsCount: number): string {
  const paragraphSentences: string[] = []
  let wordAccumulator = 0

  // 무작위 문장 뽑는 함수
  function pickRandomSentence() {
    return sentencesPool[Math.floor(Math.random() * sentencesPool.length)]
  }

  while (wordAccumulator < wordsCount) {
    const sentence = pickRandomSentence()
    const wordNum = sentence.split(' ').length

    // 누적 단어 수가 넘으면 마지막 문장만 잘라서 단어수 맞춤
    if (wordAccumulator + wordNum > wordsCount) {
      const wordsNeeded = wordsCount - wordAccumulator
      const truncated = sentence.split(' ').slice(0, wordsNeeded).join(' ')
      paragraphSentences.push(truncated + '.')
      wordAccumulator += wordsNeeded
    } else {
      paragraphSentences.push(sentence)
      wordAccumulator += wordNum
    }
  }

  return paragraphSentences.join(' ')
}

function generateLorem() {
  generatedText.value = []
  copySuccess.value = false

  for (let i = 0; i < paragraphCount.value; i++) {
    generatedText.value.push(generateParagraph(wordsPerParagraph.value))
  }
}

function copyText(text: string) {
  try {
    navigator.clipboard.writeText(text);
    toast.success('클립보드에 복사되었습니다!', { timeout: 2000 })
    console.log("복사가되었는디??")
  } catch {
    toast.error('복사에 실패했습니다.')
  }
}

</script>

<style scoped>
.lorem-ipsum {
  max-width: 700px;
  margin: 1rem auto;
  font-family: Arial, sans-serif;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-end;
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

input[type='number'] {
  width: 80px;
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
}

button {
  cursor: pointer;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  border: 1px solid #007bff;
  background: #007bff;
  color: white;
  font-weight: 600;
  transition: background-color 0.3s;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  background: #a0c5ff;
}

button:not(:disabled):hover {
  background-color: #0056b3;
}

.output {
  margin-top: 1rem;
}

.paragraph {
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  user-select: text;
}

.paragraph:hover {
  background-color: #f0f0f0;
}

.copy-success {
  color: green;
  margin-top: 0.5rem;
  font-weight: 700;
}
</style>
