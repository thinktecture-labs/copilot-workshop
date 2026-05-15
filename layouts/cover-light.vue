<script setup lang="ts">
defineProps<{
  speaker?: string
  handle?: string
  role?: string
}>()
</script>

<template>
  <div class="slidev-layout cover-light">
    <div class="cover-content">
      <div class="headline">
        <slot />
      </div>
      <div class="subtitle">
        <slot name="subtitle" />
      </div>
    </div>

    <div v-if="speaker || handle || role" class="speaker-info">
      <div v-if="speaker" class="speaker-name">{{ speaker }}</div>
      <div v-if="handle" class="speaker-handle">@{{ handle }}</div>
      <div v-if="role" class="speaker-role">{{ role }}</div>
    </div>

    <img src="/logos/logo_rot_vector.svg" alt="thinktecture" class="logo-wordmark" />
    <img src="/logos/logo_T_rot_vector.svg" alt="" class="logo-t-mark" />
  </div>
</template>

<style scoped>
.cover-light {
  background-color: var(--tt-bg);
  color: var(--tt-red);
  padding: 29px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
}

.cover-content {
  max-width: 70%;
}

.headline :deep(h1) {
  font-family: 'Campton', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.2;
  margin: 0;
  color: var(--tt-red);
}

.subtitle {
  margin-top: 12px;
}

.subtitle :deep(p) {
  font-family: 'Campton', sans-serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.2;
  margin: 0;
  color: var(--tt-red);
}

.speaker-info {
  position: absolute;
  bottom: 29px;
  left: 29px;
  color: var(--tt-red);
}

.speaker-name {
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.4;
}

.speaker-handle {
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.4;
}

.speaker-role {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.4;
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
