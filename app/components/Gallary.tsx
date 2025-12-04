'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

const galleryItems = [
  {
    id: 1,
    title: 'Engine Rebuild',
    category: 'Engine Work',
    image: '/car-engine-rebuild-maintenance-professional-garage.jpg'
  },
  {
    id: 2,
    title: 'Suspension Service',
    category: 'Suspension',
    image: '/car-suspension-service-repair.jpg'
  },
  {
    id: 3,
    title: 'Brake System',
    category: 'Braking',
    image: '/car-brake-service-rotors-pads.jpg'
  },
  {
    id: 4,
    title: 'Transmission Work',
    category: 'Transmission',
    image: '/car-transmission-repair-service.jpg'
  },
  {
    id: 5,
    title: 'Electrical Diagnostics',
    category: 'Electrical',
    image: '/car-diagnostic-computer-repair-electrical.jpg'
  },
  {
    id: 6,
    title: 'Custom Detailing',
    category: 'Detailing',
    image: '/luxury-car-detailing-wash-professional.jpg'
  }
]

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const next = () => emblaApi?.scrollNext()
  const prev = () => emblaApi?.scrollPrev()

  return (
    <section id="gallery" className="py-20 md:py-28 bg-card border-t border-border">

      {/* Heading remains centered in container */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Our Work</span>
          <h2 className="text-3xl md:text-5xl font-bold text-card-foreground my-4">
            Repair Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See examples of our precision work and attention to detail
          </p>
        </div>
      </div>

      {/* FULL WIDTH CAROUSEL */}
      <div className="w-full relative">
        <div ref={emblaRef} className="overflow-hidden w-full">
          <div className="flex w-full">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_100%] relative w-full h-[70vh] md:h-[80vh]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-0 p-8 text-white">
                  <p className="text-sm text-primary uppercase font-semibold">
                    {item.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold mt-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={prev}
            className="p-3 bg-white/70 hover:bg-white rounded-full shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="p-3 bg-white/70 hover:bg-white rounded-full shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

    </section>
  )
}
