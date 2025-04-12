'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProductCardProps {
  id: number
  name: string
  price: number
  oldPrice?: number | null
  image: string
  isNew?: boolean
  isSale?: boolean
}

export function ProductCard({ id, name, price, oldPrice, image, isNew, isSale }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان'
  }

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className={`product-image ${isHovered ? 'scale-105' : ''}`}
        />
        {isNew && (
          <span className="badge-new">جدید</span>
        )}
        {isSale && (
          <span className="badge-sale">تخفیف</span>
        )}
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold mb-2">{name}</h4>
        <div className="flex items-center gap-2">
          <span className="price">{formatPrice(price)}</span>
          {oldPrice && (
            <>
              <span className="old-price">{formatPrice(oldPrice)}</span>
              <span className="discount">
                {Math.round((1 - price / oldPrice) * 100)}٪
              </span>
            </>
          )}
        </div>
        <button className="btn btn-primary w-full mt-4">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  )
} 