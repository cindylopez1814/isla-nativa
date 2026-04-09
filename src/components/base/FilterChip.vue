<template>
  <button :class="['filter-chip', { 'filter-chip--selected': selected }]" @click="$emit('click')">
    <slot />
    <X v-if="dismissible && selected" :size="12" class="filter-chip__dismiss" @click.stop="$emit('dismiss')" />
  </button>
</template>

<script setup>
import { X } from 'lucide-vue-next'

defineProps({
  selected:    { type: Boolean, default: false },
  dismissible: { type: Boolean, default: false },
})
defineEmits(['click', 'dismiss'])
</script>

<style scoped>
.filter-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-6);
  padding: var(--spacing-6) var(--spacing-12);
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--color-border-default);
  background: var(--color-bg-card);
  color: var(--color-text-secondary);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-medium);
  font-family: var(--font-family-base);
  cursor: pointer;
  transition: all 0.15s;
}
.filter-chip:hover {
  border-color: var(--color-action-secondary-base);
  color: var(--color-action-secondary-base);
}
.filter-chip--selected {
  background: var(--color-action-secondary-base);
  border-color: var(--color-action-secondary-base);
  color: #fff;
}
.filter-chip__dismiss {
  opacity: 0.7;
  cursor: pointer;
}
.filter-chip__dismiss:hover { opacity: 1; }
</style>
