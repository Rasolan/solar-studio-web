import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SocialButton {
  title: string
  href: string
  left: string
}

const socials: SocialButton[] = [
  {
    title: 'TELEGRAM',
    href: '#',
    left: 'left-[1222px]'
  },
  {
    title: 'YOUTUBE',
    href: '#',
    left: 'left-[1537px]'
  }
]

export const Footer: FC = () => {
  return (
    <footer className="relative w-full h-[339px] bg-[#090013] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
      {/* Верхняя линия */}
      <div className="absolute w-full h-[1px] top-0 left-0 bg-[#595959]" />

      {/* Декоративные цветы */}
      <div className="absolute w-[208.18px] h-[208.18px] left-[540px] top-[74.72px] blur-[10px] rotate-[-30.84deg]">
        <Image
          src="/footer/flower.png"
          alt="Декоративный цветок"
          width={208}
          height={208}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute w-[208.18px] h-[208.18px] left-[1232.24px] top-[419.13px] blur-[10px] rotate-[-157.44deg]">
        <Image
          src="/footer/flower.png"
          alt="Декоративный цветок"
          width={208}
          height={208}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute w-[259.96px] h-[259.96px] left-[1745.56px] top-[111px] blur-[10px] rotate-[16.67deg]">
        <Image
          src="/footer/flower.png"
          alt="Декоративный цветок"
          width={260}
          height={260}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute w-[291.49px] h-[291.49px] left-[203.39px] top-[273.24px] blur-[10px] rotate-[172.87deg]">
        <Image
          src="/footer/flower.png"
          alt="Декоративный цветок"
          width={291}
          height={291}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Фоновое свечение */}
      <div 
        className="absolute w-[2173px] h-[346px] left-[225px] top-[390px]"
        style={{
          background: 'linear-gradient(90deg, rgba(145, 0, 255, 0.8) 0%, rgba(9, 0, 255, 0.8) 100%)',
          filter: 'blur(263.4px)'
        }}
      />

      {/* Основной контент */}
      <div className="relative max-w-[1920px] h-full mx-auto">
        {/* Логотип */}
        <div className="absolute left-[188px] top-[54px] w-[333px] h-[121px]">
          <Image
            src="/SolarStudioDark.png"
            alt="Solar Studio"
            width={333}
            height={121}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Копирайт */}
        <p className="absolute left-[531px] top-[94px] font-unbounded font-semibold text-[16px] leading-[20px] text-[#D5D5D5]">
          Copyright © SolarStudio 2024. Все права защищены.
        </p>

        {/* Дисклеймер */}
        <p className="absolute left-[203px] top-[192px] w-[606px] font-unbounded font-semibold text-[16px] leading-[20px] text-[#C5C5C5]">
          Студия SolarStudio никак не относится к Mojang, AB. Копирование контента с сайта, сборки студии запрещено.
        </p>

        {/* Социальные кнопки */}
        {socials.map((social, index) => (
          <Link 
            key={index}
            href={social.href}
            className={`absolute ${social.left} top-[107px] w-[280px] h-[124px] bg-[linear-gradient(107.45deg,#686781_0%,#0B094E_100%)] border border-[#949494] rounded-[25px] group overflow-hidden`}
          >
            <span className="absolute left-[25px] top-[33px] font-unbounded font-black text-[32px] leading-[40px] text-[#272727] transition-all duration-300 group-hover:translate-y-1">
              {social.title}
            </span>
            <span className="absolute left-[18px] top-[51px] font-unbounded font-black text-[32px] leading-[40px] text-white transition-all duration-300 group-hover:-translate-y-1">
              {social.title}
            </span>
          </Link>
        ))}

        {/* Договор оферты */}
        <Link 
          href="#" 
          className="absolute left-[203px] top-[241px] font-unbounded font-semibold text-[20px] leading-[25px] text-transparent bg-clip-text hover:opacity-80 transition-opacity"
          style={{
            background: 'linear-gradient(90.49deg, #6A00FF 0.12%, #BF00FF 99.83%)',
            WebkitBackgroundClip: 'text'
          }}
        >
          Договор оферты
        </Link>
      </div>
    </footer>
  )
} 