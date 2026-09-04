# VR Multimarcas - Landing Page

🚀 **Projeto Next.js moderno e otimizado para revenda de motos Shineray**

## ✨ Features

- ✅ **Next.js 14** com App Router
- ✅ **TypeScript** para type-safety
- ✅ **ShadCN UI** componentes prontos
- ✅ **Framer Motion** animações suaves
- ✅ **Tailwind CSS** styling
- ✅ **Formulário Resend** integrado
- ✅ **SEO otimizado** (metadata, schema.org)
- ✅ **Responsivo** mobile-first
- ✅ **Dark mode** pronto
- ✅ **WhatsApp flutuante** integrado

## 📦 Instalação

```bash
# Clone ou extraia o projeto
cd vr-multimarcas-nextjs

# Instale as dependências
npm install

# ou
yarn install
```

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5548998146981
RESEND_API_KEY=sua_chave_resend_aqui
NEXT_PUBLIC_SITE_URL=https://fermoto177vrmultimarcas.net.br
```

## 🚀 Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Estrutura do Projeto

```
vr-multimarcas-nextjs/
├── app/
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página inicial
│   ├── globals.css          # Estilos globais
│   └── api/
│       └── contact/
│           └── route.ts     # API para formulário
├── components/
│   ├── navbar.tsx           # Menu de navegação
│   ├── footer.tsx           # Rodapé
│   ├── floating-whatsapp.tsx# WhatsApp flutuante
│   ├── ui/                  # Componentes ShadCN
│   └── sections/            # Seções da página
│       ├── hero.tsx
│       ├── motorcycles.tsx
│       ├── location.tsx
│       └── cta.tsx
├── lib/
│   └── utils.ts             # Utilitários
├── public/                  # Assets estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## 📝 Seções Principais

### 1. **Hero Section**
- Headline atraente
- CTAs principais
- Animações de entrada
- Responsivo

### 2. **Motorcycles Section**
- Carrossel de motos
- Cards com especificações
- Modal com ficha técnica
- Links para WhatsApp

### 3. **Location Section**
- Endereço completo
- Mapa integrado
- Horários de funcionamento
- CTA para agendar visita

### 4. **CTA Section**
- Chamada para ação
- Formulário de contato com Resend
- Validação com Zod

## 🔌 Integrações

### Resend (E-mail)
- Configure sua chave API no `.env.local`
- Formulário de contato integrado
- E-mails automatizados

### WhatsApp
- Números configuráveis via env
- Links diretos pré-preenchidos
- Botão flutuante

## 🎨 Customização

### Cores
Edite as cores em `tailwind.config.js` e `app/globals.css`:
- Primary: `#FF6B35` (Laranja)
- Secondary: `#004E89` (Azul)
- Customize conforme sua marca

### Conteúdo
- Motos: Edite `data/motorcycles.ts`
- Textos: Altere os componentes em `components/sections/`
- Imagens: Adicione em `public/`

### Fontes
Customize em `app/layout.tsx`:
```typescript
const inter = Inter({ subsets: ['latin'] })
```

## 📱 Responsividade

- Mobile: 375px+
- Tablet: 768px+
- Desktop: 1024px+
- Large: 1280px+

## 🔍 SEO

- Meta tags otimizadas
- Schema.org structured data
- Open Graph (redes sociais)
- Sitemap automático
- Robots.txt configurado

## 🚀 Deploy na Vercel

```bash
# 1. Faça push para GitHub
git push origin main

# 2. Conecte no Vercel
# Acesse vercel.com e importe seu repositório

# 3. Configure variáveis de ambiente
# RESEND_API_KEY
# NEXT_PUBLIC_WHATSAPP_NUMBER
# NEXT_PUBLIC_SITE_URL

# Pronto! Deploy automático ✨
```

## 📊 Performance

- Lighthouse Score: 90+
- Core Web Vitals otimizados
- Imagens otimizadas
- CSS/JS minificados
- Zero layout shifts

## 📄 Licença

Propriedade de VR Multimarcas © 2024

## 🤝 Suporte

Para dúvidas, entre em contato via WhatsApp: https://wa.me/5548998146981

---

**Desenvolvido com ❤️ para VR Multimarcas**
