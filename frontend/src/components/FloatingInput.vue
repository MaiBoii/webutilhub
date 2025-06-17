<template>
  <div class="input-container">
    <input
      :type="type"
      :required="required"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label>{{ label }}</label>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  required: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped>
.input-container {
  position: relative;
  margin: 25px;
  margin-bottom: 30px;
  width: 500px;
}

.input-container input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;
  background: transparent;
}

.input-container input:focus {
  outline: none;
  border-bottom: 2px solid #4f46e5;
}

.input-container label {
  color: #999;
  font-size: 18px;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
}

.input-container input:focus ~ label,
.input-container input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #4f46e5;
}

/* ───────── 모바일(≤768px) ───────── */
@media (max-width: 768px) {
  .input-container {
  position: relative;
  margin: 0 auto 30px auto;     /* 위 0, 아래 30px, 좌우 자동: 중앙 정렬 */
  width: 100%;
  max-width: 500px;
  padding: 0 1rem;              /* 양옆 여백 추가 */
  box-sizing: border-box;       /* 패딩 포함해 width 계산 */
  }
  .input-container input {
    font-size: 16px;          /* 글꼴 1단계 축소 */
    padding: 12px 8px 8px 4px;
  }
  .input-container label { font-size: 16px; }
}
</style>
