import { ref, onMounted, onUnmounted } from 'vue'

/**
 * useInView — dispara `visible` cuando el elemento entra al viewport.
 * @param {object} options — IntersectionObserver options
 */
export function useInView(options = {}) {
  const el      = ref(null)
  const visible = ref(false)

  let observer

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.unobserve(entry.target) // solo una vez
      }
    }, { threshold: 0.12, ...options })

    if (el.value) observer.observe(el.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { el, visible }
}
