import { Suspense } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Features from '@/components/Features'
import Reviews from '@/components/Reviews'
import Faq from '@/components/Faq'
import OrderForm from '@/components/OrderForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <Suspense fallback={<div className="p-8 text-center">Загрузка секций...</div>}>
        <Hero />
        <Benefits />
        <Features />
        <Reviews />
        <Faq />
        <OrderForm />
      </Suspense>

      <Footer />
    </main>
  )
}