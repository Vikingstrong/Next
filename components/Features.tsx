
import Image from 'next/image'
import img2 from '../app/img/img2.svg'
import img3 from '../app/img/img3.png'
import img4 from '../app/img/img4.png'


export default function Features() {
  return (
    <section id="features" className="py-8">
      <div className="bg-blue-200 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Объединение всех каналов связи в одной системе
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Подключите мессенджеры, соцсети, сайт и почту, чтобы общаться с клиентами в одном окне.
          </p>
          <div className="flex justify-center">
            <img 
              src={img2.src}
              alt="Каналы связи" 
              className="max-w-full rounded-md shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="bg-emerald-200 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Сотрудник уходит, данные остаются
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Вся история переписки и звонков по заказам сохраняется в CRM.
          </p>
          <div className="flex justify-center">
            <img 
              src={img3.src} 
              alt="CRM Интерфейс" 
              className="max-w-full rounded-md shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="bg-amber-100 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Принимайте решения на основе данных
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Отчеты по продажам, по менеджерам, по клиентам.
          </p>
          <div className="flex justify-center">
            <img 
              src={img4.src}
              alt="Отчеты" 
              className="max-w-full rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}