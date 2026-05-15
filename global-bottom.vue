<template>
  <div
    class="tt-slide-number"
    :class="{ 'tt-slide-number-hidden': hiddenLayouts.includes($nav.currentLayout) }"
  >
    {{ $nav.currentPage }}
  </div>
</template>

<script setup lang="ts">
const hiddenLayouts = ['cover', 'cover-light', 'end']
</script>

<style scoped>
.tt-slide-number {
  position: fixed;
  bottom: 12px;
  right: 16px;
  font-family: 'Campton', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: var(--tt-text-muted);
  z-index: 10;
  transition: opacity 0.3s ease;
}

.tt-slide-number-hidden {
  opacity: 0;
  pointer-events: none;
}
</style>
