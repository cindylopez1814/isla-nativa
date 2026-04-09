<template>
  <button :class="['chip', { 'chip--active': active }]" @click="$emit('click')">
    <span class="chip__emoji">{{ emoji }}</span>
    <span class="chip__label">{{ label }}</span>
  </button>
</template>

<script setup>
defineProps({
  emoji:  { type: String, required: true },
  label:  { type: String, required: true },
  active: { type: Boolean, default: false },
})
defineEmits(['click'])
</script>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-8);
  padding: var(--spacing-8) var(--spacing-16);
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--color-border-default);
  background: var(--color-bg-card);
  color: var(--color-text-secondary);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  font-family: var(--font-family-base);
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}
.chip:hover {
  border-color: var(--color-action-secondary-base);
  background: var(--color-bg-interactive-hover);
  color: var(--color-action-secondary-base);
}
.chip--active {
  background: var(--color-action-secondary-base);
  border-color: var(--color-action-secondary-base);
  color: #fff;
}
.chip__emoji { font-size: 16px; line-height: 1; }
</style>
