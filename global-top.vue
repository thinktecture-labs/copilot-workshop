<template>
  <div
    class="tt-header-bar"
    :class="{ 'tt-header-hidden': coverLayouts.includes($nav.currentLayout) }"
  >
    <div class="tt-header-text">
      <div class="tt-header-title">{{ $slidev.configs.title }}</div>
      <div v-if="$slidev.configs.subtitle" class="tt-header-subtitle">
        {{ $slidev.configs.subtitle }}
      </div>
    </div>
    <img src="/logos/logo_weiss_vector.svg" alt="thinktecture" class="tt-header-logo" />
  </div>
</template>

<script setup lang="ts">
const coverLayouts = ['cover', 'cover-light', 'end']
</script>

<style scoped>
.tt-header-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height, 47px);
  background-color: var(--tt-red, #ff584f);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 38px 0 29px;
  z-index: 10;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.tt-header-hidden {
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}

.tt-header-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.2;
}

.tt-header-title {
  font-family: 'Campton', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: var(--tt-cream, #f9f8f6);
}

.tt-header-subtitle {
  font-family: 'Campton', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: var(--tt-cream, #f9f8f6);
}

.tt-header-logo {
  height: 27px;
  width: auto;
}
</style>
