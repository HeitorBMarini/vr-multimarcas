'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motorcycles as allMotorcycles, type Motorcycle } from '@/data/motorcycles'
import { WHATSAPP_1, whatsappLink } from '@/lib/contact'
import { ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react'

// Só exibimos motos com foto real cadastrada
const motorcycles = allMotorcycles.filter((moto): moto is Motorcycle & { image: string } =>
  Boolean(moto.image)
)

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
}

export function MotorcyclesSection() {
  const [openMoto, setOpenMoto] = useState<(typeof motorcycles)[number] | null>(null)
  const [[activeIndex, direction], setActive] = useState<[number, number]>([0, 0])
  const [isPaused, setIsPaused] = useState(false)

  const active = motorcycles[activeIndex]

  const goTo = (index: number) => {
    const wrapped = (index + motorcycles.length) % motorcycles.length
    setActive([wrapped, wrapped > activeIndex ? 1 : -1])
  }

  useEffect(() => {
    if (isPaused || openMoto) return
    const timer = setInterval(() => {
      setActive(([current]) => [(current + 1) % motorcycles.length, 1])
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused, openMoto])

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
            Navegue pelos modelos e clique na foto para ver a ficha técnica
          </p>
        </motion.div>

        {/* Spotlight Carousel */}
        <div
          className="relative mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                {/* Image */}
                <button
                  type="button"
                  onClick={() => setOpenMoto(active)}
                  aria-label={`Ver ficha técnica da ${active.name}`}
                  className="relative h-64 sm:h-80 w-full bg-white rounded-xl overflow-hidden cursor-zoom-in group"
                >
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </button>

                {/* Info */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">
                    {active.category}
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-3">{active.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-6">{active.price}</p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[...active.motorizacao, ...active.estrutura].slice(0, 4).map((spec) => (
                      <div
                        key={spec.label}
                        className="bg-secondary/50 border border-border rounded-lg p-3"
                      >
                        <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                        <p className="text-sm font-semibold">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" onClick={() => setOpenMoto(active)}>
                      Ver Ficha Técnica
                    </Button>
                    <Button
                      className="bg-[#25d366] text-white hover:bg-[#20b858]"
                      asChild
                    >
                      <a
                        href={whatsappLink(WHATSAPP_1.number, `Olá! Quero saber mais sobre a ${active.name}.`)}
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
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            type="button"
            aria-label="Moto anterior"
            onClick={() => goTo(activeIndex - 1)}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Próxima moto"
            onClick={() => goTo(activeIndex + 1)}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto pb-2 justify-center scrollbar-gold">
          {motorcycles.map((moto, index) => (
            <button
              key={moto.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={moto.name}
              className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-white border-2 transition-colors ${
                index === activeIndex ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={moto.image}
                alt={moto.name}
                fill
                className="object-contain p-1"
                sizes="64px"
              />
            </button>
          ))}
        </div>

        {/* Catalog CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a
              href={whatsappLink(WHATSAPP_1.number, 'Quero ver o catálogo completo!')}
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
                      href={whatsappLink(WHATSAPP_1.number, `Olá! Quero saber mais sobre a ${openMoto.name}.`)}
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
