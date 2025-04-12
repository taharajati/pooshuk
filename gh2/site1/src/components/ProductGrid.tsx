'use client'

import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'لپ‌تاپ گیمینگ',
    price: 45000000,
    oldPrice: 50000000,
    image: 'https://placehold.co/400x300?text=Laptop',
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: 'هدفون بی‌سیم',
    price: 2500000,
    oldPrice: 3000000,
    image: 'https://placehold.co/400x300?text=Headphones',
    isNew: false,
    isSale: true,
  },
  {
    id: 3,
    name: 'موس گیمینگ',
    price: 1500000,
    oldPrice: null,
    image: 'https://placehold.co/400x300?text=Mouse',
    isNew: true,
    isSale: false,
  },
  {
    id: 4,
    name: 'کیبورد مکانیکال',
    price: 3500000,
    oldPrice: 4000000,
    image: 'https://placehold.co/400x300?text=Keyboard',
    isNew: false,
    isSale: true,
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat('fa-IR').format(price) + ' تومان'
}

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="relative">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="product-image"
            />
            {product.isNew && (
              <span className="badge-new">جدید</span>
            )}
            {product.isSale && (
              <span className="badge-sale">تخفیف</span>
            )}
          </div>
          <div className="p-4">
            <h4 className="text-lg font-bold mb-2">{product.name}</h4>
            <div className="flex items-center gap-2">
              <span className="price">{formatPrice(product.price)}</span>
              {product.oldPrice && (
                <>
                  <span className="old-price">{formatPrice(product.oldPrice)}</span>
                  <span className="discount">
                    {Math.round((1 - product.price / product.oldPrice) * 100)}٪
                  </span>
                </>
              )}
            </div>
            <button className="btn btn-primary w-full mt-4">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      ))}
    </div>
  )
} 