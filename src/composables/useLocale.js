import { ref, computed } from 'vue'

// Singleton — mismo ref en todos los componentes que lo importen
const locale = ref('es') // 'es' | 'pt'

export function useLocale() {
  function toggle() {
    locale.value = locale.value === 'es' ? 'pt' : 'es'
  }

  const isEs = computed(() => locale.value === 'es')
  const isPt = computed(() => locale.value === 'pt')

  return { locale, isEs, isPt, toggle }
}
