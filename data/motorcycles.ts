export interface Motorcycle {
  id: string
  name: string
  model: string
  year: number
  price: string
  image: string
  specs: {
    engine: string
    power: string
    transmission: string
    fuelConsumption: string
    maxSpeed: string
  }
  description: string
}

export const motorcycles: Motorcycle[] = [
  {
    id: '1',
    name: 'Shineray XY 150',
    model: 'XY150-10C',
    year: 2024,
    price: 'A partir de R$ 5.990',
    image: '/motorcycles/xy150.jpg',
    specs: {
      engine: '150cc 4T',
      power: '12.5 cv',
      transmission: 'Manual',
      fuelConsumption: '60 km/l',
      maxSpeed: '120 km/h',
    },
    description: 'Moto versátil e econômica, perfeita para o dia a dia em Florianópolis.',
  },
  {
    id: '2',
    name: 'Shineray XY 125',
    model: 'XY125-10C',
    year: 2024,
    price: 'A partir de R$ 4.990',
    image: '/motorcycles/xy125.jpg',
    specs: {
      engine: '125cc 4T',
      power: '11.5 cv',
      transmission: 'Manual',
      fuelConsumption: '65 km/l',
      maxSpeed: '115 km/h',
    },
    description: 'Entrada perfeita no mundo das motos, com estilo e confiabilidade Shineray.',
  },
  {
    id: '3',
    name: 'Shineray XY 200',
    model: 'XY200-GY',
    year: 2024,
    price: 'A partir de R$ 7.990',
    image: '/motorcycles/xy200.jpg',
    specs: {
      engine: '200cc 4T',
      power: '15 cv',
      transmission: 'Manual',
      fuelConsumption: '45 km/l',
      maxSpeed: '130 km/h',
    },
    description: 'Maior cilindrada, maior performance. Ideal para quem quer mais potência.',
  },
  {
    id: '4',
    name: 'Shineray XY 250',
    model: 'XY250-10D',
    year: 2024,
    price: 'A partir de R$ 9.990',
    image: '/motorcycles/xy250.jpg',
    specs: {
      engine: '250cc 4T',
      power: '20 cv',
      transmission: 'Manual',
      fuelConsumption: '40 km/l',
      maxSpeed: '140 km/h',
    },
    description: 'Performance e conforto combinados. A escolha dos motoqueiros mais exigentes.',
  },
]
