import { ref, unref, type Ref } from 'vue'

export function useFetch<T>(
  baseUrl: string,
  options?: { params?: Ref<Record<string, string>> | Record<string, string> },
) {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const execute = async () => {
    loading.value = true
    error.value = null

    const url = new URL(baseUrl)

    if (options?.params) {
      url.search = new URLSearchParams(unref(options?.params)).toString()
    }

    try {
      const response = await fetch(url.toString())

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      data.value = (await response.json()) as T
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An unknown error occurred'
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, execute }
}
