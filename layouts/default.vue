<template>
  <div class="slidev-layout tt-default">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tt-default {
  padding: 86px 58px 40px 58px;
}

.tt-default :deep(h1) {
  font-family: 'Campton', sans-serif;
  font-weight: 600;
  font-size: 1.625rem;
  line-height: 1.3;
  margin: 0 0 4px 0;
  color: var(--tt-text);
}

.tt-default :deep(h2) {
  font-family: 'Campton', sans-serif;
  font-weight: 400;
  font-size: 1.625rem;
  line-height: 1.3;
  margin: 0 0 20px 0;
  color: var(--tt-text);
}

.tt-default :deep(p),
.tt-default :deep(li) {
  font-size: 1.125rem;
  line-height: 1.5;
}

.tt-default :deep(ul),
.tt-default :deep(ol) {
  margin: 8px 0;
}

.tt-default :deep(li) {
  margin: 4px 0;
}
</style>
