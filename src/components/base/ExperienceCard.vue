<template>
  <article :class="['card', `card--${size}`]">
    <!-- Media -->
    <div class="card__media">
      <img :src="image" :alt="title" class="card__img" />
      <AppBadge v-if="badge" tone="warning" size="sm" class="card__badge">
        {{ badge }}
      </AppBadge>
      <span v-if="tag" class="card__tag">{{ tag }}</span>
    </div>

    <!-- FAL: Floating Action Layer — fuera del media para no cliparse -->
    <button
      class="card__fal-btn"
      :class="{ 'card__fal-btn--saved': saved }"
      @click.prevent="$emit('save')"
      :aria-label="saveLabel"
    >
      <Bookmark :size="16" :fill="saved ? 'currentColor' : 'none'" />
    </button>

    <!-- Content -->
    <div class="card__body">
      <div class="card__meta">
        <Star :size="12" class="card__star" fill="currentColor" />
        <span class="card__rating">{{ rating }}</span>
        <span class="card__sep">·</span>
        <Clock :size="12" />
        <span class="card__duration">{{ duration }}</span>
        <span v-if="location" class="card__sep">·</span>
        <MapPin v-if="location" :size="12" />
        <span v-if="location" class="card__location">{{ location }}</span>
      </div>
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__desc">{{ description }}</p>
      <div class="card__footer">
        <div class="card__price-row">
          <span class="card__price">{{ price }}</span>
          <span class="card__price-label">{{ perPerson }}</span>
        </div>
        <button class="card__cta">{{ ctaLabel }}</button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { Bookmark, Star, Clock, MapPin } from 'lucide-vue-next'
import AppBadge from './AppBadge.vue'
import { useLocale } from '@/composables/useLocale.js'

const { locale } = useLocale()
const perPerson = computed(() => locale.value === 'es' ? '/persona' : '/pessoa')
const ctaLabel  = computed(() => locale.value === 'es' ? 'Ver detalle' : 'Ver detalhes')
const saveLabel = computed(() => locale.value === 'es' ? 'Guardar' : 'Salvar')

defineProps({
  image:       { type: String,  required: true },
  title:       { type: String,  required: true },
  description: { type: String,  default: '' },
  badge:       { type: String,  default: null },
  tag:         { type: String,  default: null },
  rating:      { type: Number,  default: 0 },
  reviews:     { type: Number,  default: 0 },
  duration:    { type: String,  default: '' },
  price:       { type: String,  required: true },
  location:    { type: String,  default: '' },
  saved:       { type: Boolean, default: false },
  size:        { type: String,  default: 'md' }, // sm | md | lg
})
defineEmits(['save'])
</script>

<style scoped>
.card {
  position: relative;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s, transform 0.2s;
}
.card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.10);
  transform: translateY(-2px);
}

/* Sizes — fluid dentro de la grid, sin ancho fijo */
.card--sm,
.card--md,
.card--lg { width: 100%; }

/* Media */
.card__media {
  position: relative;
  overflow: hidden;
}
.card--sm .card__media { height: 180px; }
.card--md .card__media { height: 220px; }
.card--lg .card__media { height: 260px; }

.card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}
.card:hover .card__img { transform: scale(1.03); }

.card__badge {
  position: absolute;
  top: var(--spacing-12);
  left: var(--spacing-12);
}
.card__tag {
  position: absolute;
  top: var(--spacing-12);
  right: var(--spacing-12);
  background: rgba(255,255,255,0.92);
  color: var(--color-text-secondary);
  font-size: 11px;
  font-weight: var(--font-weight-medium);
  padding: 2px var(--spacing-8);
  border-radius: var(--radius-pill);
}

/* FAL — posicionado sobre el card, solapando el borde inferior de la imagen */
.card__fal-btn {
  position: absolute;
  right: var(--spacing-12);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--color-text-muted);
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  transition: color 0.15s;
}
/* top = altura imagen − mitad del botón (18px) */
.card--sm .card__fal-btn { top: calc(180px - 18px); }
.card--md .card__fal-btn { top: calc(220px - 18px); }
.card--lg .card__fal-btn { top: calc(260px - 18px); }

.card__fal-btn--saved {
  color: var(--color-action-secondary-base);
  background: var(--color-turquoise-50);
  border-color: var(--color-action-secondary-base);
}
.card__fal-btn:hover { color: var(--color-action-secondary-base); }

/* Body — padding-top generoso para dejar espacio al FAL */
.card__body {
  padding: var(--spacing-32) var(--spacing-16) var(--spacing-16);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  flex: 1;
}

.card__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  font-size: 12px;
  color: var(--color-text-muted);
}
.card__star { color: var(--color-yellow-400); }
.card__rating { color: var(--color-text-primary); font-weight: var(--font-weight-medium); }
.card__sep { margin: 0 var(--spacing-2); }

.card__title {
  font-size: var(--font-size-card-title);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: 1.3;
}
.card__desc {
  font-size: var(--font-size-body-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-body-sm);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(3 * 20px);
}

.card__footer {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  margin-top: auto;
  padding-top: var(--spacing-8);
  border-top: 1px solid var(--color-border-subtle);
}

.card__price-row {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-4);
}

.card__price {
  font-size: var(--font-size-card-price);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}
.card__price-label {
  font-size: var(--font-size-caption);
  color: var(--color-text-muted);
}

.card__cta {
  width: 100%;
  padding: var(--spacing-8) 0;
  background: var(--color-action-secondary-base);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-semibold);
  font-family: var(--font-family-base);
  cursor: pointer;
  transition: background 0.15s;
}
.card__cta:hover { background: var(--color-turquoise-700); }
</style>
