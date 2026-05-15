<template>
  <div class="slidev-layout tt-visual">
    <div class="title-area">
      <slot />
    </div>
    <div class="visual-area">
      <slot name="visual" />
    </div>
  </div>
</template>

<style scoped>
.tt-visual {
  padding-top: var(--header-height, 47px);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.title-area {
  padding: 26px 58px 0 58px;
  flex-shrink: 0;
}

.title-area :deep(h1) {
  font-family: 'Campton', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.3;
  margin: 0;
}

.title-area :deep(h2) {
  font-family: 'Campton', sans-serif;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 1.3;
  margin: 4px 0 0 0;
}

.title-area :deep(p) {
  font-family: 'Campton', sans-serif;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 1.3;
  margin: 4px 0 0 0;
}

.visual-area {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 18px 16px 18px;
  overflow: hidden;
}

.visual-area :deep(img) {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
