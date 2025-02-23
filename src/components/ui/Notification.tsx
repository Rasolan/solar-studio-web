'use client'

import { FC } from 'react'
import { DiscordIcon, TelegramIcon } from '../icons'

interface NotificationProps {
  type: 'discord' | 'telegram'
  onClose: () => void
}

export const Notification: FC<NotificationProps> = ({ type, onClose }) => {
  const isDiscord = type === 'discord'
  
  const content = {
    discord: {
      title: 'Заголовок',
      description: 'Описание',
      buttonText: 'На сервер',
      icon: <DiscordIcon className="w-[46px] h-[36px] text-white" />,
      bgColor: '#5865F2',
      buttonBg: 'rgba(88, 101, 242, 0.24)',
      buttonShadow: '0px 10px 37.9px rgba(88, 101, 242, 0.09)',
      href: 'https://discord.gg/solarstudio'
    },
    telegram: {
      title: 'Telegram',
      description: 'Заходиите на наш Telegram канал, чтобы быть в курсе всех новостей!',
      buttonText: 'В канал',
      icon: <TelegramIcon className="w-[42px] h-[35px] text-white" />,
      bgColor: '#28A8E9',
      buttonBg: 'rgba(40, 168, 233, 0.37)',
      buttonShadow: '0px 10px 37.9px rgba(36, 83, 111, 0.09)',
      href: 'https://t.me/solarstudio'
    }
  }

  const { title, description, buttonText, icon, bgColor, buttonBg, buttonShadow, href } = content[type]

  return (
    <div className="relative w-[494px] h-[93px] animate-slide-up">
      {/* Фон */}
      <div className="absolute inset-0 bg-[rgba(24,3,34,0.69)] backdrop-blur-[22.95px] rounded-[11px]">
        {/* Контент */}
        <div className="relative h-full flex items-center px-5">
          {/* Иконка */}
          <div 
            className="w-[61px] h-[61px] rounded-[11px] flex items-center justify-center"
            style={{ background: bgColor }}
          >
            {icon}
          </div>

          {/* Текст */}
          <div className="ml-4 flex-grow">
            <h3 className="font-['Actay_Wide'] font-bold text-[20px] leading-[25px] text-white">
              {title}
            </h3>
            <p className="mt-1 font-['Actay_Wide'] font-bold text-[12px] leading-[15px] text-white/35 max-w-[251px]">
              {description}
            </p>
          </div>

          {/* Кнопка */}
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[120px] h-[41px] rounded-[11px] font-['Actay_Wide'] font-bold text-[15px] leading-[19px] text-white"
            style={{ 
              background: buttonBg,
              boxShadow: buttonShadow
            }}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  )
} 