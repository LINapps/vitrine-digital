export const FEEDBACKS = {
  required: (message?: string) => message ?? '* Campo obrigatório',
  minLength: (min: number, message?: string) => message ?? `* No mínimo, ${min} caracteres`,
  maxLength: (max: number, message?: string) => message ?? `* No máximo, ${max} caracteres`,
  minSize: (min: number, message?: string) => message ?? `* No mínimo, ${min} itens`,
  email: (message?: string) => message ?? '* Email inválido'
} as const
export type FeedbackType = keyof typeof FEEDBACKS

function checkMinLengthValue(value: string, minLength: number, message?: string) {
  return value.length < minLength ? FEEDBACKS.minLength(minLength, message) : undefined
}

function checkMinSizeList(list: unknown[], minSize: number, message?: string) {
  return Array.isArray(list) && list.length < minSize ? FEEDBACKS.minSize(minSize, message) : undefined
}

function checkMaxLengthValue(value: string, maxLength: number, message?: string) {
  return value.length > maxLength ? FEEDBACKS.maxLength(maxLength, message) : undefined
}

function checkRequiredValue(value?: string, message?: string) {
  return !value ? FEEDBACKS.required(message) : undefined
}

function checkEmail(email: string, message?: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return pattern.test(email) ? FEEDBACKS.email(message) : undefined
}

function checkIsValidDate(dateStr: string, message?: string) {
  const [day, month, year] = dateStr.split('/').map(Number)
  const date = new Date(year, month - 1, day)

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  )
}

export const validator = {
  minLength: checkMinLengthValue,
  maxLength: checkMaxLengthValue,
  required: checkRequiredValue,
  minSize: checkMinSizeList,
  email: checkEmail
}