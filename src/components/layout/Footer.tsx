import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="border-t border-[#0B0B0B]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-[#B6B6B6]">
            © {new Date().getFullYear()} Solar Studio. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  )
} 