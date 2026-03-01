import { ref, watch, type ModelRef } from 'vue'

export function useForm<T>(defaultValue: T, modelValue?: ModelRef<T | null | undefined>) {
  const form = ref<T>(clone(modelValue?.value) || defaultValue)

  if (modelValue) {
    watch(
      modelValue,
      () => {
        form.value = clone(modelValue.value)
      },
      { deep: true },
    )
  }

  function clone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj))
  }

  function handleSubmit() {
    if (!modelValue) return
    modelValue.value = clone(form.value)
  }

  return {
    form,
    handleSubmit,
  }
}
