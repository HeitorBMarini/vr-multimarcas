'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { label: 'Início', href: '#' },
        { label: 'Motos', href: '#motos' },
        { label: 'Localização', href: '#localizacao' },
        { label: 'Contato', href: '#' },
      ],
    },
    {
      title: 'Suporte',
      links: [
        { label: 'FAQ', href: '#' },
        { label: 'Financiamento', href: '#' },
        { label: 'Garantia', href: '#' },
        { label: 'Test Drive', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Política de Privacidade', href: '#' },
        { label: 'Termos de Uso', href: '#' },
        { label: 'Cookies', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
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
              Sua concessionária de confiança em Florianópolis. Motos Shineray
              0km com financiamento facilitado e test drive gratuito.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="https://wa.me/5548998146981"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4" />
                <span>(48) 99814-6981</span>
              </a>
              <a
                href="mailto:contato@vrmultimarcas.com.br"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contato@vrmultimarcas.com.br</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Servidão Três Marias, 715 - Sala 03</p>
                  <p>Florianópolis - SC</p>
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-sm"
          >
            © {currentYear} VR Multimarcas. Todos os direitos reservados.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/20 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
