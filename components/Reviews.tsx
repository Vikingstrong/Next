const reviewsData = [
  {
    name: 'Елена Васильева',
    company: 'ООО "Вектор"',
    text: 'После внедрения CRM наша команда стала успевать обрабатывать в два раза больше заявок.',
    avatar: 'https://via.placeholder.com/50?text=EV'
  },
  {
    name: 'Алексей Громов',
    company: 'ИП Громов',
    text: 'Очень удобный интерфейс. Перестали терять клиентов и забывать про повторные звонки.',
    avatar: 'https://via.placeholder.com/50?text=AG'
  },
  {
    name: 'Екатерина Ким',
    company: 'Beauty Shop',
    text: 'Быстро настроили всё под наши задачи. Консультанты всегда на связи и помогают.',
    avatar: 'https://via.placeholder.com/50?text=EK'
  }
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Отзывы</h2>
        <p className="text-gray-500 mb-10">Более 15 000 000 компаний по всему миру используют CRM-системы</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((item, index) => (
            <div key={index} className="border p-6 rounded-xl text-left flex flex-col justify-between shadow-sm">
              <p className="text-gray-700 text-sm mb-4">"{item.text}"</p>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-semibold text-sm">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}