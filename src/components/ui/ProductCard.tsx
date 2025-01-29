import { FC } from 'react'
import Image from 'next/image'

// Интерфейс для размеров заголовка
interface TitleSize {
  default: string               // Обычный размер (например '20.2px')
  sm?: string                   // Размер для маленьких заголовков
  lg?: string                   // Размер для больших заголовков
  custom?: {                    // Кастомные настройки размера
    size: string                // Размер (например '25px')
    lineHeight?: string         // Высота строки (например '30px')
    letterSpacing?: string      // Межбуквенный интервал (например '0.05em')
  }
}

// Интерфейс для стилей изображения
interface ImageStyles {
  width: string                 // Ширина картинки (например '187px')
  height: string                // Высота картинки (например '243px')
  bottom?: string               // Отступ снизу (например '20px')
  top?: string                  // Отступ сверху (например '20px')
  transform?: string            // Поворот картинки
  left?: string                 // Смещение влево
  right?: string                // Смещение вправо
}

// Интерфейс для пропсов компонента
export interface ProductCardProps {
  id: number                    // Уникальный номер карточки
  title: string                 // Название сборки
  price: number                 // Цена в рублях
  description: string           // Описание сборки
  image: string                 // Путь к картинке товара
  titleSize?: TitleSize         // Настройки размера заголовка
  imageStyles: ImageStyles      // Стили для картинки
  variant?: 'product' | 'service'
  pricePrefix?: string
}

export const ProductCard: FC<ProductCardProps> = ({
  title,
  price,
  description,
  image,
  titleSize,
  imageStyles,
  variant = 'product',
  pricePrefix = ''
}) => {
  const isService = variant === 'service'

  return (
    <div 
      className="group relative w-[360px] h-[416px] rounded-[25px] overflow-hidden transition-all duration-300 hover:scale-[1.02]"
      style={{
        filter: 'drop-shadow(0px 0px 29.9px rgba(162, 0, 255, 0.5))',
        background: isService 
          ? 'linear-gradient(180deg, #7F01D2 0%, #4000FF 100%)'
          : 'linear-gradient(180deg, #A801D2 0%, #7B00FF 100%)'
      }}
    >
      {/* Логотип на фоне */}
      <div className={`absolute left-[-11px] top-[84px] w-[365px] h-[365px] mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-40`}>
        <Image
          src="/SolarStudioLogobg.png"
          alt="Задний фон карточки (логотип)"
          width={365}
          height={365}
          className="w-full h-full object-contain"
          priority={isService}
        />
      </div>

      {/* Название */}
      <h3 
        className={`absolute ${isService ? 'left-[12px] top-[20px] w-[185px]' : 'left-3 top-4'} text-white transition-transform duration-300 ${!isService && 'group-hover:scale-105'}`}
        style={{ 
          textShadow: '0px 0px 16.6px rgba(255, 255, 255, 0.8)',
          fontSize: isService ? '24px' : (titleSize?.custom?.size || titleSize?.default || '20.2px'),
          lineHeight: isService ? '30px' : (titleSize?.custom?.lineHeight || '35px'),
          letterSpacing: isService ? '-0.01em' : (titleSize?.custom?.letterSpacing || '0.06em'),
          fontFamily: 'Unbounded',
          fontStyle: 'normal',
          fontWeight: 700
        }}
      >
        {title}
      </h3>

      {/* Цена */}
      <div className={`absolute ${isService ? 'left-[231px] top-[20px] w-[113px]' : 'right-[16px] top-5 w-[82px]'} h-[30px] bg-white rounded-[0px_10px] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
        <span 
          className="font-unbounded font-bold text-[16px] leading-[20px] bg-gradient-to-r from-[#5500FF] to-[#7300FF] bg-clip-text text-transparent"
        >
          {pricePrefix}{price} ₽
        </span>
      </div>

      {/* Описание */}
      <p 
        className={`absolute ${isService ? 'left-[12px] top-[98px] w-[332px] h-[72px]' : 'left-[17px] top-[64px] w-[327px]'} font-['Actay_Wide'] font-bold text-white transition-opacity duration-300 group-hover:opacity-90`}
        style={{
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: isService ? '20px' : '14px',
          lineHeight: isService ? '25px' : '18px',
          wordWrap: 'break-word',
          whiteSpace: 'pre-line'
        }}
      >
        {description}
      </p>

      {/* Изображение */}
      <div 
        className={`absolute ${!isService ? 'left-1/2 -translate-x-1/2' : ''} transition-all duration-500 ease-in-out group-hover:scale-105`}
        style={imageStyles}
      >
        <Image
          src={image}
          alt={title}
          width={Number(imageStyles.width.replace('px', ''))}
          height={Number(imageStyles.height.replace('px', ''))}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Эффект свечения при наведении */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
} 