<template>
  <article class="feature-card">
    <div class="feature-card__icon">{{ icon }}</div>
    <h3 class="feature-card__title">{{ title }}</h3>
    <p class="feature-card__desc">{{ description }}</p>
  </article>
</template>

<script setup>
defineProps({
  icon:        { type: String, required: true },
  title:       { type: String, required: true },
  description: { type: String, required: true },
})
</script>

<style scoped>
.feature-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
  padding: var(--spacing-24);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
}

.feature-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--color-turquoise-50);
  border-radius: var(--radius-md);
  font-size: 24px;
  line-height: 1;
}

.feature-card__title {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: var(--line-height-h4);
}

.feature-card__desc {
  font-size: var(--font-size-body);
  color: var(--color-text-secondary);
  line-height: var(--line-height-body);
}
</style>
