import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SocialLink {
  title: string
  href: string
}

const socials: SocialLink[] = [
  {
    title: 'TELEGRAM',
    href: 'https://t.me/solarstudio'
  },
  {
    title: 'YOUTUBE',
    href: 'https://youtube.com/@solarstudio'
  }
]

export const Footer: FC = () => {
  return (
    <footer className="relative w-full min-h-[600px] sm:min-h-[500px] lg:min-h-[339px] bg-[#090013] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
      {/* Верхняя линия */}
      <div className="absolute w-full h-[1px] top-0 left-0 bg-[#595959]" />

      {/* Декоративные цветы */}
      <div className="absolute w-[208.18px] h-[208.18px] lg:left-[540px] md:left-[20%] left-[10%] top-[74.72px] blur-[10px] rotate-[-30.84deg] opacity-50 sm:opacity-100">
        <Image
          src="/footer/flower.png"
          alt="Декоративный цветок"
          width={208}
          height={208}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute w-[208.18px] h-[208.18px] lg:left-[1232.24px] md:left-[60%] left-[50%] lg:top-[419.13px] top-[300px] blur-[10px] rotate-[-157.44deg] opacity-50 sm:opacity-100">
        <Image
          src="/footer/flower.png"
          alt="Декоративный цветок"
          width={208}
          height={208}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute w-[259.96px] h-[259.96px] lg:left-[1745.56px] md:left-[80%] left-[70%] lg:top-[111px] top-[150px] blur-[10px] rotate-[16.67deg] opacity-50 sm:opacity-100">
        <Image
          src="/footer/flower.png"
          alt="Декоративный цветок"
          width={260}
          height={260}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute w-[291.49px] h-[291.49px] lg:left-[203.39px] md:left-[10%] left-[5%] lg:top-[273.24px] top-[200px] blur-[10px] rotate-[172.87deg] opacity-50 sm:opacity-100">
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
        className="absolute w-full lg:w-[2173px] h-[346px] lg:left-[225px] left-0 bottom-0 lg:bottom-[-200px]"
        style={{
          background: 'linear-gradient(90deg, rgba(145, 0, 255, 0.8) 0%, rgba(9, 0, 255, 0.8) 100%)',
          filter: 'blur(263.4px)'
        }}
      />

      {/* Основной контент */}
      <div className="relative w-full max-w-[1920px] h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-[30px] lg:pt-0 flex flex-col items-center lg:block">
          {/* Логотип */}
          <div className="w-[200px] sm:w-[250px] lg:w-[333px] h-[90px] sm:h-[100px] lg:h-[121px] lg:absolute lg:left-[188px] lg:top-[54px]">
            <Image
              src="/SolarStudioDark.png"
              alt="Solar Studio"
              width={333}
              height={121}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Копирайт */}
          <p className="mt-8 lg:mt-0 lg:absolute lg:left-[188px] lg:top-[190px] font-unbounded font-semibold text-[14px] sm:text-[16px] leading-[20px] text-[#D5D5D5] text-center lg:text-left">
            Copyright © SolarStudio 2024. Все права защищены.
          </p>

          {/* Социальные кнопки */}
          <div className="mt-8 lg:mt-0 w-full flex flex-col items-center justify-center gap-4">
            {socials.map((social, index) => (
              <Link 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative w-[280px] sm:w-[260px] lg:w-[284px] h-[70px] lg:absolute lg:right-[188px] ${index === 0 ? 'lg:top-[84px]' : 'lg:top-[174px]'} bg-[linear-gradient(107.45deg,#686781_0%,#0B094E_100%)] border border-[#949494] rounded-[16px] overflow-hidden transition-all duration-300 hover:bg-[linear-gradient(107.45deg,#787891_0%,#1B195E_100%)]`}
              >
                {/* Текст */}
                <div className="absolute inset-0 flex flex-col justify-center px-6">
                  <span className="block font-unbounded font-black text-[20px] leading-[1.2] text-white">
                    {social.title}
                  </span>
                  <span className="block text-[12px] font-medium text-gray-300 mt-1">
                    Присоединяйтесь к нам
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Дисклеймер */}
          <p className="mt-4 lg:mt-0 lg:absolute lg:left-[188px] lg:top-[240px] font-unbounded font-semibold text-[14px] sm:text-[16px] leading-[20px] text-[#C5C5C5] text-center lg:text-left max-w-[606px] mx-auto lg:mx-0">
            Студия SolarStudio никак не относится к Mojang, AB. Копирование контента с сайта, сборки студии запрещено.
          </p>

          {/* Договор оферты */}
          <Link 
            href="#" 
            className="mt-8 lg:mt-0 lg:absolute lg:left-[188px] lg:top-[290px] font-unbounded font-semibold text-[16px] sm:text-[20px] leading-[25px] text-transparent bg-clip-text hover:opacity-80 transition-opacity text-center lg:text-left"
            style={{
              background: 'linear-gradient(90.49deg, #6A00FF 0.12%, #BF00FF 99.83%)',
              WebkitBackgroundClip: 'text'
            }}
          >
            Договор оферты
          </Link>
        </div>
      </div>
    </footer>
  )
} 