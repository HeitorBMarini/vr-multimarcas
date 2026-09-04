'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motorcycles } from '@/data/motorcycles'
import { MessageCircle, Zap } from 'lucide-react'

export function MotorcyclesSection() {
  const [selectedMoto, setSelectedMoto] = useState(motorcycles[0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
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
            Nossas Motos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Catálogo completo de motos Shineray 0km com as melhores
            especificações e preços do mercado
          </p>
        </motion.div>

        {/* Motorcycles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {motorcycles.map((moto) => (
            <motion.div
              key={moto.id}
              variants={itemVariants}
              onClick={() => setSelectedMoto(moto)}
              className={`group cursor-pointer p-6 rounded-xl border transition-all duration-300 ${
                selectedMoto.id === moto.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary hover:bg-primary/5'
              }`}
            >
              {/* Moto Icon */}
              <div className="mb-4 h-40 flex items-center justify-center bg-secondary/20 rounded-lg group-hover:bg-secondary/40 transition-colors">
                <motion.div
                  animate={{
                    rotate: selectedMoto.id === moto.id ? [0, 5, -5, 0] : 0,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl"
                >
                  🏍️
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{moto.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{moto.model}</p>

              {/* Price */}
              <div className="text-primary font-bold text-lg mb-4">
                {moto.price}
              </div>

              {/* Quick Specs */}
              <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Motor:</span>
                  <span className="font-medium text-foreground">
                    {moto.specs.engine}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Potência:</span>
                  <span className="font-medium text-foreground">
                    {moto.specs.power}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                size="sm"
                className="w-full"
                asChild
              >
                <a
                  href={`https://wa.me/5548998146981?text=Oi! Gostaria de saber mais sobre a ${moto.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Consultar
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Selected Motorcycle Details */}
        {selectedMoto && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-secondary/30 rounded-2xl p-8 border border-border"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Image area */}
              <div className="flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-9xl"
                >
                  🏍️
                </motion.div>
              </div>

              {/* Right - Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{selectedMoto.name}</h3>
                  <p className="text-muted-foreground">{selectedMoto.model}</p>
                </div>

                <p className="text-lg text-muted-foreground">
                  {selectedMoto.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-background/50 p-4 rounded-lg border border-border"
                  >
                    <p className="text-sm text-muted-foreground mb-1">Motor</p>
                    <p className="font-bold">{selectedMoto.specs.engine}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-background/50 p-4 rounded-lg border border-border"
                  >
                    <p className="text-sm text-muted-foreground mb-1">Potência</p>
                    <p className="font-bold">{selectedMoto.specs.power}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-background/50 p-4 rounded-lg border border-border"
                  >
                    <p className="text-sm text-muted-foreground mb-1">
                      Transmissão
                    </p>
                    <p className="font-bold">{selectedMoto.specs.transmission}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-background/50 p-4 rounded-lg border border-border"
                  >
                    <p className="text-sm text-muted-foreground mb-1">
                      Consumo
                    </p>
                    <p className="font-bold">
                      {selectedMoto.specs.fuelConsumption}
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-background/50 p-4 rounded-lg border border-border"
                  >
                    <p className="text-sm text-muted-foreground mb-1">
                      Velocidade
                    </p>
                    <p className="font-bold">{selectedMoto.specs.maxSpeed}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="bg-background/50 p-4 rounded-lg border border-border"
                  >
                    <p className="text-sm text-muted-foreground mb-1">Preço</p>
                    <p className="font-bold text-primary">
                      {selectedMoto.price}
                    </p>
                  </motion.div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button size="lg" className="flex-1">
                    <Zap className="w-4 h-4 mr-2" />
                    Financiar
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={`https://wa.me/5548998146981?text=Oi! Gostaria de agendar um test drive da ${selectedMoto.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Test Drive
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
