// Базовый интерфейс для всех карточек
interface BaseCard {
  id: number
  title: string
  description: string
  image: string
  category: 'builds' | 'plugins' | 'maps'
}

// Интерфейс для платных сервисов
export interface PaidServiceCard extends BaseCard {
  price: number
  type: 'paid'
}

// Интерфейс для бесплатных сервисов
export interface FreeServiceCard extends BaseCard {
  downloads: number
  type: 'free'
}

// Объединенный тип для сервисов
export type ServiceCard = PaidServiceCard | FreeServiceCard

// Пропсы для компонента карточки
export interface ServiceCardProps {
  id: number
  title: string
  description: string
  image: string
  category: 'builds' | 'plugins' | 'maps'
  price?: number
  downloads?: number
  type: 'paid' | 'free'
  onAction?: () => void
}

// Интерфейс для покупок
export interface PurchaseCardProps extends BaseCard {
  price: number
}

// Интерфейс для бесплатных сервисов с колбэком скачивания
export interface FreeServiceWithDownloadProps extends BaseCard {
  downloads: number
  onDownload?: () => void
} 