'use client'

import { Toaster, toast, Toast } from 'react-hot-toast'
import { Notification } from '../ui/Notification'

export const NotificationsProvider = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 8000,
        style: {
          background: 'transparent',
          boxShadow: 'none',
          padding: 0
        }
      }}
    />
  )
}

// Функция для показа уведомлений
export const showNotification = (type: 'discord' | 'telegram') => {
  toast.custom((t: Toast) => (
    <Notification 
      type={type} 
      onClose={() => toast.dismiss(t.id)} 
    />
  ))
} 