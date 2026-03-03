import { ref, watch, type ModelRef } from 'vue'

export function useForm<T>(
  defaultValue: T,
  modelValue?: ModelRef<T | null | undefined>,
  validate?: (values: T) => Partial<Record<keyof T, string>>,
  emitSubmit?: () => void | Promise<void>,
) {
  const formData = ref<T>(clone(modelValue?.value) || defaultValue)
  const errors = ref<Partial<Record<keyof T, string>>>({})

  if (modelValue) {
    watch(
      modelValue,
      () => {
        formData.value = clone(modelValue.value)
      },
      { deep: true },
    )
  }

  function clone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj))
  }

  const handleSubmit = async () => {
    errors.value = {}

    if (validate) {
      const isValid = await validate(formData.value)
      errors.value = isValid

      if (Object.keys(isValid).length > 0) {
        return
      }
    }

    if (!modelValue) return
    modelValue.value = clone(formData.value)

    if (emitSubmit) {
      emitSubmit()
    }
  }

  return {
    formData,
    errors,
    handleSubmit,
  }
}
