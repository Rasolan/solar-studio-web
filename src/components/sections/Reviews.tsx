'use client'

import { FC, useRef, useState } from 'react'
import { ReviewsIconTwo } from '@/components/icons'
import { ReviewCard } from '@/components/ui/ReviewCard'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { createReviewsStyles } from './Reviews.styles'
import { motion } from 'framer-motion'

export const Reviews: FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const sliderRef = useRef<Slider>(null)
  
  const reviews = [
    {
      id: 1,
      author: "Александр Солар",
      avatar: "/avatar.png",
      text: "Работа выполнена на высшем уровне! Быстрое выполнение заказа, качество и уважение к заказчикам. Советую!",
      stars: 1
    },
    {
      id: 2,
      author: "Александр Солар",
      avatar: "/avatar.png",
      text: "Работа выполнена на высшем уровне! Быстрое выполнение заказа, качество и уважение к заказчикам. Советую!",
      stars: 4
    },
    {
      id: 3,
      author: "Александр Солар",
      avatar: "/avatar.png",
      text: "Работа выполнена на высшем уровне! Быстрое выполнение заказа, качество и уважение к заказчикам. Советую!",
      stars: 5
    },
    {
      id: 4,
      author: "Александр Солар",
      avatar: "/avatar.png",
      text: "Работа выполнена на высшем уровне! Быстрое выполнение заказа, качество и уважение к заказчикам. Советую!",
      stars: 5
    },
    {
      id: 5,
      author: "Александр Солар",
      avatar: "/avatar.png",
      text: "Работа выполнена на высшем уровне! Быстрое выполнение заказа, качество и уважение к заказчикам. Советую!",
      stars: 4
    },
    {
      id: 6,
      author: "Абоба Питров",
      avatar: "/avatar.png",
      text: "Работа выполнена на высшем уровне! Быстрое выполнение заказа, качество и уважение к заказчикам. Советую!",
      stars: 3
    },
    {
      id: 7,
      author: "Григорий Хуйлов",
      avatar: "/avatar.png",
      text: "Работа выполнена на высшем уровне! Быстрое выполнение заказа, качество и уважение к заказчикам. Советую!",
      stars: 5
    },
    {
      id: 8,
      author: "Доктор Наук",
      avatar: "/avatar.png",
      text: "Работа выполнена на высшем уровне! Быстрое выполнение заказа, качество и уважение к заказчикам. Советую!",
      stars: 5
    }
  ]

  const ANIMATION_DURATION = 0.6
  const SLIDE_DURATION = 3
  const TRANSITION_CURVE = "cubic-bezier(0.4, 0.0, 0.2, 1)"
  
  const duplicatedReviews = [...reviews, ...reviews]

  const settings = {
    dots: true,
    infinite: true,
    speed: ANIMATION_DURATION * 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: SLIDE_DURATION * 1000,
    cssEase: TRANSITION_CURVE,
    pauseOnHover: true,
    rtl: false,
    swipeToSlide: true,
    variableWidth: true,
    arrows: isHovered,
    draggable: true,
    useCSS: true,
    useTransform: true,
    waitForAnimate: false,
    swipe: true,
    touchThreshold: 8,
    edgeFriction: 0.2,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }
    ]
  }

  const customStyles = createReviewsStyles(
    ANIMATION_DURATION,
    SLIDE_DURATION,
    ANIMATION_DURATION,
    TRANSITION_CURVE
  )

  return (
    <motion.section 
      id="reviews-section"
      className="relative w-full pt-[69px] pb-[69px] bg-black overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <style jsx global>{customStyles}</style>

      {/* Размытая линия сверху */}
      <div className="absolute w-[2030px] h-[50px] left-[-53px] top-[-16px] bg-black blur-[10px] z-[5]" />
      
      {/* изображение справа */}
      <div className="absolute w-[337px] h-[482px] right-0 right-[185px] top-[-4px]">
        <div className="absolute w-[480px] h-[482px] -right-[316px] top-0">
          <Image
            src="/rr.png"
            alt="Декоративное изображение"
            width={480}
            height={492}
            className="absolute w-full h-full object-contain transform matrix-[-0.95,0.31,0.31,0.95,0,0]"
            priority
          />
        </div>
      </div>
      {/* Заголовок с иконкой */}
      <motion.div 
        className="relative w-full mx-auto overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-4 mb-16 px-6 md:px-10 lg:px-16 xl:px-[178px]">
          <ReviewsIconTwo className="w-[60px] h-[60px] md:w-[79px] md:h-[79px]" />
          <h2 className="font-unbounded font-semibold text-4xl md:text-5xl lg:text-[64px] leading-tight md:leading-[79px] bg-gradient-to-r from-white to-[#E3D6FF] bg-clip-text text-transparent">
            Отзывы
          </h2>
        </div>

        {/* Карточки отзывов */}
        <div 
          className="w-full reviews-container relative mt-16 sm:mt-24 lg:mt-32"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="px-4 sm:px-6 lg:px-8 overflow-visible">
            <Slider ref={sliderRef} {...settings}>
              {duplicatedReviews.map((review, index) => (
                <div key={review.id} style={{"--slide-index": index} as React.CSSProperties}>
                  <ReviewCard
                    key={review.id}
                    author={review.author}
                    avatar={review.avatar}
                    text={review.text}
                    stars={review.stars}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
