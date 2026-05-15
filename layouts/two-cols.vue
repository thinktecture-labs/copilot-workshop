<template>
  <div class="slidev-layout tt-two-cols">
    <div class="col-left">
      <slot />
    </div>
    <div class="col-right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.tt-two-cols {
  padding-top: var(--header-height, 47px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  height: 100%;
}

.col-left,
.col-right {
  padding: 39px 29px 40px 58px;
  overflow: auto;
}

.col-right {
  padding-left: 29px;
  padding-right: 58px;
}

.col-left :deep(h1),
.col-right :deep(h1) {
  font-family: 'Campton', sans-serif;
  font-weight: 600;
  font-size: 1.625rem;
  line-height: 1.3;
  margin: 0 0 4px 0;
}

.col-left :deep(h2),
.col-right :deep(h2) {
  font-family: 'Campton', sans-serif;
  font-weight: 400;
  font-size: 1.625rem;
  line-height: 1.3;
  margin: 0 0 16px 0;
}

.col-left :deep(p),
.col-left :deep(li),
.col-right :deep(p),
.col-right :deep(li) {
  font-size: 1.125rem;
  line-height: 1.5;
}
</style>
