export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const isValidPhone = (phone: string): boolean => {
  return /^[0-9+\-\s()]{7,15}$/.test(phone)
}

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}
