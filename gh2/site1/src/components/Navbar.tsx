'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DarkModeToggle } from './DarkModeToggle'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Check if a link is active
  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false
    return pathname?.startsWith(path)
  }
  
  // Get link class based on active state
  const getLinkClass = (path: string) => {
    const baseClass = "relative px-4 py-2 rounded-md transition-all duration-200"
    const activeClass = "text-primary font-bold"
    const inactiveClass = "text-gray-600 dark:text-gray-300 hover:text-primary"
    
    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`
  }

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-md' : 'bg-white dark:bg-gray-800'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">فروشگاه آنلاین</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { path: '/', label: 'خانه' },
              { path: '/products', label: 'محصولات' },
              { path: '/about', label: 'درباره ما' },
              { path: '/contact', label: 'تماس با ما' }
            ].map((item) => (
              <Link key={item.path} href={item.path} className={getLinkClass(item.path)}>
                {item.label}
                {isActive(item.path) && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <Link 
              href="/cart" 
              className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Dark Mode Toggle */}
            <div className="mx-2">
              <DarkModeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600 dark:text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {[
              { path: '/', label: 'خانه' },
              { path: '/products', label: 'محصولات' },
              { path: '/about', label: 'درباره ما' },
              { path: '/contact', label: 'تماس با ما' }
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-2 px-4 rounded-md ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 