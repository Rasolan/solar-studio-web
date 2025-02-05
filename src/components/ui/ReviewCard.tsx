'use client'

import { FC } from 'react'
import Image from 'next/image'
import { HeartIcon, StarIcon } from '@/components/icons'
import { createReviewsStyles } from '@/components/sections/Reviews.styles'

interface ReviewCardProps {
  author: string
  avatar: string
  text: string
  stars?: number
}

export const ReviewCard: FC<ReviewCardProps> = ({
  author,
  avatar,
  text,
  stars = 5
}) => {
  const styles = createReviewsStyles(0.6, 3, 0.6, "cubic-bezier(0.4, 0.0, 0.2, 1)")

  return (
    <>
      <style jsx global>{styles}</style>
      <div className="review-card relative w-[340px] h-[240px] mx-auto transition-transform duration-300 hover:scale-[1.02]">
        <div className="review-card-content relative w-full h-full">
          {/* Фон карточки */}
          <div className="review-card-bg absolute w-[340px] h-[240px] left-0 top-0 bg-[linear-gradient(116.49deg,#17013E_0%,#8300DA_100%)] rounded-[25px] shadow-lg transition-all duration-300 group-hover:shadow-purple-500/20" />

          {/* Фоновое сердце */}
          <div className="review-card-heart absolute w-[225px] h-[225px] left-[182px] top-[92px] pointer-events-none opacity-20 overflow-hidden transition-opacity duration-300 group-hover:opacity-30">
            <HeartIcon className="w-full h-full" />
          </div>

          {/* Аватар */}
          <div className="review-card-avatar absolute w-[55px] h-[55px] left-[17px] top-[12px] rounded-full overflow-hidden ring-2 ring-purple-500/30">
            <Image 
              src={avatar}
              alt={author}
              fill
              className="object-cover"
            />
          </div>

          {/* Имя автора */}
          <span className="review-card-author absolute w-[128px] h-[14px] left-[79px] top-[31px] font-unbounded font-semibold text-[11px] leading-[14px] text-white">
            {author}
          </span>

          {/* Звезды рейтинга */}
          <div className="review-card-stars absolute flex top-[26px]">
            <StarIcon className={`review-card-star absolute w-[24px] h-[24px] left-[214px] ${1 > stars ? 'opacity-30' : ''}`} />
            <StarIcon className={`review-card-star absolute w-[24px] h-[24px] left-[238px] ${2 > stars ? 'opacity-30' : ''}`} />
            <StarIcon className={`review-card-star absolute w-[24px] h-[24px] left-[263px] ${3 > stars ? 'opacity-30' : ''}`} />
            <StarIcon className={`review-card-star absolute w-[24px] h-[24px] left-[287px] ${4 > stars ? 'opacity-30' : ''}`} />
            <StarIcon className={`review-card-star absolute w-[24px] h-[24px] left-[311px] ${5 > stars ? 'opacity-30' : ''}`} />
          </div>

          {/* Контент отзыва */}
          <div className="absolute inset-x-5 top-[80px] bottom-5 flex flex-col">
            {/* Открывающая кавычка */}
            <div className="relative">
              <span className="review-card-quote absolute -left-1 -top-2 font-unbounded font-[500] text-[32px] leading-[32px] text-white/70">
                ''
              </span>
            </div>

            {/* Текст отзыва */}
            <p className="review-card-text mt-6 mx-auto w-[270px] font-unbounded font-normal text-[14px] leading-[17px] text-center text-white">
              {text}
            </p>

            {/* Закрывающая кавычка */}
            <div className="relative mt-auto">
              <span className="review-card-quote absolute -right-1 bottom-0 font-unbounded font-[500] text-[32px] leading-[32px] text-white/70 transform rotate-180">
                "
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
