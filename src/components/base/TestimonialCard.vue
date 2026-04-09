<template>
  <article class="testimonial">
    <div class="testimonial__stars">
      <Star v-for="i in rating" :key="i" :size="18" fill="currentColor" />
    </div>
    <blockquote class="testimonial__quote">"{{ quote }}"</blockquote>
    <div class="testimonial__author">
      <img :src="avatar" :alt="author" class="testimonial__avatar" />
      <div class="testimonial__info">
        <span class="testimonial__name">{{ author }}</span>
        <span class="testimonial__role">{{ role }}</span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { Star } from 'lucide-vue-next'

defineProps({
  quote:  { type: String,  required: true },
  author: { type: String,  required: true },
  role:   { type: String,  default: '' },
  avatar: { type: String,  required: true },
  rating: { type: Number,  default: 5 },
})
</script>

<style scoped>
.testimonial {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
}

.testimonial__stars {
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  color: var(--color-yellow-400);
}

.testimonial__quote {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-inverse);
  line-height: var(--line-height-h3);
  font-style: italic;
}

.testimonial__author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-12);
}

.testimonial__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-turquoise-300);
}

.testimonial__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-2);
}

.testimonial__name {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-inverse);
}

.testimonial__role {
  font-size: var(--font-size-body-sm);
  color: var(--color-turquoise-300);
}
</style>
