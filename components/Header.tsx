import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b bg-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="font-bold text-xl tracking-wide flex items-center gap-2">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">CRM</span>
          ИТ-КОМФОРТ
        </div>
        
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="#" className="hover:text-black">Возможности</Link>
          <Link href="#" className="hover:text-black">Отзывы</Link>
          <Link href="#" className="hover:text-black">Вопросы</Link>
          <Link href="#" className="hover:text-black">Контакты</Link>
        </nav>

        <a href="tel:+78000000000" className="font-semibold text-sm hover:underline">
          +7 (800) 000-00-00
        </a>
      </div>
    </header>
  )
}