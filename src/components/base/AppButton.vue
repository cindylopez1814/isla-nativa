<template>
  <button :class="['btn', `btn--${variant}`, `btn--${size}`]" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'primary' }, // primary | secondary | ghost | link
  size:    { type: String, default: 'md' },       // sm | md | lg
})
</script>

<style scoped>
/* ── Base ── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-8);
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-medium);
  border: 1.5px solid transparent;
  border-radius: var(--radius-xl);
  cursor: pointer;
  outline: none;
  transition: background 0.15s, border-color 0.15s, color 0.15s, box-shadow 0.15s, opacity 0.15s;
  white-space: nowrap;
  line-height: 1;
  text-decoration: none;
}

/* ── Sizes ── */
.btn--sm { padding: var(--spacing-6) var(--spacing-12);  font-size: 12px; }
.btn--md { padding: var(--spacing-8) var(--spacing-20);  font-size: var(--font-size-body); }
.btn--lg { padding: var(--spacing-12) var(--spacing-32); font-size: var(--font-size-body-lg); }

/* ── Disabled (global) ── */
.btn:disabled,
.btn[aria-disabled="true"] {
  background: var(--color-bg-disabled) !important;
  color: var(--color-text-disabled) !important;
  border-color: transparent !important;
  cursor: not-allowed;
  opacity: 1;
  box-shadow: none !important;
}

/* ── Primary ── */
.btn--primary {
  background: var(--color-action-primary-base);
  color: var(--color-text-on-primary);
}
.btn--primary:hover:not(:disabled)  { background: var(--color-action-primary-hover); }
.btn--primary:active:not(:disabled) { background: var(--color-action-primary-active); }
.btn--primary:focus-visible {
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.35);
}

/* ── Secondary ── */
.btn--secondary {
  background: transparent;
  color: var(--color-action-secondary-base);
  border-color: var(--color-action-secondary-base);
}
.btn--secondary:hover:not(:disabled)  { background: var(--color-bg-interactive-hover); }
.btn--secondary:active:not(:disabled) {
  background: var(--color-bg-interactive-active);
  border-color: var(--color-turquoise-700);
  color: var(--color-turquoise-700);
}
.btn--secondary:focus-visible {
  box-shadow: 0 0 0 3px rgba(54, 133, 140, 0.30);
}

/* ── Ghost ── */
.btn--ghost {
  background: transparent;
  color: var(--color-text-primary);
  border-color: var(--color-border-default);
}
.btn--ghost:hover:not(:disabled)  { background: var(--color-bg-subtle); border-color: var(--color-border-hover); }
.btn--ghost:active:not(:disabled) { background: var(--color-bg-disabled); }
.btn--ghost:focus-visible {
  box-shadow: 0 0 0 3px rgba(38, 38, 38, 0.15);
}

/* ── Link ── */
.btn--link {
  background: transparent;
  color: var(--color-action-primary-base);
  border-color: transparent;
  padding-left: 0;
  padding-right: 0;
}
.btn--link:hover:not(:disabled)  { color: var(--color-action-primary-hover); text-decoration: underline; }
.btn--link:active:not(:disabled) { color: var(--color-action-primary-active); }
.btn--link:focus-visible {
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.25);
  border-radius: var(--radius-xl);
}
</style>
