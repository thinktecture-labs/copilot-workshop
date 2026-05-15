<script setup lang="ts">
defineProps<{
  website?: string
  email?: string
}>()
</script>

<template>
  <div class="slidev-layout tt-end">
    <div class="end-content">
      <slot />
    </div>

    <div v-if="website || email" class="contact-info">
      <div v-if="website" class="contact-item">{{ website }}</div>
      <div v-if="email" class="contact-item">{{ email }}</div>
    </div>

    <img src="/logos/logo_weiss_vector.svg" alt="thinktecture" class="logo-wordmark" />
    <img src="/logos/logo_T_weiss_vector.svg" alt="" class="logo-t-mark" />
  </div>
</template>

<style scoped>
.tt-end {
  background-color: var(--tt-red);
  color: var(--tt-cream);
  padding: 29px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.end-content :deep(h1) {
  font-family: 'Campton', sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0;
  color: var(--tt-cream);
}

.end-content :deep(p) {
  font-family: 'Campton', sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 8px 0 0 0;
  color: var(--tt-cream);
}

.contact-info {
  margin-top: 32px;
}

.contact-item {
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.6;
}

.logo-wordmark {
  position: absolute;
  top: 35px;
  right: 35px;
  height: 57px;
  width: auto;
}

.logo-t-mark {
  position: absolute;
  bottom: 20px;
  right: 35px;
  height: 173px;
  width: auto;
}
</style>
