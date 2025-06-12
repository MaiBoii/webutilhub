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
  gap: 1.5rem;
  margin: 25px;
  margin-bottom: 30px;
  width: 500px;
  font-size: 16px;
  color: #374151;
  font-family: 'S-CoreDream-3Light', sans-serif;
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
