'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motorcycles as allMotorcycles, type Motorcycle } from '@/data/motorcycles'
import { ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react'

// Só exibimos motos com foto real cadastrada
const motorcycles = allMotorcycles.filter((moto): moto is Motorcycle & { image: string } =>
  Boolean(moto.image)
)

export function MotorcyclesSection() {
  const [openMoto, setOpenMoto] = useState<(typeof motorcycles)[number] | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -320 : 320,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (!openMoto) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMoto(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [openMoto])

  return (
    <section
      id="motos"
      className="py-20 px-4 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Motos <span className="text-primary">Shineray</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Arraste para o lado e clique na foto para ver a ficha técnica
          </p>
        </motion.div>

        {/* Motorcycles Carousel */}
        <div className="relative">
          <button
            type="button"
            aria-label="Ver motos anteriores"
            onClick={() => scrollByCard('left')}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-gold"
          >
            {motorcycles.map((moto, index) => (
              <motion.div
                key={moto.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
                className="group p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 flex-shrink-0 snap-start w-72 sm:w-80"
              >
                {/* Moto Image — click to open popup */}
                <button
                  type="button"
                  onClick={() => setOpenMoto(moto)}
                  aria-label={`Ver ficha técnica da ${moto.name}`}
                  className="mb-4 h-40 w-full flex items-center justify-center bg-white rounded-lg overflow-hidden relative cursor-zoom-in"
                >
                  <Image
                    src={moto.image}
                    alt={moto.name}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    sizes="320px"
                  />
                </button>

                {/* Content */}
                <h3 className="text-xl font-bold mb-1">{moto.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{moto.category}</p>

                {/* Price */}
                <div className="text-primary font-bold text-lg mb-4">
                  {moto.price}
                </div>

                {/* Quick Specs */}
                <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                  {moto.motorizacao.slice(0, 2).map((spec) => (
                    <div key={spec.label} className="flex justify-between gap-2">
                      <span>{spec.label}:</span>
                      <span className="font-medium text-foreground text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => setOpenMoto(moto)}
                >
                  Ver Ficha Técnica
                </Button>
              </motion.div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Ver mais motos"
            onClick={() => scrollByCard('right')}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Catalog CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a
              href="https://wa.me/5548998146981?text=Quero%20ver%20o%20cat%C3%A1logo%20completo!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar com Consultor
            </a>
          </Button>
        </div>
      </div>

      {/* Popup with full spec sheet */}
      <AnimatePresence>
        {openMoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpenMoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl p-6 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setOpenMoto(null)}
                aria-label="Fechar"
                className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative min-h-[220px] sm:min-h-[280px] bg-white rounded-xl overflow-hidden">
                  <Image
                    src={openMoto.image}
                    alt={openMoto.name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-3xl font-bold mb-1">{openMoto.name}</h3>
                    <p className="text-muted-foreground">{openMoto.category}</p>
                  </div>

                  <p className="text-2xl font-bold text-primary">{openMoto.price}</p>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-primary border-b border-border pb-2 mb-3">
                      Motorização
                    </h4>
                    <ul className="space-y-2">
                      {openMoto.motorizacao.map((spec) => (
                        <li
                          key={spec.label}
                          className="flex justify-between text-sm border-b border-border/50 pb-2"
                        >
                          <span className="text-muted-foreground">{spec.label}</span>
                          <span className="font-medium text-right">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-primary border-b border-border pb-2 mb-3">
                      Estrutura
                    </h4>
                    <ul className="space-y-2">
                      {openMoto.estrutura.map((spec) => (
                        <li
                          key={spec.label}
                          className="flex justify-between text-sm border-b border-border/50 pb-2"
                        >
                          <span className="text-muted-foreground">{spec.label}</span>
                          <span className="font-medium text-right">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-[#25d366] text-white hover:bg-[#20b858]"
                    asChild
                  >
                    <a
                      href={`https://wa.me/5548998146981?text=${encodeURIComponent(`Olá! Quero saber mais sobre a ${openMoto.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Falar com Vendedor
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
