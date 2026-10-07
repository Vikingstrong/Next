import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 text-4xl font-extrabold shadow-inner">
        404
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Страница не найдена
      </h1>

      <p className="text-gray-600 max-w-md mb-8 text-base md:text-lg">
        Похоже, эта сделка сорвалась или страница была перемещена в другой раздел нашей CRM.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link 
          href="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition shadow-sm"
        >
          Вернуться на главную
        </Link>
        
        <Link 
          href="/#contact" 
          className="border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 font-medium px-6 py-3 rounded-md transition"
        >
          Связаться с нами
        </Link>
      </div>

      <div className="mt-12 text-xs text-gray-400">
        ИТ-КОМФОРТ — Автоматизация и внедрение CRM
      </div>
    </div>
  )
}