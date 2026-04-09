<template>
  <span :class="['badge', `badge--${tone}`, `badge--${size}`]">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  tone: { type: String, default: 'neutral' }, // neutral | info | success | warning | error
  size: { type: String, default: 'md' },      // sm | md
})
</script>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-4);
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-pill);
  white-space: nowrap;
}

.badge--sm { padding: 2px var(--spacing-8);  font-size: 11px; }
.badge--md { padding: var(--spacing-4) var(--spacing-12); font-size: 12px; }

.badge--neutral { background: var(--color-bg-subtle);   color: var(--color-text-secondary); }
.badge--info    { background: var(--color-ocean-50);    color: var(--color-ocean-700); }
.badge--success { background: #dcfce7;                  color: #166534; }
.badge--warning { background: var(--color-yellow-50);   color: var(--color-yellow-600); }
.badge--error   { background: #fee2e2;                  color: #991b1b; }
</style>
