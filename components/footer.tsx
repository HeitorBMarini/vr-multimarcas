'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import { CONTACT_EMAIL, WHATSAPP_2, WHATSAPP_1, whatsappLink } from '@/lib/contact'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { label: 'Início', href: '#inicio' },
        { label: 'Motos', href: '#motos' },
        { label: 'Localização', href: '#localizacao' },
        { label: 'Contato', href: '#contato' },
      ],
    },
  ]

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold text-primary">VR</div>
              <div className="font-semibold">Multimarcas</div>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sua concessionária de confiança em Santo Amaro, São Paulo. Motos
              Shineray 0km com financiamento facilitado e test drive gratuito.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={whatsappLink(WHATSAPP_1.number)}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4" />
                <span>{WHATSAPP_1.display}</span>
              </a>
              <a
                href={whatsappLink(WHATSAPP_2.number)}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4" />
                <span>{WHATSAPP_2.display}</span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">{CONTACT_EMAIL}</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Av. Arquiteto Carlos Bratke, 1083 - 4</p>
                  <p>Jardim Caravelas, São Paulo - SP</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex items-center justify-center">
          {/* Copyright + Legal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-sm text-center"
          >
            <p>© {currentYear} VR Multimarcas. Todos os direitos reservados.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
