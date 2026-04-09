<template>
  <section class="categories" ref="el">
    <div class="categories__inner">
      <h2 :class="['categories__title', 'anim-fade-up', { 'is-visible': visible }]">{{ locale === 'es' ? '¿Qué quieres vivir hoy?' : 'O que você quer viver hoje?' }}</h2>
      <div class="categories__chips">
        <CategoryChip
          v-for="(cat, i) in categories"
          :key="cat.id"
          :class="['anim-fade-up', `anim-delay-${i + 1}`, { 'is-visible': visible }]"
          :emoji="cat.emoji"
          :label="cat.label[locale]"
          :active="active === cat.id"
          @click="active = cat.id"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CategoryChip from '@/components/base/CategoryChip.vue'
import { categories } from '@/data/home.js'
import { useLocale } from '@/composables/useLocale.js'
import { useInView } from '@/composables/useInView.js'

const { locale } = useLocale()
const active = ref(1)
const { el, visible } = useInView()
</script>

<style scoped>
.categories {
  background: var(--color-bg-surface);
  border-bottom: 1px solid var(--color-border-subtle);
}

.categories__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--spacing-32) var(--spacing-48);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-20);
}

.categories__title {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: var(--line-height-h3);
}

.categories__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-8);
}

@media (max-width: 768px) {
  .categories__inner { padding: var(--spacing-24) var(--spacing-24); }
  .categories__title { font-size: var(--font-size-h4); }
}
</style>
