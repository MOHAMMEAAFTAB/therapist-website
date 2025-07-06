import Image from 'next/image'

const services = [
  {
    title: 'Relationship Counseling',
    description:
      'Helping couples and individuals navigate emotional challenges and build healthier relationships.',
    image: '/images/wuetende-kinder-beruhigen-678x381.jpg',
  },
  {
    title: 'Anxiety & Stress Therapy',
    description:
      'Personalized strategies to manage stress, reduce anxiety, and improve mental well-being.',
    image: '/images/2.jpg',
  },
  {
    title: 'Trauma Recovery',
    description:
      'Compassionate support and proven techniques to help you heal from trauma and reclaim your life.',
    image: '/images/couple-doing-family-therapy_23-2149305232.avif',
  },
]

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-4 text-center" id="services">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Services Offered</h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4 text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
