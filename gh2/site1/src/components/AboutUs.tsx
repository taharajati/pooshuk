'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutUs() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            درباره ما
          </span>
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            فروشگاه آنلاین <span className="text-primary">مورد اعتماد</span> شما
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            فروشگاه آنلاین ما با هدف ارائه بهترین محصولات و خدمات به مشتریان عزیز راه‌اندازی شده است. 
            ما با سال‌ها تجربه در زمینه فروش محصولات متنوع، همواره سعی کرده‌ایم تا با ارائه محصولات باکیفیت 
            و خدمات پس از فروش مناسب، رضایت مشتریان را جلب کنیم.
          </p>
        </motion.div>
        
        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">+1500</div>
            <div className="text-gray-600 dark:text-gray-300">مشتری راضی</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">+200</div>
            <div className="text-gray-600 dark:text-gray-300">محصول متنوع</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">+5</div>
            <div className="text-gray-600 dark:text-gray-300">سال تجربه</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">97%</div>
            <div className="text-gray-600 dark:text-gray-300">رضایت مشتری</div>
          </div>
        </motion.div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">کیفیت برتر</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              تمام محصولات ما با بالاترین استانداردهای کیفیت تولید شده‌اند و دارای گارانتی اصالت و سلامت کالا هستند.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">ارسال سریع و مطمئن</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              سفارشات شما در کمترین زمان ممکن آماده‌سازی و از طریق پست یا پیک در سریع‌ترین زمان ممکن به دست شما می‌رسد.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">پشتیبانی ۲۴ ساعته</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              تیم پشتیبانی ما به صورت ۲۴ ساعته و در تمام روزهای هفته آماده پاسخگویی به سوالات و مشکلات مشتریان عزیز می‌باشد.
            </p>
          </motion.div>
        </div>
        
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">تیم ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-200 dark:bg-gray-700">
                  <div className="aspect-square bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500">
                    {/* Placeholder for actual team images */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-gray-100 transition-all">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-gray-100 transition-all">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-1">
                  {['علی محمدی', 'سارا احمدی', 'محمد علیزاده', 'نیلوفر حسینی'][i-1]}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {['مدیر عامل', 'مدیر فروش', 'کارشناس فنی', 'کارشناس پشتیبانی'][i-1]}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 