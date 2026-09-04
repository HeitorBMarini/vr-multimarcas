'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WHATSAPP_VENDAS, whatsappLink } from '@/lib/contact'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Motos', href: '#motos' },
    { label: 'Localização', href: '#localizacao' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="min-w-0 flex-1 md:flex-initial flex flex-col leading-tight">
            <span className="font-bold text-lg sm:text-xl md:text-2xl">
              <span className="text-primary">VR</span> Multimarcas
            </span>
            <span className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
              Santo Amaro - SP - Zona Sul
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden gap-8 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden gap-3 md:flex">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href={whatsappLink(WHATSAPP_VENDAS.number)} target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href="#motos">Ver Motos</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex-shrink-0 ml-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 space-y-4 md:hidden"
          >
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                asChild
              >
                <a href={whatsappLink(WHATSAPP_VENDAS.number)} target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
              </Button>
              <Button size="sm" className="w-full" asChild>
                <a href="#motos">Ver Motos</a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
