// Типы ошибок
export interface ValidationErrors {
  login?: string
  password?: string
  confirmPassword?: string
  general?: string
  terms?: string
}

// Интерфейсы для форм
export interface LoginFormData {
  login: string
  password: string
}

export interface RegisterFormData extends LoginFormData {
  confirmPassword: string
}

// Константы для валидации
const VALIDATION_RULES = {
  login: {
    minLength: 3,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9_-]+$/,
  },
  password: {
    minLength: 8,
    maxLength: 32,
    pattern: /^(?=.*[A-Za-z])(?=.*\d).+$/,  // Должен содержать хотя бы одну букву и одну цифру
  }
}

// Функции валидации
export const validateLogin = (login: string): string | undefined => {
  if (!login) {
    return 'Введите логин'
  }
  if (login.length < VALIDATION_RULES.login.minLength) {
    return `Логин должен содержать минимум ${VALIDATION_RULES.login.minLength} символа`
  }
  if (login.length > VALIDATION_RULES.login.maxLength) {
    return `Логин не должен превышать ${VALIDATION_RULES.login.maxLength} символов`
  }
  if (!VALIDATION_RULES.login.pattern.test(login)) {
    return 'Логин может содержать только латинские буквы, цифры, дефис и нижнее подчеркивание'
  }
  return undefined
}

export const validatePassword = (password: string): string | undefined => {
  if (!password) {
    return 'Введите пароль'
  }
  if (password.length < VALIDATION_RULES.password.minLength) {
    return `Пароль должен содержать минимум ${VALIDATION_RULES.password.minLength} символов`
  }
  if (password.length > VALIDATION_RULES.password.maxLength) {
    return `Пароль не должен превышать ${VALIDATION_RULES.password.maxLength} символов`
  }
  if (!VALIDATION_RULES.password.pattern.test(password)) {
    return 'Пароль должен включать буквы и цифру'
  }
  return undefined
}

export const validateConfirmPassword = (password: string, confirmPassword: string): string | undefined => {
  if (!confirmPassword) {
    return 'Подтвердите пароль'
  }
  if (password !== confirmPassword) {
    return 'Пароли не совпадают'
  }
  return undefined
}

// Основные функции валидации форм
export const validateLoginForm = (data: LoginFormData): ValidationErrors => {
  const errors: ValidationErrors = {}

  const loginError = validateLogin(data.login)
  if (loginError) errors.login = loginError

  const passwordError = validatePassword(data.password)
  if (passwordError) errors.password = passwordError

  return errors
}

export const validateRegisterForm = (data: RegisterFormData): ValidationErrors => {
  const errors: ValidationErrors = {}

  const loginError = validateLogin(data.login)
  if (loginError) errors.login = loginError

  const passwordError = validatePassword(data.password)
  if (passwordError) errors.password = passwordError

  const confirmPasswordError = validateConfirmPassword(data.password, data.confirmPassword)
  if (confirmPasswordError) errors.confirmPassword = confirmPasswordError

  return errors
} 