'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motorcycles } from '@/data/motorcycles'
import { Bike, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'

export function MotorcyclesSection() {
  const [selectedMoto, setSelectedMoto] = useState(motorcycles[0])
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -320 : 320,
      behavior: 'smooth',
    })
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

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
            Arraste para o lado e clique em um modelo para ver a ficha técnica
          </p>
        </motion.div>

        {/* Motorcycles Carousel */}
        <div className="relative mb-12">
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
                onClick={() => setSelectedMoto(moto)}
                className={`group cursor-pointer p-6 rounded-xl border transition-all duration-300 flex-shrink-0 snap-start w-72 sm:w-80 ${
                  selectedMoto.id === moto.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary hover:bg-primary/5'
                }`}
              >
                {/* Moto Image */}
                <div className="mb-4 h-40 flex flex-col items-center justify-center gap-2 rounded-lg overflow-hidden relative bg-white">
                  {moto.image ? (
                    <Image
                      src={moto.image}
                      alt={moto.name}
                      fill
                      className="object-contain p-2"
                      sizes="320px"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-2 w-full h-full bg-secondary">
                      <Bike className="w-10 h-10 text-muted-foreground" strokeWidth={1.5} />
                      <span className="text-xs text-muted-foreground">Foto em breve</span>
                    </div>
                  )}
                </div>

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
                  asChild
                >
                  <a href="#detalhes">Ver Ficha Técnica</a>
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

        {/* Selected Motorcycle Details */}
        {selectedMoto && (
          <motion.div
            id="detalhes"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-border scroll-mt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Image area */}
              <div className="flex items-center justify-center rounded-xl relative min-h-[280px] bg-white">
                {selectedMoto.image ? (
                  <Image
                    src={selectedMoto.image}
                    alt={selectedMoto.name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 w-full h-full bg-secondary rounded-xl">
                    <Bike className="w-16 h-16 text-muted-foreground" strokeWidth={1.5} />
                    <span className="text-sm text-muted-foreground">Foto em breve</span>
                  </div>
                )}
              </div>

              {/* Right - Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{selectedMoto.name}</h3>
                  <p className="text-muted-foreground">{selectedMoto.category}</p>
                </div>

                <p className="text-2xl font-bold text-primary">
                  {selectedMoto.price}
                </p>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-primary border-b border-border pb-2 mb-3">
                    Motorização
                  </h4>
                  <ul className="space-y-2">
                    {selectedMoto.motorizacao.map((spec) => (
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
                    {selectedMoto.estrutura.map((spec) => (
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

                {/* CTA */}
                <div className="pt-4">
                  <Button
                    size="lg"
                    className="w-full bg-[#25d366] text-white hover:bg-[#20b858]"
                    asChild
                  >
                    <a
                      href={`https://wa.me/5548998146981?text=${encodeURIComponent(`Olá! Quero saber mais sobre a ${selectedMoto.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Falar com Vendedor
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

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
    </section>
  )
}
