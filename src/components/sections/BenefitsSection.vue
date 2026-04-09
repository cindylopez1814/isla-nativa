<template>
  <section class="benefits" ref="el">
    <div class="benefits__inner">
      <div :class="['benefits__header', 'anim-fade-up', { 'is-visible': visible }]">
        <span class="benefits__eyebrow">{{ locale === 'es' ? 'POR QUÉ ELEGIRNOS' : 'POR QUE NOS ESCOLHER' }}</span>
        <h2 class="benefits__title">{{ locale === 'es' ? 'Tu experiencia, nuestra prioridad' : 'Sua experiência, nossa prioridade' }}</h2>
      </div>
      <div class="benefits__grid">
        <FeatureCard
          v-for="(item, i) in benefits"
          :key="item.title.es"
          :class="['anim-scale-up', `anim-delay-${i + 1}`, { 'is-visible': visible }]"
          :icon="item.icon"
          :title="item.title[locale]"
          :description="item.description[locale]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureCard from '@/components/base/FeatureCard.vue'
import { benefits } from '@/data/home.js'
import { useLocale } from '@/composables/useLocale.js'
import { useInView } from '@/composables/useInView.js'

const { locale } = useLocale()
const { el, visible } = useInView()
</script>

<style scoped>
.benefits {
  background: var(--color-bg-surface);
}

.benefits__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--spacing-64) var(--spacing-48);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-40);
}

.benefits__header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  text-align: center;
}

.benefits__eyebrow {
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-brand);
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.benefits__title {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: var(--line-height-h1);
  letter-spacing: -1px;
}

.benefits__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-24);
}

@media (max-width: 1024px) {
  .benefits__inner { padding: var(--spacing-48) var(--spacing-32); }
  .benefits__grid  { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .benefits__inner { padding: var(--spacing-40) var(--spacing-24); }
  .benefits__title { font-size: var(--font-size-h2); }
  .benefits__grid  { grid-template-columns: repeat(2, 1fr); gap: var(--spacing-16); }
}

@media (max-width: 480px) {
  .benefits__inner { padding: var(--spacing-32) var(--spacing-16); }
  .benefits__grid  { grid-template-columns: 1fr; }
}
</style>
