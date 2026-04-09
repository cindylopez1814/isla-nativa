<template>
  <section class="cta" ref="el">
    <div class="cta__inner">
      <h2 :class="['cta__title', 'anim-blur-in', { 'is-visible': visible }]" v-html="locale === 'es' ? 'Comienza tu próxima<br>aventura' : 'Comece sua próxima<br>aventura'"></h2>
      <p :class="['cta__subtitle', 'anim-fade-up', 'anim-delay-2', { 'is-visible': visible }]">
        {{ locale === 'es' ? 'Miles de experiencias únicas te esperan en la isla más hermosa de Brasil.' : 'Milhares de experiências únicas te esperam na ilha mais bonita do Brasil.' }}
      </p>
      <div :class="['anim-scale-up', 'anim-delay-2', { 'is-visible': visible }]">
        <AppButton variant="primary" size="lg" @click="router.push('/reservar')">
          {{ locale === 'es' ? 'Reservar ahora →' : 'Reservar agora →' }}
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import AppButton from '@/components/base/AppButton.vue'
import { useLocale } from '@/composables/useLocale.js'
import { useInView } from '@/composables/useInView.js'

const router = useRouter()
const { locale } = useLocale()
const { el, visible } = useInView()
</script>

<style scoped>
.cta {
  background: var(--color-coral-500);
  position: relative;
  overflow: hidden;
}

.cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.08) 0%, transparent 60%);
  pointer-events: none;
}

.cta__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--spacing-96) var(--spacing-48);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-24);
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta__title {
  font-size: var(--font-size-display);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-inverse);
  line-height: var(--line-height-display);
  letter-spacing: -1px;
}

.cta__subtitle {
  font-size: var(--font-size-body-lg);
  color: rgba(255,255,255,0.75);
  line-height: var(--line-height-body-lg);
  max-width: 480px;
}

@media (max-width: 768px) {
  .cta__inner  { padding: var(--spacing-64) var(--spacing-24); }
  .cta__title  { font-size: var(--font-size-h1); }
  .cta__subtitle { font-size: var(--font-size-body); }
}
</style>
