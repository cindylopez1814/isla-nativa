<template>
  <nav class="pagination" aria-label="Paginación">
    <button class="pagination__btn" :disabled="current === 1" @click="$emit('change', current - 1)">
      <ChevronLeft :size="16" />
    </button>
    <button
      v-for="page in total"
      :key="page"
      :class="['pagination__num', { 'pagination__num--active': page === current }]"
      @click="$emit('change', page)"
    >
      {{ page }}
    </button>
    <button class="pagination__btn" :disabled="current === total" @click="$emit('change', current + 1)">
      <ChevronRight :size="16" />
    </button>
  </nav>
</template>

<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

defineProps({
  total:   { type: Number, default: 3 },
  current: { type: Number, default: 1 },
})
defineEmits(['change'])
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.pagination__btn,
.pagination__num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-default);
  background: var(--color-bg-card);
  color: var(--color-text-secondary);
  font-size: var(--font-size-label);
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.15s;
}

.pagination__btn:hover:not(:disabled),
.pagination__num:hover { background: var(--color-bg-subtle); }

.pagination__btn:disabled { opacity: 0.4; cursor: not-allowed; }

.pagination__num--active {
  background: var(--color-action-primary-base);
  border-color: var(--color-action-primary-base);
  color: #fff;
}
</style>
