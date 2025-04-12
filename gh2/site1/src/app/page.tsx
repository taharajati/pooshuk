'use client'

import Link from 'next/link'
import { ProductCard } from '@/components/ProductCard'
import { AboutUs } from '@/components/AboutUs'
import { ContactUs } from '@/components/ContactUs'
import { BackToTop } from '@/components/BackToTop'

const products = [
  {
    id: 1,
    name: 'لپ‌تاپ اپل مک‌بوک پرو',
    price: 45000000,
    oldPrice: 50000000,
    image: 'https://placehold.co/400x300?text=Laptop',
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: 'هدفون بی‌سیم سونی',
    price: 2500000,
    oldPrice: 3000000,
    image: 'https://placehold.co/400x300?text=Headphones',
    isSale: true
  },
  {
    id: 3,
    name: 'ماوس گیمینگ ریزر',
    price: 1500000,
    image: 'https://placehold.co/400x300?text=Mouse',
    isNew: true
  },
  {
    id: 4,
    name: 'کیبورد مکانیکال',
    price: 2000000,
    image: 'https://placehold.co/400x300?text=Keyboard'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              به فروشگاه آنلاین ما خوش آمدید
            </h1>
            <p className="text-xl mb-8">
              بهترین محصولات با بهترین قیمت‌ها
            </p>
            <Link 
              href="/products"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              مشاهده محصولات
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">محصولات ویژه</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <AboutUs />

      {/* Contact Us */}
      <ContactUs />

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">درباره ما</h3>
              <p className="text-gray-600 dark:text-gray-300">
                فروشگاه آنلاین ما با هدف ارائه بهترین محصولات و خدمات به مشتریان عزیز راه‌اندازی شده است.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
                <li>ایمیل: info@shop.com</li>
                <li>آدرس: تهران، خیابان ولیعصر</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">لینک‌های مفید</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                    حریم خصوصی
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
            <p>© 2024 فروشگاه آنلاین. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>

      <BackToTop />
    </main>
  )
}
