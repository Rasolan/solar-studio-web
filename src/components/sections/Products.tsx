import { FC } from 'react'
import { CartIconTwo } from '@/components/icons'
import { ProductCard, ProductCardProps } from '@/components/ui/ProductCard'

// Список всех товаров с их данными
const products: ProductCardProps[] = [
  {
    id: 1,                      
    title: 'SolarTime v1',      
    price: 500,                 
    description: 'Эта сборка — настоящая находка для тех, кто хочет запустить уникальный и захватывающий сервер! В ней есть всё: от продуманных механик до увлекательных ивентов. Ознакомьтесь с обзором, чтобы узнать больше!',
    image: '/products/p-1.png', 
    titleSize: {
      default: '28px',
      sm: '18px',
      lg: '24px',
      custom: {
        size: '22px',
        lineHeight: '38px',
        letterSpacing: '0.04em'
      }
    },
    imageStyles: {                  
      width: '187px',               
      height: '225px',              
      bottom: '0px',                
      transform: 'rotate(-5deg)',   
      left: '100px',                
      right: '50px'                 
    }
  },
  {
    id: 2,
    title: 'SolarAnarchy v1',
    price: 5000,
    description: 'С SolarAnarchy v1 ты получишь не просто сервер, а настоящий вихрь эмоций и возможностей! Забудь про баги, краши и дюпы — всё уже проработано до мелочей. Тебя ждёт 9 уникальных событий, которые добавят драйва и сделают игру по-настоящему незабываемой.',
    image: '/products/p-2.png',
    titleSize: {
      default: '20px',
      sm: '18px',
      lg: '26px',
      custom: {
        size: '24px',
        lineHeight: '40px'
      }
    },
    imageStyles: {
      width: '200px',
      height: '243px',
      bottom: '0px',
      transform: 'rotate(5deg)',
      left: '100px',
      right: '50px'
    }
  },
  {
    id: 3,
    title: 'SolarEasyGrief v3',
    price: 1500,
    description: 'Эта сборка создана для настоящих профессионалов и тех, кто жаждет сложностей. Уникальные механики, редкие ресурсы, кастомные настройки и невероятно увлекательный геймплей. Каждая деталь проработана, чтобы превратить каждый ваш день в игре в настоящее испытание на выживание и мастерство. Докажите, что вы лучший!',
    image: '/products/p-3.png',
    imageStyles: {
      width: '293px',
      height: '242px',
      bottom: '0px',
      transform: 'rotate(0deg)',
      left: '70px',
      right: '15px'
    }
  },
  {
    id: 4,
    title: 'SolarEasyGrief v2',
    price: 500,
    description: 'В этой сборке вас ждут самые крутые фишки для вашего любимого сервера, включая уникальные самописы, которые вы не найдете нигде больше. Всё продумано для максимального удовольствия от игры. Версия сборки – 1.16.5, идеально сбалансированная для настоящих ценителей гриферского геймплея!',
    image: '/products/p-4.png',
    imageStyles: {
      width: '174px',
      height: '204px',
      bottom: '0px',
      transform: 'rotate(-3deg)',
      left: '100px',
      right: '50px'
    }
  },
  {
    id: 5,
    title: 'SolarEasyGrief v1',
    price: 300,
    description: 'Эта сборка включает все необходимые механики для создания стабильного и увлекательного гриферского сервера. Никаких лишних элементов — только базовые функции, которые подойдут как для старта, так и для дальнейшего развития проекта. Версия сборки — 1.16.5, оптимальный выбор для классического гриферского геймплея!',
    image: '/products/p-5.png',
    imageStyles: {
      width: '177px',
      height: '183px',
      bottom: '0px',
      transform: 'rotate(0deg)',
      left: '90px',
      right: '50px'
    }
  },
  {
    id: 6,
    title: 'SolarBoxPVP v1',
    price: 500,
    description: 'BoxPVP — это захватывающий режим, где игроки вступают в рукопашные сражения в ограниченном пространстве, чаще всего в виде квадрата или прямоугольной арены (бокса). Главная задача — одолеть как можно больше противников или первым достичь заданного количества убийств.',
    image: '/products/p-6.png',
    imageStyles: {
      width: '178px',
      height: '201px',
      bottom: '0px',
      transform: 'rotate(-2deg)',
      left: '100px',
      right: '50px'
    }
  }
]

export const Products: FC = () => {
  return (
    <section className="relative w-full min-h-[1190px] bg-black">
      {/* Заголовок с иконкой */}
      <div className="relative max-w-[1920px] mx-auto pt-24">
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
    </section>
  )
} 