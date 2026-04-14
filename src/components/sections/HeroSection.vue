<template>
  <section class="hero">
    <img src="/IMG/hero.png" alt="Isla Nativa" class="hero__bg" />
    <div class="hero__overlay" />

    <div class="hero__content">
      <div class="hero__heading">
        <span class="hero__line anim-fade-up is-visible">{{ t.heading[0] }}</span>
        <span class="hero__line hero__emphasis anim-blur-in is-visible anim-delay-1">{{ t.heading[1] }}</span>
        <span class="hero__line anim-fade-up is-visible anim-delay-2">{{ t.heading[2] }}</span>
      </div>
      <p class="hero__subtitle anim-fade-up is-visible anim-delay-3">{{ t.subtitle }}</p>
      <div class="hero__search anim-scale-up is-visible anim-delay-4">
        <div class="hero__search-input">
          <Search :size="18" class="hero__search-icon" />
          <input type="text" :placeholder="t.placeholder" class="hero__input" />
        </div>
        <AppButton variant="primary" size="lg">{{ t.cta }}</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { Search } from 'lucide-vue-next'
import AppButton from '@/components/base/AppButton.vue'
import { useLocale } from '@/composables/useLocale.js'

const { locale } = useLocale()

const i18n = {
  es: {
    heading:     ['Descubre', 'experiencias únicas', 'en tu destino'],
    subtitle:    'Tours, aventuras y wellness seleccionados por guías locales que aman esta isla.',
    placeholder: '¿Qué experiencia buscas?',
    cta:         'Explorar',
  },
  pt: {
    heading:     ['Descubra', 'experiências únicas', 'no seu destino'],
    subtitle:    'Tours, aventuras e wellness selecionados por guias locais que amam esta ilha.',
    placeholder: 'Que experiência você busca?',
    cta:         'Explorar',
  },
}

const t = computed(() => i18n[locale.value])
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(16, 48, 51, 0.55) 0%,
    rgba(16, 48, 51, 0.75) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  padding: var(--spacing-96) var(--spacing-48);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-32);
}

.hero__heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.hero__line {
  display: block;
  font-size: var(--font-size-display);
  font-weight: var(--font-weight-bold);
  line-height: 1.1;
  letter-spacing: -1.5px;
  color: var(--color-text-inverse);
}

.hero__emphasis {
  color: var(--color-text-brand);
  font-style: italic;
  font-size: calc(var(--font-size-display) * 1.12);
}

.hero__subtitle {
  font-size: var(--font-size-body-lg);
  line-height: var(--line-height-body-lg);
  color: rgba(255,255,255,0.85);
  max-width: 560px;
}

/* Search bar */
.hero__search {
  display: flex;
  align-items: center;
  gap: var(--spacing-12);
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  width: 100%;
  max-width: 600px;
}

.hero__search-input {
  display: flex;
  align-items: center;
  gap: var(--spacing-12);
  flex: 1;
  padding: 0 var(--spacing-16);
}

.hero__search-icon { color: rgba(255,255,255,0.7); flex-shrink: 0; }

.hero__input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: var(--font-size-body);
  color: var(--color-text-inverse);
  font-family: var(--font-family-base);
}
.hero__input::placeholder { color: rgba(255,255,255,0.6); }

/* Responsive */
@media (max-width: 768px) {
  .hero { min-height: 560px; }
  .hero__content { padding: var(--spacing-64) var(--spacing-24); }
  .hero__line { font-size: var(--font-size-h1); letter-spacing: -1px; }
  .hero__emphasis { font-size: calc(var(--font-size-h1) * 1.1); }
  .hero__subtitle { font-size: var(--font-size-body); }
  .hero__search {
    flex-direction: row;
    flex-wrap: nowrap;
    border-radius: var(--radius-lg);
    padding: var(--spacing-6);
    gap: var(--spacing-8);
  }
  .hero__search-input { padding: 0 var(--spacing-8); min-width: 0; }
  .hero__input { font-size: var(--font-size-body-sm); min-width: 0; }
}

@media (max-width: 480px) {
  .hero { min-height: 480px; }
  .hero__content { padding: var(--spacing-48) var(--spacing-16); gap: var(--spacing-20); }
  .hero__line { font-size: var(--font-size-h2); letter-spacing: -0.5px; }
  .hero__emphasis { font-size: calc(var(--font-size-h2) * 1.1); }
  .hero__search { gap: var(--spacing-6); padding: var(--spacing-4); }
  .hero__input { font-size: 13px; }
}
</style>
