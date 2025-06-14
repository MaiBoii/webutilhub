<template>
    <h1>내 IP 조회하기</h1>
    <p>현재 접속한 기기의 외부 IP 주소입니다!<br>
    클릭 시 클립보드에 IP가 복사됩니다.</p>
  <div class="container">
    <div v-if="ipInfo"    
         @click="copyText(ipInfo.ip)"
        :title="'클릭하여 복사하기'">
      <h2>{{ ipInfo.ip }}</h2>
      <p>{{ ipInfo.city }}, {{ ipInfo.region }}, {{ ipInfo.country_name }}</p>
    </div>
    <p v-else>   </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toastification'    // 예: Toastification을 쓴다면
const toast = useToast()

const ipInfo = ref<null | {
  ip: string
  city: string
  region: string
  country_name: string
}>(null)

onMounted(async () => {
  try {
    const res = await fetch('https://ipapi.co/json/')
    ipInfo.value = await res.json()
  } catch {
    ipInfo.value = {
      ip: '확인 실패',
      city: '',
      region: '',
      country_name: '',
    }
  }
})

function copyText(text: string) {
  navigator.clipboard.writeText(text)
    .then(() => toast.success('클립보드에 복사되었습니다!', { timeout: 2000 }))
    .catch(()  => toast.error('복사에 실패했습니다.'))
}
</script>


<style scoped>

.container {
  max-width: 700px;
  font-family: sans-serif;
  padding: 12px;
  margin: 12px auto;   /* 왼쪽·오른쪽 auto → 가로 중앙 정렬 */
  border-radius: 6px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  user-select: text;
}

.container:hover {
  background-color: #f0f0f0;
}
</style>
