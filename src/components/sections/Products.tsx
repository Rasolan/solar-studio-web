import { FC } from 'react'
import { CartIconTwo } from '@/components/icons'
import { ProductCard, ProductCardProps } from '@/components/ui/ProductCard'
import Image from 'next/image'

// Список всех товаров с их данными
const products: ProductCardProps[] = [
  {
    id: 1,                      
    title: 'SolarTime v1',      
    price: 500,                 
    description: 'Готовая сборка анархического сервера на основе популярного проекта FunTime для Minecraft 1.16.5+. ',
    image: '/products/p-1.png', 
    imageStyles: {                  
      width: '247px',               
      height: '367px',              
      bottom: '0px',                  
      left: '110px',                
      right: '50px'                 
    }
  },
  {
    id: 2,
    title: 'SolarAnarchy v1',
    price: 5000,
    description: 'Сборка анархического сервера для Minecraft 1.16.5+ с множеством уникальных механик. ',
    image: '/products/p-2.png',
    imageStyles: {
      width: '417px',
      height: '487px',
      bottom: '0px',
      transform: 'rotate(5deg)',
      left: '-60px',
      right: '10px'
    }
  },
  {
    id: 3,
    title: 'SolarEasyGrief v3',
    price: 1500,
    description: 'Гриферская сборка для Minecraft 1.16.5+ с захватывающими ивентами и уникальными механиками, делающими игру еще интереснее. ',
    image: '/products/p-3.png',
    imageStyles: {
      width: '332px',
      height: '239px',
      bottom: '10px',
      left: '24px',
      right: '15px',
      top: '175px'
    }
  },
  {
    id: 4,
    title: 'SolarEasyGrief v2',
    price: 500,
    description: 'Сборка гриферского сервера для Minecraft 1.16.5+ с продуманным стилем и качественными самописными плагинами.',
    image: '/products/p-4.png',
    imageStyles: {
      width: '230px',
      height: '368px',
      bottom: '0px',
      transform: 'rotate(3deg)',
      left: '130px'
    }
  },
  {
    id: 5,
    title: 'SolarEasyGrief v1',
    price: 300,
    description: 'Готовая сборка гриферского сервера для Minecraft 1.16.5+, идеально подходящая для новичков, желающих запустить свой сервер.',
    image: '/products/p-5.png',
    imageStyles: {
      width: '262px',
      height: '319px',
      bottom: '0px',
      transform: 'rotate(0deg)',
      left: '100px',
      right: '45px'
    }
  },
  {
    id: 6,
    title: 'SolarBoxPVP v1',
    price: 500,
    description: 'Гриферская сборка для Minecraft 1.16.5+ с захватывающими ивентами и уникальными механиками, делающими игру еще интереснее.',
    image: '/products/p-6.png',
    imageStyles: {
      width: '237px',
      height: '331px',
      bottom: '0px',
      left: '120px',
      right: '40px'
    }
  }
]

export const Products: FC = () => {
  return (
    <section id="products-section" className="relative w-full bg-black overflow-hidden">
      <div className="relative w-full py-32">
        {/* Декоративное изображение слева */}
        <div className="absolute w-[338px] h-[534px] left-[320px] top-0">
          {/* Контейнер для изображения */}
          <div className="absolute w-[624.6px] h-[624.32px] -left-[440px] -top-[-140px]">
            <Image
              src="/prog-b-p.png"
              alt="Хуйнанэ"
              width={624}
              height={624}
              className="absolute w-full h-full object-contain transform"
              priority
            />
          </div>
          {/* Свечение под изображением */}
          <div className="absolute w-[375px] h-[375px] -left-[440px] -top-[-190px] bg-[rgba(130,21,182,0.49)] blur-[121.75px]" />
        </div>

        {/* Заголовок с иконкой */}
        <div className="relative pt-24">
          <div className="relative flex items-center justify-center gap-4">
            <CartIconTwo className="w-[79px] h-[79px]" />
            <h2 className="font-unbounded font-semibold text-[64px] leading-[79px] bg-gradient-to-r from-white to-[#E3D6FF] bg-clip-text text-transparent">
              Наши товары
            </h2>
          </div>
        </div>

        {/* Сетка товаров */}
        <div className="relative max-w-[1200px] mx-auto mt-24 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        {/* Разделитель */}
        {/* <div 
          className="absolute left-1/2 -translate-x-1/2 bottom-[10px] w-[1171px] h-[10px] bg-[#8A2CDC]"
          style={{
            filter: 'blur(4.25px)',
            borderRadius: '50px'
          }}
        /> */}
      </div>
    </section>
  )
} 