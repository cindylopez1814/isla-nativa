import { ref } from 'vue'

// null = todas las categorías
const activeCategory = ref(null)

export function useFilter() {
  function setCategory(labelEs) {
    activeCategory.value = activeCategory.value === labelEs ? null : labelEs
  }
  function clearFilter() {
    activeCategory.value = null
  }
  return { activeCategory, setCategory, clearFilter }
}
