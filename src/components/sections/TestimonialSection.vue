<template>
  <section class="testimonial-section" ref="el">
    <div class="testimonial-section__deco">"</div>
    <div class="testimonial-section__inner">
      <div :class="['testimonial-section__stats', 'anim-fade-in', { 'is-visible': visible }]">{{ testimonial.stats[locale] }}</div>
      <TestimonialCard
        :class="['anim-blur-in', 'anim-delay-1', { 'is-visible': visible }]"
        :quote="testimonial.quote[locale]"
        :author="testimonial.author"
        :role="testimonial.role[locale]"
        :avatar="testimonial.avatar"
        :rating="testimonial.rating"
      />
    </div>
  </section>
</template>

<script setup>
import TestimonialCard from '@/components/base/TestimonialCard.vue'
import { testimonial } from '@/data/home.js'
import { useLocale } from '@/composables/useLocale.js'
import { useInView } from '@/composables/useInView.js'

const { locale } = useLocale()
const { el, visible } = useInView()
</script>

<style scoped>
.testimonial-section {
  background: var(--color-surface-dark);
  position: relative;
  overflow: hidden;
}

.testimonial-section__deco {
  position: absolute;
  top: -40px;
  left: 48px;
  font-size: 240px;
  font-weight: var(--font-weight-bold);
  color: rgba(255,255,255,0.04);
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

.testimonial-section__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--spacing-96) var(--spacing-48);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-32);
  position: relative;
  z-index: 1;
}

.testimonial-section__stats {
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-medium);
  color: var(--color-turquoise-300);
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .testimonial-section__inner { padding: var(--spacing-64) var(--spacing-24); }
  .testimonial-section__deco  { font-size: 160px; left: 16px; }
}
</style>
