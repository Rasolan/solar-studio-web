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
  }
}

export default nextConfig
