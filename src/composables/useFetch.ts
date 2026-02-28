import { ref, unref, type Ref } from 'vue'

export function useFetch<T>(
  baseUrl: string,
  options?: { params?: Ref<Record<string, string>> | Record<string, string> },
) {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const controller = ref<AbortController | null>(null)

  const abort = () => {
    if (controller.value) {
      controller.value.abort()
    }
  }

  const execute = async () => {
    abort()
    controller.value = new AbortController()

    loading.value = true
    error.value = null

    const url = new URL(baseUrl)

    if (options?.params) {
      url.search = new URLSearchParams(unref(options?.params)).toString()
    }

    try {
      const response = await fetch(url.toString(), {
        signal: controller.value.signal,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      data.value = (await response.json()) as T
    } catch (err) {
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          // The request was cancelled on purpose (user typed fast or left page)
          console.log('Fetch aborted: moving on to the next request.')
          return // Exit the function without setting the error state
        }
      }
      error.value = err instanceof Error ? err.message : 'An unknown error occurred'
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, execute, abort }
}
