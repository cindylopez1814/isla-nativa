export const categories = [
  { id: 1, emoji: '🌊', label: { es: 'Outdoor',       pt: 'Outdoor'       } },
  { id: 2, emoji: '🧗', label: { es: 'Aventura',      pt: 'Aventura'      } },
  { id: 3, emoji: '🧘', label: { es: 'Wellness',      pt: 'Wellness'      } },
  { id: 4, emoji: '🗺️', label: { es: 'Tours guiados', pt: 'Tours guiados' } },
  { id: 5, emoji: '🍽', label: { es: 'Gastronomía',   pt: 'Gastronomia'   } },
  { id: 6, emoji: '🏛', label: { es: 'Cultura',       pt: 'Cultura'       } },
]

export const experiences = [
  {
    id: 1,
    image: '/src/assets/IMG/image-card01.png',
    badge:       { es: 'Destacado',  pt: 'Destaque'   },
    tag:         { es: 'Outdoor',    pt: 'Outdoor'    },
    title:       { es: 'Surf en Praia da Joaquina',         pt: 'Surf na Praia da Joaquina'          },
    description: { es: '🏄 Guías locales certificados',     pt: '🏄 Guias locais certificados'       },
    rating: 4.9, reviews: 128, duration: '3h', location: 'Florianópolis', price: 'USD 45',
  },
  {
    id: 2,
    image: '/src/assets/IMG/image-card02.png',
    badge:       { es: 'Nuevo',      pt: 'Novo'       },
    tag:         { es: 'Wellness',   pt: 'Wellness'   },
    title:       { es: 'Yoga al amanecer en la playa',      pt: 'Yoga ao amanhecer na praia'         },
    description: { es: '🧘 Instructora certificada',        pt: '🧘 Instrutora certificada'          },
    rating: 4.8, reviews: 96, duration: '2h', location: 'Florianópolis', price: 'USD 45',
  },
  {
    id: 3,
    image: '/src/assets/IMG/image-card03.png',
    badge: null,
    tag:         { es: 'Aventura',   pt: 'Aventura'   },
    title:       { es: 'Kayak por la Lagoa do Peri',        pt: 'Caiaque pela Lagoa do Peri'         },
    description: { es: 'Explora bahías escondidas con guías locales certificados.', pt: 'Explore baías escondidas com guias locais certificados.' },
    rating: 4.7, reviews: 211, duration: '4h', location: 'Florianópolis', price: 'USD 45',
  },
  {
    id: 4,
    image: '/src/assets/IMG/image-card04.png',
    badge:       { es: 'Popular',    pt: 'Popular'    },
    tag:         { es: 'Aventura',   pt: 'Aventura'   },
    title:       { es: 'Trekking Morro da Cruz',            pt: 'Trekking Morro da Cruz'             },
    description: { es: '🌿 Vista panorámica de la isla',    pt: '🌿 Vista panorâmica da ilha'        },
    rating: 4.9, reviews: 342, duration: '5h', location: 'Florianópolis', price: 'USD 45',
  },
  {
    id: 5,
    image: '/src/assets/IMG/image-card05.png',
    badge: null,
    tag:         { es: 'Gastronomía', pt: 'Gastronomia' },
    title:       { es: 'Tour por el mercado',               pt: 'Tour pelo mercado'                  },
    description: { es: '🍽 Sabores locales auténticos',     pt: '🍽 Sabores locais autênticos'       },
    rating: 4.6, reviews: 87, duration: '2h', location: 'Florianópolis', price: 'USD 45',
  },
  {
    id: 6,
    image: '/src/assets/IMG/image-card06.png',
    badge:       { es: 'Nuevo',      pt: 'Novo'       },
    tag:         { es: 'Outdoor',    pt: 'Outdoor'    },
    title:       { es: 'Stand Up Paddle en Lagoa',          pt: 'Stand Up Paddle na Lagoa'           },
    description: { es: '🌊 Aguas calmas garantizadas',      pt: '🌊 Águas calmas garantidas'        },
    rating: 4.8, reviews: 64, duration: '2h', location: 'Florianópolis', price: 'USD 45',
  },
]

export const benefits = [
  {
    icon: '🧭',
    title:       { es: 'Guías locales',   pt: 'Guias locais'   },
    description: { es: 'Cada experiencia es guiada por personas que nacieron y crecieron en la isla.', pt: 'Cada experiência é guiada por pessoas que nasceram e cresceram na ilha.' },
  },
  {
    icon: '✅',
    title:       { es: 'Verificadas',     pt: 'Verificadas'    },
    description: { es: 'Todas las experiencias pasan por un proceso de validación de calidad y seguridad.', pt: 'Todas as experiências passam por um processo de validação de qualidade e segurança.' },
  },
  {
    icon: '📱',
    title:       { es: 'Reserva fácil',   pt: 'Reserva fácil'  },
    description: { es: 'Reserva en minutos desde tu teléfono. Sin complicaciones ni papeleos.', pt: 'Reserve em minutos pelo seu celular. Sem complicações nem burocracia.' },
  },
  {
    icon: '💬',
    title:       { es: 'Soporte 24/7',    pt: 'Suporte 24/7'   },
    description: { es: 'Nuestro equipo está disponible en todo momento para ayudarte.', pt: 'Nossa equipe está disponível a qualquer momento para te ajudar.' },
  },
]

export const testimonial = {
  quote:  { es: 'El tour de kayak fue absolutamente mágico. Nuestro guía conocía cada rincón secreto de la laguna. Una experiencia que jamás olvidaré.', pt: 'O passeio de caiaque foi absolutamente mágico. Nosso guia conhecia cada cantinho secreto da lagoa. Uma experiência que jamais esquecerei.' },
  author: 'María González',
  role:   { es: 'Viajera · Buenos Aires', pt: 'Viajante · Buenos Aires' },
  avatar: '/src/assets/IMG/_avatar.png',
  rating: 5,
  stats:  { es: '⭐ 4.8 promedio · +5.000 experiencias', pt: '⭐ 4.8 média · +5.000 experiências' },
}
