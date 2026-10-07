import img1 from '../app/img/img1.png'

export default function Hero() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Поможем навести порядок в компании
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Внедрение CRM за 2 недели.<br />Работаем по всей России.
          </p>

          <form className="flex flex-col sm:flex-row gap-2 max-w-md">
            <input 
              type="text" 
              placeholder="Имя или телефон" 
              className="border p-3 rounded-md flex-1 outline-none focus:border-blue-500"
            />
            <button 
              type="button" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition"
            >
              Получить консультацию
            </button>
          </form>
          <span className="text-xs text-gray-400 mt-2 block">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </span>
        </div>

        <div className="flex justify-center">
          <img 
            src={img1.src} 
            alt="Внедрение CRM" 
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}