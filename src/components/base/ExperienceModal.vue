<template>
  <Teleport to="body">
    <div class="modal-backdrop" @click.self="$emit('close')">
      <div class="modal" role="dialog" aria-modal="true">
        <!-- Close -->
        <button class="modal__close" @click="$emit('close')" aria-label="Cerrar">
          <X :size="20" />
        </button>

        <!-- Image -->
        <div class="modal__media">
          <img :src="exp.image" :alt="exp.title[locale]" class="modal__img" />
          <AppBadge v-if="exp.badge" tone="warning" size="sm" class="modal__badge">
            {{ exp.badge[locale] }}
          </AppBadge>
          <span class="modal__tag">{{ exp.tag[locale] }}</span>
        </div>

        <!-- Body -->
        <div class="modal__body">
          <div class="modal__meta">
            <Star :size="13" class="modal__star" fill="currentColor" />
            <span class="modal__rating">{{ exp.rating }}</span>
            <span class="modal__reviews">({{ exp.reviews }} {{ isEs ? 'reseñas' : 'avaliações' }})</span>
            <span class="modal__sep">·</span>
            <Clock :size="13" />
            <span>{{ exp.duration }}</span>
            <span class="modal__sep">·</span>
            <MapPin :size="13" />
            <span>{{ exp.location }}</span>
          </div>

          <h2 class="modal__title">{{ exp.title[locale] }}</h2>
          <p class="modal__desc">{{ exp.description[locale] }}</p>

          <ul class="modal__details">
            <li>✅ {{ isEs ? 'Guía local certificado incluido' : 'Guia local certificado incluído' }}</li>
            <li>🎒 {{ isEs ? 'Equipamiento provisto' : 'Equipamento fornecido' }}</li>
            <li>🔄 {{ isEs ? 'Cancelación gratuita hasta 24h antes' : 'Cancelamento gratuito até 24h antes' }}</li>
            <li>📍 {{ isEs ? 'Punto de encuentro confirmado al reservar' : 'Ponto de encontro confirmado ao reservar' }}</li>
          </ul>

          <div class="modal__footer">
            <div class="modal__price-row">
              <span class="modal__price">{{ exp.price }}</span>
              <span class="modal__per">{{ isEs ? '/persona' : '/pessoa' }}</span>
            </div>
            <AppButton variant="primary" size="lg" @click="$emit('reserve')">
              {{ isEs ? 'Reservar ahora →' : 'Reservar agora →' }}
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'
import { X, Star, Clock, MapPin } from 'lucide-vue-next'
import AppBadge from './AppBadge.vue'
import AppButton from './AppButton.vue'
import { useLocale } from '@/composables/useLocale.js'

const props = defineProps({
  exp: { type: Object, required: true },
})
const emit = defineEmits(['close', 'reserve'])

const { locale } = useLocale()

const t = computed(() => {
  const es = locale.value === 'es'
  return {
    reviews:    es ? 'reseñas'                              : 'avaliações',
    detail1:    es ? 'Guía local certificado incluido'      : 'Guia local certificado incluído',
    detail2:    es ? 'Equipamiento provisto'                : 'Equipamento fornecido',
    detail3:    es ? 'Cancelación gratuita hasta 24h antes' : 'Cancelamento gratuito até 24h antes',
    detail4:    es ? 'Punto de encuentro confirmado al reservar' : 'Ponto de encontro confirmado ao reservar',
    perPerson:  es ? '/persona'                             : '/pessoa',
    cta:        es ? 'Reservar ahora →'                     : 'Reservar agora →',
  }
})
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(16, 48, 51, 0.7);
  backdrop-filter: blur(4px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-24);
}

.modal {
  background: var(--color-bg-card);
  border-radius: var(--radius-xl);
  max-width: 560px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 24px 64px rgba(0,0,0,0.25);
}

.modal__close {
  position: absolute;
  top: var(--spacing-12);
  right: var(--spacing-12);
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  border: none;
  background: rgba(255,255,255,0.9);
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  transition: background 0.15s;
}
.modal__close:hover { background: #fff; }

.modal__media {
  position: relative;
  height: 240px;
  overflow: hidden;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
}

.modal__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.modal__badge {
  position: absolute;
  top: var(--spacing-12);
  left: var(--spacing-12);
}

.modal__tag {
  position: absolute;
  bottom: var(--spacing-12);
  right: var(--spacing-12);
  background: rgba(255,255,255,0.92);
  color: var(--color-text-secondary);
  font-size: 11px;
  font-weight: var(--font-weight-medium);
  padding: 2px var(--spacing-8);
  border-radius: var(--radius-pill);
}

.modal__body {
  padding: var(--spacing-24);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
}

.modal__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  font-size: 13px;
  color: var(--color-text-muted);
  flex-wrap: wrap;
}
.modal__star { color: var(--color-yellow-400); }
.modal__rating { color: var(--color-text-primary); font-weight: var(--font-weight-semibold); }
.modal__reviews { color: var(--color-text-muted); }
.modal__sep { margin: 0 var(--spacing-2); }

.modal__title {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: var(--line-height-h2);
  letter-spacing: -0.5px;
}

.modal__desc {
  font-size: var(--font-size-body);
  color: var(--color-text-secondary);
  line-height: var(--line-height-body);
}

.modal__details {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  background: var(--color-bg-surface);
  border-radius: var(--radius-lg);
  padding: var(--spacing-16);
}

.modal__details li {
  font-size: var(--font-size-body-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-body-sm);
}

.modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--spacing-16);
  border-top: 1px solid var(--color-border-subtle);
  gap: var(--spacing-16);
}

.modal__price-row {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-4);
}

.modal__price {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.modal__per {
  font-size: var(--font-size-body-sm);
  color: var(--color-text-muted);
}

@media (max-width: 480px) {
  .modal-backdrop { padding: 0; align-items: flex-end; }
  .modal {
    border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    max-height: 92vh;
  }
  .modal__footer { flex-direction: column; align-items: stretch; }
  .modal__price-row { justify-content: center; }
}
</style>
