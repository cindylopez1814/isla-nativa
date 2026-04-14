<template>
  <footer class="footer">
    <div class="footer__inner">
      <span class="footer__brand">IslaNativa Travel</span>
      <span class="footer__copy">© 2025 Isla Nativa Travel · Florianópolis, Brasil</span>
      <span class="footer__tagline">{{ locale === 'es' ? 'Hecho con ❤️ en la isla' : 'Feito com ❤️ na ilha' }}</span>
    </div>
    <div class="footer__built">
      <span class="footer__built-text">BUILT BY <a href="https://calolab.cl" target="_blank" rel="noopener" class="footer__built-link">CALO LAB</a></span>
    </div>
  </footer>
</template>

<script setup>
import { useLocale } from '@/composables/useLocale.js'
const { locale } = useLocale()
</script>

<style scoped>
.footer {
  background: var(--color-surface-dark);
  border-top: 1px solid rgba(255,255,255,0.08);
}

.footer__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--spacing-32) var(--spacing-48);
  display: flex;
  align-items: center;
  gap: var(--spacing-32);
  flex-wrap: wrap;
}

.footer__brand {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-inverse);
}

.footer__copy {
  font-size: var(--font-size-body-sm);
  color: var(--color-turquoise-300);
  flex: 1;
  text-align: center;
}

.footer__tagline {
  font-size: var(--font-size-body-sm);
  color: var(--color-turquoise-300);
}

.footer__built {
  border-top: 1px solid rgba(255,255,255,0.05);
  text-align: center;
  padding: var(--spacing-12) var(--spacing-48);
}

.footer__built-text {
  font-family: var(--font-family-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.2);
  text-transform: uppercase;
}

.footer__built-link {
  font-family: var(--font-family-mono);
  color: rgba(255,255,255,0.2);
  text-decoration: none;
  transition: color 0.2s;
}
.footer__built-link:hover { color: var(--color-coral-400); }

@media (max-width: 768px) {
  .footer__inner {
    flex-direction: column;
    text-align: center;
    padding: var(--spacing-32) var(--spacing-24);
    gap: var(--spacing-12);
  }
  .footer__copy  { text-align: center; }
  .footer__built { padding: var(--spacing-12) var(--spacing-24); }
}
</style>
