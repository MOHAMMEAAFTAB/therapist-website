// components/Services.tsx
const services = [
  { title: 'Individual Therapy', desc: 'Personalized support for adults and teens.' },
  { title: 'Couples Counseling', desc: 'Strengthen communication and relationships.' },
  { title: 'Anxiety & Depression', desc: 'Effective coping strategies for emotional well-being.' },
];

export default function Services() {
  return (
   <section id="services" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Services Offered</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
