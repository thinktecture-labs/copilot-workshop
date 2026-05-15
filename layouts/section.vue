<template>
  <div class="slidev-layout tt-section">
    <div class="section-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tt-section {
  padding-top: var(--header-height, 47px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 58px;
  padding-right: 58px;
}

.section-content :deep(h1) {
  font-family: 'Campton', sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.2;
  color: var(--tt-text);
}

.section-content :deep(p) {
  font-family: 'Campton', sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.4;
  color: var(--tt-text-muted);
}
</style>
