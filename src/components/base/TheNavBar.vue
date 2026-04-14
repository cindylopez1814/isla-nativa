<template>
  <nav class="navbar">
    <div class="navbar__inner">
      <!-- Brand -->
      <a href="/" class="navbar__brand">
        <span class="navbar__brand-isla">Isla</span><span class="navbar__brand-nativa">Nativa</span>
      </a>

      <!-- Spacer -->
      <div class="navbar__spacer"></div>

      <!-- Actions -->
      <div class="navbar__actions">
        <button class="navbar__icon-btn" :aria-label="isEs ? 'Buscar' : 'Buscar'">
          <Search :size="20" />
        </button>

        <!-- Language switcher -->
        <div class="navbar__lang" @click="toggleLocale" :aria-label="`Cambiar a ${isEs ? 'Português' : 'Español'}`">
          <span :class="['navbar__lang-opt', { active: isEs }]">ES</span>
          <span class="navbar__lang-sep">/</span>
          <span :class="['navbar__lang-opt', { active: isPt }]">PT</span>
        </div>

        <AppButton variant="primary" size="sm" @click="router.push('/reservar')">{{ isEs ? 'Reservar' : 'Reservar' }}</AppButton>
      </div>

      <!-- Hamburger mobile -->
      <button class="navbar__hamburger" @click="open = !open" aria-label="Menú">
        <Menu v-if="!open" :size="22" />
        <X v-else :size="22" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="open" class="navbar__mobile">
      <div class="navbar__lang navbar__lang--mobile" @click="toggleLocale">
        <span :class="['navbar__lang-opt', { active: isEs }]">ES</span>
        <span class="navbar__lang-sep">/</span>
        <span :class="['navbar__lang-opt', { active: isPt }]">PT</span>
      </div>
      <AppButton variant="primary" size="md" style="width:100%" @click="() => { router.push('/reservar'); open = false }">{{ isEs ? 'Reservar' : 'Reservar' }}</AppButton>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Menu, X } from 'lucide-vue-next'
import AppButton from './AppButton.vue'
import { useLocale } from '@/composables/useLocale.js'

const open = ref(false)
const router = useRouter()
const { isEs, isPt, toggle: toggleLocale } = useLocale()
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border-subtle);
}

.navbar__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--spacing-12) var(--spacing-48);
  min-height: 64px;
  display: flex;
  align-items: center;
  gap: var(--spacing-40);
}

.navbar__brand {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: -0.5px;
}
.navbar__brand-isla   { color: var(--color-surface-dark); }
.navbar__brand-nativa { color: var(--color-action-tertiary-base); }

.navbar__spacer { flex: 1; }

.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
}

.navbar__icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  border: none;
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: background 0.15s;
}
.navbar__icon-btn:hover { background: var(--color-bg-subtle); }

.navbar__hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  color: var(--color-text-primary);
  cursor: pointer;
  flex-shrink: 0;
}

/* Mobile menu */
.navbar__mobile {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  padding: var(--spacing-16) var(--spacing-24);
  border-top: 1px solid var(--color-border-subtle);
  background: #fff;
}
.navbar__mobile-link {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--spacing-8) 0;
  border-bottom: 1px solid var(--color-border-subtle);
}

/* Language switcher */
.navbar__lang {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  cursor: pointer;
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--color-border-default);
  background: transparent;
  transition: border-color 0.15s;
  user-select: none;
}
.navbar__lang:hover { border-color: var(--color-action-secondary-base); }

.navbar__lang-opt {
  font-size: 11px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-muted);
  letter-spacing: 0.5px;
  transition: color 0.15s;
}
.navbar__lang-opt.active {
  color: var(--color-action-secondary-base);
}
.navbar__lang-sep {
  font-size: 11px;
  color: var(--color-border-default);
}

.navbar__lang--mobile {
  align-self: flex-start;
  margin-top: var(--spacing-4);
}

@media (max-width: 768px) {
  .navbar__inner { padding: var(--spacing-12) var(--spacing-24); }
  .navbar__actions { display: none; }
  .navbar__hamburger { display: flex; }
}
</style>
