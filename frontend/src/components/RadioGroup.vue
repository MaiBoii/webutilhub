<template>
  <div class="radio-group">
    <label
      v-for="option in options"
      :key="option.value"
      class="radio-option"
    >
      <input
        type="radio"
        :value="option.value"
        :checked="modelValue === option.value"
        @change="$emit('update:modelValue', option.value)"
      />
      {{ option.label }}
    </label>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<style scoped>
.radio-group {
  display: flex;
  margin: 25px;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 600px; /* 선택사항 */
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.radio-option input[type='radio'] {
  accent-color: #4f46e5;
  cursor: pointer;
}
</style>
