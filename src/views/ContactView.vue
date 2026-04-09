<template>
  <div class="contact-page">
    <TheNavBar />
    <main class="contact-main">
      <div class="contact-card">
        <span class="contact-eyebrow">{{ isEs ? 'PRÓXIMO PASO' : 'PRÓXIMO PASSO' }}</span>
        <h1 class="contact-title">{{ isEs ? 'Reserva tu experiencia' : 'Reserve sua experiência' }}</h1>
        <p class="contact-desc">
          {{ isEs
            ? 'Nuestro equipo te atiende por WhatsApp para ayudarte a elegir y confirmar tu experiencia en Florianópolis.'
            : 'Nossa equipe te atende pelo WhatsApp para ajudar a escolher e confirmar sua experiência em Florianópolis.'
          }}
        </p>

        <a
          href="#"
          class="contact-wa-btn"
          aria-label="WhatsApp"
          @click.prevent
        >
          <svg class="contact-wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {{ isEs ? 'Contactar por WhatsApp' : 'Contatar pelo WhatsApp' }}
        </a>

        <p class="contact-note">
          {{ isEs ? '🚧 Página en construcción — próximamente activa' : '🚧 Página em construção — em breve ativa' }}
        </p>

        <router-link to="/" class="contact-back">
          ← {{ isEs ? 'Volver al inicio' : 'Voltar ao início' }}
        </router-link>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavBar from '@/components/base/TheNavBar.vue'
import TheFooter from '@/components/base/TheFooter.vue'
import { useLocale } from '@/composables/useLocale.js'

const { isEs } = useLocale()
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.contact-main {
  flex: 1;
  background: var(--color-bg-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-96) var(--spacing-24);
}

.contact-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-xl);
  padding: var(--spacing-56) var(--spacing-48);
  max-width: 520px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-20);
}

.contact-eyebrow {
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-brand);
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.contact-title {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: var(--line-height-h1);
  letter-spacing: -0.5px;
}

.contact-desc {
  font-size: var(--font-size-body-lg);
  color: var(--color-text-secondary);
  line-height: var(--line-height-body-lg);
  max-width: 400px;
}

.contact-wa-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-12);
  background: #25D366;
  color: #fff;
  font-size: var(--font-size-body-lg);
  font-weight: var(--font-weight-semibold);
  padding: var(--spacing-16) var(--spacing-32);
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: background 0.15s, transform 0.15s;
  cursor: not-allowed;
  opacity: 0.65;
}

.contact-wa-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.contact-note {
  font-size: var(--font-size-body-sm);
  color: var(--color-text-muted);
  background: var(--color-bg-subtle);
  padding: var(--spacing-8) var(--spacing-16);
  border-radius: var(--radius-md);
}

.contact-back {
  font-size: var(--font-size-body-sm);
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.15s;
  margin-top: var(--spacing-4);
}
.contact-back:hover { color: var(--color-text-primary); }

@media (max-width: 768px) {
  .contact-card {
    padding: var(--spacing-40) var(--spacing-24);
  }
  .contact-title { font-size: var(--font-size-h2); }
}
</style>
