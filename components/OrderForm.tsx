export default function OrderForm() {
  return (
    <section id="contact" className="py-16 bg-white text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Заказать настройку CRM</h2>
        <p className="text-gray-600 mb-6">
          Оставьте заявку и мы перезвоним Вам в течение 10 минут
        </p>

        <form className="flex flex-col gap-3">
          <input 
            type="text" 
            placeholder="Имя" 
            className="border p-3 rounded-md outline-none focus:border-blue-500"
          />
          <input 
            type="tel" 
            placeholder="Телефон" 
            className="border p-3 rounded-md outline-none focus:border-blue-500"
          />
          <button 
            type="button" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
          >
            Заказать консультацию
          </button>
        </form>
        <span className="text-xs text-gray-400 mt-3 block">
          Нажимая кнопку, вы даете согласие на обработку персональных данных
        </span>
      </div>
    </section>
  )
}