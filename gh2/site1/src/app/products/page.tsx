'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProductsPage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // Improved placeholder product data with better images
  const products = [
    {
      id: 1,
      name: 'محصول اول',
      description: 'توضیحات محصول اول با کیفیت و قیمت مناسب',
      price: '1,500,000 تومان',
      image: 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=محصول+1',
      category: 'الکترونیک',
    },
    {
      id: 2,
      name: 'محصول دوم',
      description: 'توضیحات محصول دوم با کیفیت و قیمت مناسب',
      price: '2,300,000 تومان',
      image: 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=محصول+2',
      category: 'پوشاک',
    },
    {
      id: 3,
      name: 'محصول سوم',
      description: 'توضیحات محصول سوم با کیفیت و قیمت مناسب',
      price: '850,000 تومان',
      image: 'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=محصول+3',
      category: 'خانه',
    },
    {
      id: 4,
      name: 'محصول چهارم',
      description: 'توضیحات محصول چهارم با کیفیت و قیمت مناسب',
      price: '1,900,000 تومان',
      image: 'https://via.placeholder.com/600x400/EF4444/FFFFFF?text=محصول+4',
      category: 'الکترونیک',
    },
    {
      id: 5,
      name: 'محصول پنجم',
      description: 'توضیحات محصول پنجم با کیفیت و قیمت مناسب',
      price: '750,000 تومان',
      image: 'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=محصول+5',
      category: 'زیبایی',
    },
    {
      id: 6,
      name: 'محصول ششم',
      description: 'توضیحات محصول ششم با کیفیت و قیمت مناسب',
      price: '3,200,000 تومان',
      image: 'https://via.placeholder.com/600x400/EC4899/FFFFFF?text=محصول+6',
      category: 'پوشاک',
    },
  ]

  // Filter buttons state
  const [activeFilter, setActiveFilter] = useState('همه');
  const categories = ['همه', 'الکترونیک', 'پوشاک', 'خانه', 'زیبایی'];

  // Filter products based on active category
  const filteredProducts = activeFilter === 'همه' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">محصولات ما</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            مجموعه‌ای از بهترین محصولات با کیفیت بالا و قیمت مناسب برای شما
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                hoveredProduct === product.id ? 'shadow-xl transform -translate-y-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {product.price}
                  </span>
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-all hover:shadow-md flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    افزودن به سبد
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
} 