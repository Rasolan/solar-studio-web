'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { FreeServiceCardProps } from '@/types/services'

export const FreeServiceCard: FC<FreeServiceCardProps> = ({
  title,
  description,
  image,
  downloads,
  onDownload
}) => {
  return (
    <div className="group relative w-full max-w-[357px] h-[416px] mx-auto">
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-[#2ECC71] px-3 py-1 rounded-full">
          <span className="text-white text-sm font-medium">Бесплатно</span>
        </div>
      </div>
      
      <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#2ECC71] to-[#27AE60]">
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 h-full p-6 flex flex-col">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="mt-2 text-white/80">{description}</p>
          </div>
          
          <div className="relative w-full h-48 mb-6">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
          
          <Button
            onClick={onDownload}
            className="w-full bg-white hover:bg-white/90 text-[#2ECC71]"
          >
            Скачать ({downloads})
          </Button>
        </div>
      </div>
    </div>
  )
} 