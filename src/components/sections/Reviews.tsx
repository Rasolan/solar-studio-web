'use client'

import { FC } from 'react'
import Image from 'next/image'
import { ReviewsIconTwo, StarIcon, HeartIcon } from '@/components/icons'

export const Reviews: FC = () => {
  const reviews = [
    {
      id: 1,
      author: "Александр Солар",
      avatar: "/avatar.png",
      text: "Работа выполнена на высшем уровне! Быстрое выполнение заказа, качество и уважение к заказчикам. Советую!"
    },
    {
      id: 2,
      author: "Александр Солар",
      avatar: "/avatar.png",
      text: "Работа выполнена на высшем уровне! Быстрое выполнение заказа, качество и уважение к заказчикам. Советую!"
    },
    {
      id: 3,
      author: "Александр Солар",
      avatar: "/avatar.png",
      text: "Работа выполнена на высшем уровне! Быстрое выполнение заказа, качество и уважение к заказчикам. Советую!"
    },
    {
      id: 4,
      author: "Александр Солар",
      avatar: "/avatar.png",
      text: "Работа выполнена на высшем уровне! Быстрое выполнение заказа, качество и уважение к заказчикам. Советую!"
    }
  ]

  return (
    <section className="relative w-full min-h-[573px] bg-black py-20">
      {/* Размытая линия сверху */}
      <div className="absolute w-full h-[49px] left-0 top-[-13px] bg-black blur-[15px]" />

      {/* Фоновое изображение ЕСЛИ ХОТИТЕ МОЖЕТЕ МОЖЕТЕ ДОБАВИТЬ)) */} 
      {/* <div className="absolute right-[-16.03%] top-[-31.94%] w-[846px] h-[970px] pointer-events-none">
        <Image 
          src="/r56.png.png"
          alt="Хуипиздовина"
          width={846}
          height={970}
          className="w-full h-full object-contain transform rotate-[24.35deg] mix-blend-lighten"
          priority
        />
      </div> */}

      {/* Заголовок с иконкой */}
      <div className="relative w-full mx-auto overflow-hidden">
        <div className="flex items-center gap-4 mb-16 px-6 md:px-10 lg:px-16 xl:px-[178px]">
          <ReviewsIconTwo className="w-[60px] h-[60px] md:w-[79px] md:h-[79px]" />
          <h2 className="font-unbounded font-semibold text-4xl md:text-5xl lg:text-[64px] leading-tight md:leading-[79px] bg-gradient-to-r from-white to-[#E3D6FF] bg-clip-text text-transparent">
            Отзывы
          </h2>
        </div>

        {/* Карточки отзывов */}
        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-8 md:gap-[25px] px-4 md:px-8 lg:px-12 xl:px-[117px]">
            {reviews.map((review) => (
              <div key={review.id} className="group relative w-[340px] h-[240px] justify-self-center transition-transform duration-300 hover:scale-[1.02]">
                {/* Фон карточки */}
                <div className="absolute w-[340px] h-[240px] left-0 top-0 bg-[linear-gradient(116.49deg,#17013E_0%,#8300DA_100%)] rounded-[25px] shadow-lg transition-all duration-300 group-hover:shadow-purple-500/20" />

                {/* Фоновое сердце */}
                <div className="absolute w-[225px] h-[225px] left-[182px] top-[92px] pointer-events-none opacity-20 overflow-hidden transition-opacity duration-300 group-hover:opacity-30">
                  <HeartIcon className="w-full h-full" />
                </div>

                {/* Аватар */}
                <div className="absolute w-[55px] h-[55px] left-[17px] top-[12px] rounded-full overflow-hidden ring-2 ring-purple-500/30">
                  <Image 
                    src={review.avatar}
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Имя автора */}
                <span className="absolute w-[128px] h-[14px] left-[79px] top-[31px] font-unbounded font-semibold text-[11px] leading-[14px] text-white">
                  {review.author}
                </span>

                {/* Звезды рейтинга */}
                <div className="absolute flex top-[26px]">
                  <StarIcon className="absolute w-[24px] h-[24px] left-[214px] transition-transform duration-300 group-hover:scale-110" />
                  <StarIcon className="absolute w-[24px] h-[24px] left-[238px] transition-transform duration-300 group-hover:scale-110" />
                  <StarIcon className="absolute w-[24px] h-[24px] left-[263px] transition-transform duration-300 group-hover:scale-110" />
                  <StarIcon className="absolute w-[24px] h-[24px] left-[287px] transition-transform duration-300 group-hover:scale-110" />
                  <StarIcon className="absolute w-[24px] h-[24px] left-[311px] transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Контент отзыва */}
                <div className="absolute inset-x-5 top-[80px] bottom-5 flex flex-col">
                  {/* Открывающая кавычка */}
                  <div className="relative">
                    <span className="absolute -left-1 -top-2 font-unbounded font-[500] text-[32px] leading-[32px] text-white/70">
                      ''
                    </span>
                  </div>

                  {/* Текст отзыва */}
                  <p className="mt-6 mx-auto w-[270px] font-unbounded font-normal text-[14px] leading-[17px] text-center text-white">
                    {review.text}
                  </p>

                  {/* Закрывающая кавычка */}
                  <div className="relative mt-auto">
                    <span className="absolute -right-1 bottom-0 font-unbounded font-[500] text-[32px] leading-[32px] text-white/70 transform rotate-180">
                      "
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 