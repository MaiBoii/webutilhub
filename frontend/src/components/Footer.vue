<template>
  <footer class="footer" :class="{ dark: isDark }">
    <p>© 2025 MaiBoii. All rights reserved.</p>
  </footer>
</template>

<script setup>
defineProps({
  isDark: Boolean
});
</script>

<style scoped>
.footer {
  background-color: #f3f4f6;
  padding: 1rem;
  text-align: center;
  color: #6b7280;
  border-top: 1px solid #e5e7eb;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
}

.dark .footer {
  background-color: #1f2937;
  color: #9ca3af;
  border-top: 1px solid #374151;
}
</style>
