export const createReviewsStyles = (
  ANIMATION_DURATION: number,
  SLIDE_DURATION: number,
  RESUME_DURATION: number,
  TRANSITION_CURVE: string
) => `
  .reviews-container {
    opacity: 0;
    animation: fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .slick-slider {
    overflow: visible;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    will-change: transform;
  }

  .slick-slide {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    animation: slideIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: calc(0.1s * var(--slide-index, 0));
  }

  /* Эффекты при наведении на контейнер */
  .reviews-container:hover .slick-slide {
    filter: brightness(0.6);
    transform: scale(0.85);
  }

  .reviews-container:hover .slick-active {
    filter: brightness(0.8);
    transform: scale(0.9);
  }

  .reviews-container:hover .slick-center {
    filter: brightness(1);
    transform: scale(1.5);
  }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .slick-slide > div {
    margin: 0 15px;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slick-list {
    overflow: visible !important;
    padding: 60px 0 !important;
  }

  .slick-track {
    display: flex;
    align-items: center;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  /* Стили для навигации */
  .slick-dots {
    bottom: -40px;
    opacity: 0;
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex !important;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0;
  }

  .slick-dots li {
    width: auto;
    height: auto;
    margin: 0;
  }

  .slick-dots li button {
    width: 40px;
    height: 4px;
    padding: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slick-dots li button:before {
    display: none;
  }

  .slick-dots li.slick-active button {
    background: rgba(255, 255, 255, 0.8);
    width: 60px;
  }

  /* Кнопки навигации */
  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    opacity: 0;
    z-index: 10;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    background: linear-gradient(116.49deg, #17013E 0%, rgb(72, 0, 121) 100%);
    border-radius: 25px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(131, 0, 218, 0.2);
    transform: translateZ(0) scale(0.95);
    top: 50%;
    margin-top: -25px;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background: linear-gradient(116.49deg, #8300DA 0%, #17013E 100%);
    transform: translateZ(0) scale(1);
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 1;
    color: #E3D6FF;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slick-prev {
    left: 20px;
  }

  .slick-next {
    right: 20px;
  }

  /* Показ элементов управления */
  .reviews-container:hover .slick-dots,
  .reviews-container:hover .slick-prev,
  .reviews-container:hover .slick-next {
    opacity: 1;
  }

  /* Анимации карточек */
  .group {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .reviews-container:not(:hover) .group:hover {
    transform: translateY(-5px);
  }

  .group:hover .bg-[linear-gradient(116.49deg,#17013E_0%,#8300DA_100%)] {
    box-shadow: 0 8px 30px rgba(131, 0, 218, 0.3);
  }

  .group:hover .opacity-20 {
    opacity: 0.3;
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .group:hover .ring-purple-500\\/30 {
    --tw-ring-opacity: 0.5;
    transition: --tw-ring-opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Дополнительные стили для плавности */
  .slick-slide,
  .slick-slide > div,
  .group,
  .group * {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.6s;
  }

  @media (max-width: 768px) {
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`;