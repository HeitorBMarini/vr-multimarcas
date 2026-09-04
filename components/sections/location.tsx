'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Navigation,
} from 'lucide-react'

export function LocationSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Servidão Três Marias, 715 - Sala 03',
      subContent: 'Ingleses, Florianópolis - SC',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(48) 99814-6981',
      link: 'https://wa.me/5548998146981',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@vrmultimarcas.com.br',
      link: 'mailto:contato@vrmultimarcas.com.br',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg - Sex: 9h às 18h',
      subContent: 'Sab: 9h às 13h',
    },
  ]

  return (
    <section
      id="localizacao"
      className="py-20 px-4 bg-secondary/10"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Nos Encontre
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visite nossa concessionária e conheça nossas motos Shineray
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border h-96 lg:h-full min-h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.6896382648457!2d-48.276844!3d-27.449356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95219f7c5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sServidão%20Três%20Marias%2C%20715%20-%20Sala%2003!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-xl border border-border bg-background/50 hover:bg-background hover:border-primary transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.content}</p>
                    )}
                    {info.subContent && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {info.subContent}
                      </p>
                    )}
                  </div>
                </motion.div>
              )
            })}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 space-y-4"
            >
              <Button size="lg" className="w-full group">
                <Navigation className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Como Chegar
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                asChild
              >
                <a
                  href="https://wa.me/5548998146981?text=Oi! Gostaria de agendar uma visita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Visita
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
