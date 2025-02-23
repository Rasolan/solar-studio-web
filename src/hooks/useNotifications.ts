'use client'

import { useEffect } from 'react'
import { showNotification } from '@/components/providers/NotificationsProvider'

export const useNotifications = () => {
  useEffect(() => {
    // Проверяем, показывались ли уже уведомления в этой сессии
    const hasShownNotifications = sessionStorage.getItem('notificationsShown')
    
    if (!hasShownNotifications) {
      // Показываем уведомление с задержкой после загрузки страницы
      const timer = setTimeout(() => {
        // Случайно выбираем тип уведомления
        const notificationType = Math.random() < 0.5 ? 'telegram' : 'discord'
        showNotification(notificationType)
      }, 2000) // Начинаем показ через 2 секунды после загрузки

      // Отмечаем, что уведомление было показано
      sessionStorage.setItem('notificationsShown', 'true')

      return () => {
        clearTimeout(timer)
      }
    }
  }, [])
} 