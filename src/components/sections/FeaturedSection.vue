<template>
  <section class="featured" ref="el">
    <div class="featured__inner">
      <!-- Header -->
      <div :class="['featured__header', 'anim-fade-up', { 'is-visible': visible }]">
        <span class="featured__eyebrow">{{ locale === 'es' ? 'LO QUE NO TE PUEDES PERDER' : 'O QUE VOCÊ NÃO PODE PERDER' }}</span>
        <h2 class="featured__title">{{ locale === 'es' ? 'Experiencias destacadas' : 'Experiências em destaque' }}</h2>
      </div>

      <!-- Grid -->
      <div class="featured__grid">
        <ExperienceCard
          v-for="(exp, i) in pageItems"
          :key="exp.id"
          :class="['anim-scale-up', `anim-delay-${i + 1}`, { 'is-visible': visible }]"
          :image="exp.image"
          :badge="exp.badge ? exp.badge[locale] : null"
          :tag="exp.tag[locale]"
          :title="exp.title[locale]"
          :description="exp.description[locale]"
          :rating="exp.rating"
          :reviews="exp.reviews"
          :duration="exp.duration"
          :location="exp.location"
          :price="exp.price"
          :saved="saved.includes(exp.id)"
          @save="toggleSave(exp.id)"
          @detail="openModal(exp)"
        />
      </div>

      <!-- Pagination -->
      <div class="featured__pagination">
        <PaginationBar :total="totalPages" :current="page" @change="changePage" />
      </div>
    </div>

    <!-- Modal -->
    <ExperienceModal
      v-if="selected"
      :exp="selected"
      @close="selected = null"
      @reserve="() => { selected = null; $router.push('/reservar') }"
    />
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import ExperienceCard from '@/components/base/ExperienceCard.vue'
import ExperienceModal from '@/components/base/ExperienceModal.vue'
import PaginationBar from '@/components/base/PaginationBar.vue'
import { experiences } from '@/data/home.js'
import { useLocale } from '@/composables/useLocale.js'
import { useInView } from '@/composables/useInView.js'
import { useFilter } from '@/composables/useFilter.js'

const { locale } = useLocale()
const { el, visible } = useInView()
const { activeCategory } = useFilter()

const PER_PAGE = 6
const page     = ref(1)
const saved    = ref([])
const selected = ref(null)

const filtered   = computed(() =>
  activeCategory.value
    ? experiences.filter(e => e.tag.es === activeCategory.value)
    : experiences
)
const totalPages = computed(() => Math.ceil(filtered.value.length / PER_PAGE))
const pageItems  = computed(() => {
  const start = (page.value - 1) * PER_PAGE
  return filtered.value.slice(start, start + PER_PAGE)
})

// reset página al cambiar filtro
watch(activeCategory, () => { page.value = 1 })

function changePage(p) {
  page.value = p
  document.querySelector('.featured')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function toggleSave(id) {
  const idx = saved.value.indexOf(id)
  idx === -1 ? saved.value.push(id) : saved.value.splice(idx, 1)
}

function openModal(exp) {
  selected.value = exp
}
</script>

<style scoped>
.featured {
  background: var(--color-bg-card);
}

.featured__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--spacing-64) var(--spacing-48);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-40);
}

.featured__header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
}

.featured__eyebrow {
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-brand);
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.featured__title {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: var(--line-height-h1);
  letter-spacing: -1px;
}

.featured__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-24);
}

.featured__pagination {
  display: flex;
  justify-content: center;
}

/* Tablet landscape */
@media (max-width: 1024px) {
  .featured__inner { padding: var(--spacing-48) var(--spacing-32); }
  .featured__grid  { grid-template-columns: repeat(2, 1fr); }
}

/* Tablet portrait */
@media (max-width: 768px) {
  .featured__inner { padding: var(--spacing-40) var(--spacing-24); gap: var(--spacing-24); }
  .featured__title { font-size: var(--font-size-h2); }
  .featured__grid  { grid-template-columns: repeat(2, 1fr); gap: var(--spacing-16); }
}

/* Mobile */
@media (max-width: 480px) {
  .featured__inner { padding: var(--spacing-32) var(--spacing-16); }
  .featured__grid  { grid-template-columns: 1fr; }
}
</style>
