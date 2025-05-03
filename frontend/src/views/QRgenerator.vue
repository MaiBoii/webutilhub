<template>
  <main>
    <div class="flex-container">
    <div class="form">
      <div class="type-selector">
        <div
          v-for="option in options"
          :key="option.value"
          class="type-option"
          :class="{ active: type === option.value }"
          @click="type = option.value"
        >
          <i :class="option.icon"></i> {{ option.label }}
        </div>
      </div>


  <form>
    
  </form>

      <!-- 입력 폼 부분 -->
      <div class="inputs">
        <template v-if="type === 'text' || type === 'link'">
          <input v-model="text" :placeholder="type === 'text' ? '텍스트 입력' : 'URL 입력'" />
        </template>

        <template v-else-if="type === 'wifi'">
          <input v-model="ssid" placeholder="SSID 입력" />
          <input v-model="password" placeholder="비밀번호 입력" />
        </template>

        <template v-else-if="type === 'sms'">
          <input v-model="phone" placeholder="전화번호 입력" />
          <input v-model="smsMessage" placeholder="메시지 입력" />
        </template>

        <template v-else-if="type === 'email'">
          <input v-model="email" placeholder="이메일 주소 입력" />
          <input v-model="emailSubject" placeholder="제목 입력" />
          <input v-model="emailBody" placeholder="내용 입력" />
        </template>
      </div>
    </div>

      <!-- 오른쪽 QR 코드 + 버튼 -->
      <div class="qrcode-section">
        <div class="qrcode-container" ref="dashboardRef">
          <qrcode-vue :value="finalText || ''" :size="200" />
        </div>
        <div class="download-button-wrapper">
          <button @click="downloadDashboard">이미지 다운로드</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import QrcodeVue from 'qrcode.vue'
import html2canvas from 'html2canvas'

// 타입 옵션들
const options = [
  { value: 'text', label: '텍스트', icon: 'fas fa-note-sticky' },
  { value: 'link', label: '링크', icon: 'fas fa-globe' },
  { value: 'wifi', label: 'Wi-Fi', icon: 'fas fa-wifi' },
  { value: 'sms', label: 'SMS', icon: 'fas fa-sms' },
  { value: 'email', label: '이메일', icon: 'fas fa-envelope' },
]

// 상태 관리
const type = ref('text')
const text = ref('')
const ssid = ref('')
const password = ref('')
const phone = ref('')
const smsMessage = ref('')
const email = ref('')
const emailSubject = ref('')
const emailBody = ref('')

const dashboardRef = ref<HTMLElement | null>(null)

const finalText = computed<string>(() => {
  switch (type.value) {
    case 'text':
      return text.value
    case 'link':
      return text.value
    case 'wifi':
      return ssid.value && password.value ? `WIFI:T:WPA;S:${ssid.value};P:${password.value};;` : ''
    case 'sms':
      return phone.value && smsMessage.value ? `SMSTO:${phone.value}:${smsMessage.value}` : ''
    case 'email':
      return email.value && emailSubject.value && emailBody.value
        ? `mailto:${email.value}?subject=${encodeURIComponent(emailSubject.value)}&body=${encodeURIComponent(emailBody.value)}`
        : ''
    default:
      return ''
  }
})

// 이미지 다운로드 기능
const downloadDashboard = async () => {
  if (dashboardRef.value) {
    const canvas = await html2canvas(dashboardRef.value)
    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }
}
</script>



<style scoped>

/* LABEL ======================================= */
label 				 {
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}

input 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:1px solid #757575;
}
input:focus 		{ outline:none; }

/* active state */
input:focus ~ label, input:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color:#5264AE;
}


main {
  width: 100%;
  padding: 2rem;
  text-align: center;
}

.flex-container {
  display: flex;
  gap: 2rem; /* 요소 간 간격 조절 */
  align-items: flex-start; /* 상단 정렬 */
  max-width: 1000px;   /* 너비 제한 */
  width: 100%;
  margin: 0 auto;      /* 가운데 정렬 */
  padding: 1rem;       /* 양 옆 여백 */
}

.form {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.type-selector {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.type-option {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 0.2s;
}


.highlight {
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

.type-option.active {
  background-color: #4f46e5;
  color: white;
}

.inputs input {
  margin-top: 0.5rem;
  padding: 0.5rem;
  width: 300px;
  font-size: 1rem;
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

.qrcode-section {
  display: flex;
  flex-direction: column; /* 수직 정렬 */
  align-items: center;
  gap: 1rem;
}

.download-button-wrapper {
  text-align: center;
}

.qrcode-container {
  width: 250px;
  height: 250px;
  margin: 0 auto;
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0; /* 줄어들지 않도록 */
}

.logo {
  position: absolute;
  width: 40px;
  height: 40px;
}

@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
</style>
