'use client'

import { motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5548998146981'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de mais informações sobre as motos.`

  return (
    <>
      {/* Chat Bubble */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="fixed bottom-8 right-8 z-40"
      >
        {/* Chat Options */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          className={`absolute bottom-20 right-0 mb-2 bg-background border border-border rounded-2xl shadow-lg overflow-hidden ${
            isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          <div className="p-4 space-y-2 min-w-80">
            <h3 className="font-semibold text-sm mb-3">Como podemos ajudar?</h3>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors text-sm cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Informações sobre motos</span>
            </motion.a>

            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=Gostaria de agendar um test drive`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors text-sm cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Agendar test drive</span>
            </motion.a>

            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=Gostaria de saber sobre financiamento`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors text-sm cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Financiamento</span>
            </motion.a>

            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=Tenho uma dúvida`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors text-sm cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Dúvidas gerais</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Main Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6" />
            )}
          </motion.div>

          {/* Notification Badge */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full"
          />
        </motion.button>
      </motion.div>

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30"
        />
      )}
    </>
  )
}
