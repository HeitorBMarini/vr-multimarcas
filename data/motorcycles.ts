export interface SpecItem {
  label: string
  value: string
}

export interface Motorcycle {
  id: string
  name: string
  category: string
  price: string
  motorizacao: SpecItem[]
  estrutura: SpecItem[]
}

export const motorcycles: Motorcycle[] = [
  {
    id: 'urban-150-efi',
    name: 'URBAN 150 EFI',
    category: 'Scooter | Injeção Eletrônica',
    price: 'Consulte',
    motorizacao: [
      { label: 'Cilindrada', value: '149 cc (Injeção Eletrônica)' },
      { label: 'Potência Máx.', value: '12,9 cv / 8500 RPM' },
      { label: 'Torque Máx.', value: '13 Nm / 5000 RPM' },
      { label: 'Câmbio', value: 'Automático (CVT)' },
    ],
    estrutura: [
      { label: 'Freios (D/T)', value: 'Disco ABS / Disco ABS' },
      { label: 'Tanque', value: '13,5 L' },
      { label: 'Peso Seco', value: '145 kg' },
    ],
  },
  {
    id: 'shi-175',
    name: 'SHI 175',
    category: 'Trail | Aventura e Dia a Dia',
    price: 'Consulte',
    motorizacao: [
      { label: 'Cilindrada', value: '175 cc' },
      { label: 'Tipo', value: 'Monocilíndrico, 4T, 2V, OHC' },
      { label: 'Câmbio', value: '5 Marchas' },
      { label: 'Partida', value: 'Elétrica e Pedal' },
    ],
    estrutura: [
      { label: 'Freios (D/T)', value: 'Disco CBS / Disco CBS' },
      { label: 'Suspensão Diant.', value: 'Garfo Telescópico' },
      { label: 'Suspensão Tras.', value: 'Monoshock' },
    ],
  },
  {
    id: 'jef-150s',
    name: 'JEF 150S',
    category: 'Street | Painel Digital',
    price: 'Consulte',
    motorizacao: [
      { label: 'Cilindrada', value: '149 cc' },
      { label: 'Potência Máx.', value: '10,3 CV / 7500 RPM' },
      { label: 'Torque Máx.', value: '14 Nm / 6000 RPM' },
      { label: 'Câmbio', value: '5 Marchas' },
    ],
    estrutura: [
      { label: 'Freios (D/T)', value: 'Disco / Tambor' },
      { label: 'Tanque', value: '12 L' },
      { label: 'Peso', value: '121 kg' },
    ],
  },
  {
    id: 'jet-50s',
    name: 'JET 50S',
    category: 'CUB | Super Econômica',
    price: 'Consulte',
    motorizacao: [
      { label: 'Cilindrada', value: '49 cc' },
      { label: 'Potência Máx.', value: '2,7 CV / 8000 RPM' },
      { label: 'Câmbio', value: '4 Marchas' },
      { label: 'Embreagem', value: 'Semi Automática' },
    ],
    estrutura: [
      { label: 'Freios (D/T)', value: 'Disco / Tambor' },
      { label: 'Tanque', value: '3 L' },
      { label: 'Peso', value: '106 kg' },
    ],
  },
  {
    id: 'jef-150s-efi',
    name: 'JEF 150S EFI',
    category: 'Street | Injeção Eletrônica',
    price: 'Consulte',
    motorizacao: [
      { label: 'Cilindrada', value: '149 cc (Injeção Eletrônica)' },
      { label: 'Potência Máx.', value: '10,3 CV / 7500 RPM' },
      { label: 'Torque Máx.', value: '14 Nm / 6000 RPM' },
      { label: 'Câmbio', value: '5 Marchas' },
    ],
    estrutura: [
      { label: 'Freios (D/T)', value: 'Disco / Tambor' },
      { label: 'Tanque', value: '12 L' },
      { label: 'Peso', value: '121 kg' },
    ],
  },
  {
    id: 'rio-125-efi',
    name: 'RIO 125 EFI',
    category: 'CUB | Design Clássico',
    price: 'Consulte',
    motorizacao: [
      { label: 'Cilindrada', value: '123.6 cc (Injeção Eletrônica)' },
      { label: 'Câmbio', value: '4 Marchas' },
      { label: 'Partida', value: 'Elétrica / Pedal' },
      { label: 'Embreagem', value: 'Semi Automática' },
    ],
    estrutura: [
      { label: 'Freios (D/T)', value: 'Disco CBS / Tambor' },
      { label: 'Rodas', value: 'Liga Leve' },
    ],
  },
  {
    id: 'shi-175s-efi',
    name: 'SHI 175S EFI',
    category: 'Trail | Injeção Eletrônica',
    price: 'Consulte',
    motorizacao: [
      { label: 'Cilindrada', value: '175 cc (Injeção Eletrônica)' },
      { label: 'Tipo', value: 'Monocilíndrico, 4T, 2V, OHC' },
      { label: 'Câmbio', value: '5 Marchas' },
    ],
    estrutura: [
      { label: 'Freios (D/T)', value: 'Disco CBS / Disco CBS' },
      { label: 'Suspensão Diant.', value: 'Garfo Telescópico invertido' },
    ],
  },
  {
    id: 'free-150-efi',
    name: 'FREE 150 EFI',
    category: 'Scooter | Agilidade Urbana',
    price: 'Consulte',
    motorizacao: [
      { label: 'Cilindrada', value: '149 cc (Injeção Eletrônica)' },
      { label: 'Câmbio', value: 'Automático (CVT)' },
      { label: 'Partida', value: 'Elétrica e Pedal' },
    ],
    estrutura: [
      { label: 'Freios (D/T)', value: 'Disco CBS / Tambor' },
      { label: 'Painel', value: '100% Digital' },
    ],
  },
  {
    id: 'jet-125ss-efi',
    name: 'JET 125SS EFI',
    category: 'CUB | Potência e Economia',
    price: 'Consulte',
    motorizacao: [
      { label: 'Cilindrada', value: '125 cc (Injeção Eletrônica)' },
      { label: 'Potência Máx.', value: '7,2 cv / 7500 RPM' },
      { label: 'Câmbio', value: '4 Marchas' },
      { label: 'Embreagem', value: 'Semi Automática' },
    ],
    estrutura: [
      { label: 'Freios (D/T)', value: 'Disco / Tambor' },
      { label: 'Painel', value: 'Digital' },
    ],
  },
  {
    id: 'new-jet',
    name: 'NEW JET',
    category: 'CUB | O Novo Clássico',
    price: 'Consulte',
    motorizacao: [
      { label: 'Cilindrada', value: '125 cc / 50 cc' },
      { label: 'Câmbio', value: '4 Marchas' },
      { label: 'Embreagem', value: 'Semi Automática' },
      { label: 'Partida', value: 'Elétrica e Pedal' },
    ],
    estrutura: [
      { label: 'Freios (D/T)', value: 'Disco / Tambor' },
      { label: 'Painel', value: 'Digital Reformulado' },
    ],
  },
]
