export const FEEDBACKS = {
  required: (message?: string) => message ?? '*campo obrigatório',
  minLength: (min: number, message?: string) => message ?? `*no mínimo, ${min} caracteres`,
  maxLength: (max: number, message?: string) => message ?? `*no máximo, ${max} caracteres`
} as const
export type FeedbackType = keyof typeof FEEDBACKS

function checkMinLengthValue(value: string, minLength: number, message?: string) {
  return value.length < minLength ? FEEDBACKS.minLength(minLength, message) : undefined
}

function checkMaxLengthValue(value: string, maxLength: number, message?: string) {
  return value.length > maxLength ? FEEDBACKS.maxLength(maxLength, message) : undefined
}

function checkRequiredValue(value?: string, message?: string) {
  return !value ? FEEDBACKS.required(message) : undefined
}

export const validator = {
  minLength: checkMinLengthValue,
  maxLength: checkMaxLengthValue,
  required: checkRequiredValue
}