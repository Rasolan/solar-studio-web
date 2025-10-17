/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PORT: process.env.PORT
  },
  // Настройка порта для dev сервера
  async rewrites() {
    return []
  },
  // Использование порта из .env
  serverOptions: {
    port: process.env.PORT || 3000
  },
  // Конфигурация для GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Базовый путь для GitHub Pages (замените на ваш username)
  basePath: process.env.NODE_ENV === 'production' ? '/solar-studio-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/solar-studio-web/' : ''
}

export default nextConfig
