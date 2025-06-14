<template>
  <nav class="underline-hover" :style="{ '--underline-color': color }">
    <ul>
      <li v-for="opt in options" :key="opt.value">
        <input
          class="visually-hidden"
          type="radio"
          :id="`uh-${opt.value}`"
          :value="opt.value"
          :checked="opt.value === modelValue"
          @change="$emit('update:modelValue', opt.value)"
        />
        <label
          class="link"
          :for="`uh-${opt.value}`"
          :class="{ active: opt.value === modelValue }"
        >
          <i v-if="opt.icon" :class="opt.icon" aria-hidden="true" />
          <span>{{ opt.label }}</span>
        </label>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface Option {
  label: string
  value: string
  icon?: string
}

const props = defineProps<{
  /**
   * Currently selected value (use with v-model)
   */
  modelValue: string
  /**
   * Array of option objects (label/value[/icon])
   */
  options: Option[]
  /**
   * Optional custom underline & text color (defaults to #fff)
   */
  color?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<style scoped>
/************  Layout  ************/
ul {
  margin: 0 auto;
  padding: 0;
  list-style: none;
  margin: 20px 25px;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

li {
  position: relative;
}

.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.link {
  --hover-color: var(--underline-color, #4f46e5);
  color: #000; /* 기본 텍스트 색상을 검은색으로 설정 */
  background: transparent;
  border: none;
  font: inherit;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding: 0.75rem 1.25rem;
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  transition: filter 0.2s ease;
}

.link:hover,
.link:focus-visible,
.link.active {
  color: var(--hover-color); /* 호버나 선택 시 색상 전환 */
  filter: brightness(1.2);
}

.link:hover,
.link:focus-visible {
  filter: brightness(1.2);
}

.link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--hover-color);
  transition: width 0.3s ease, left 0.3s ease;
}

.link:hover::after,
.link:focus-visible::after,
.link.active::after {
  width: 100%;
  left: 0;
}

/************  Responsive  ************/
@media (max-width: 600px) {
  ul {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
</style>
