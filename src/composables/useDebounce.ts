import { ref } from 'vue'

export function useDebounce<T extends (...args: unknown[]) => unknown>(callback: T, delay: number) {
  const timeoutId = ref<ReturnType<typeof setTimeout> | null>(null)
  const debouncedFn = (...args: Parameters<T>) => {
    if (timeoutId.value) {
      clearTimeout(timeoutId.value)
    }

    timeoutId.value = setTimeout(() => {
      callback(...args)
    }, delay)
  }

  return debouncedFn
}
