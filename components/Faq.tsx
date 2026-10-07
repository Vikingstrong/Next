'use client'

import { useState } from 'react'

const faqItems = [
  { q: 'Сколько это стоит?', a: 'Стоимость зависит от объема работ и количества сотрудников. Оставьте заявку для расчета.' },
  { q: 'Можно ли подключить 1С?', a: 'Да, поддерживается интеграция с популярными версиями 1С.' },
  { q: 'А если сотрудники будут сопротивляться новой системе?', a: 'Мы проводим обучение для персонала и показываем, как CRM облегчает ежедневную работу.' },
  { q: 'Какая CRM лучше?', a: 'Всё индивидуально. Мы подберем решение конкретно под ваш бизнес.' },
  { q: 'Смогут ли менеджеры скачать базу?', a: 'Нет, вы можете гибко настроить права доступа и запретить экспорт данных.' },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Частые вопросы</h2>

        <div className="space-y-3">
          {faqItems.map((item, idx) => (
            <div key={idx} className="border-b pb-3">
              <button 
                onClick={() => toggle(idx)} 
                className="w-full text-left font-medium flex justify-between items-center py-2 hover:text-blue-600 transition"
              >
                <span>{item.q}</span>
                <span className="text-xl">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <p className="text-sm text-gray-600 mt-2 pl-2">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}